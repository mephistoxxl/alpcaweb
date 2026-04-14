import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type ContactRequestBody = {
  nombre?: string;
  apellido?: string;
  email?: string;
  telefono?: string;
  servicio?: string;
  recaptchaToken?: string;
  website?: string;
};

function normalizeText(value: string): string {
  return value.replace(/\s+/g, " ").trim();
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

async function verifyRecaptcha(token: string): Promise<boolean> {
  const secret = process.env.RECAPTCHA_SECRET_KEY;
  if (!secret) return false;

  const res = await fetch("https://www.google.com/recaptcha/api/siteverify", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: `secret=${secret}&response=${token}`,
  });

  const data = (await res.json()) as { success: boolean };
  return data.success === true;
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactRequestBody;

    // Honeypot anti-spam
    const website = normalizeText(body.website ?? "");
    if (website) {
      return NextResponse.json({ ok: true }, { status: 200 });
    }

    const nombre = normalizeText(body.nombre ?? "");
    const apellido = normalizeText(body.apellido ?? "");
    const email = normalizeText(body.email ?? "").toLowerCase();
    const telefono = normalizeText(body.telefono ?? "");
    const servicio = normalizeText(body.servicio ?? "Consultoría General");
    const recaptchaToken = body.recaptchaToken ?? "";

    if (nombre.length < 2) {
      return NextResponse.json({ error: "Ingresa un nombre válido." }, { status: 400 });
    }

    if (!EMAIL_REGEX.test(email)) {
      return NextResponse.json({ error: "Ingresa un correo válido." }, { status: 400 });
    }

    if (servicio.length < 5) {
      return NextResponse.json({ error: "Describe brevemente el servicio que buscas." }, { status: 400 });
    }

    if (!recaptchaToken) {
      return NextResponse.json({ error: "Por favor completa el captcha." }, { status: 400 });
    }

    const recaptchaOk = await verifyRecaptcha(recaptchaToken);
    if (!recaptchaOk) {
      return NextResponse.json({ error: "Captcha inválido. Intenta nuevamente." }, { status: 400 });
    }

    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const smtpHost = process.env.SMTP_HOST || "smtp.zeptomail.com";
    const smtpPort = Number.parseInt(process.env.SMTP_PORT || "587", 10);
    const emailFrom = process.env.EMAIL_FROM;
    const emailTo = process.env.EMAIL_TO;

    if (!smtpPass || !emailFrom || !emailTo) {
      console.error("Faltan variables de entorno: SMTP_PASS, EMAIL_FROM o EMAIL_TO");
      return NextResponse.json(
        { error: "Error de configuración del servidor. Contacta al administrador." },
        { status: 500 },
      );
    }

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    const nombreCompleto = apellido ? `${nombre} ${apellido}` : nombre;

    await transporter.sendMail({
      from: `"Sitio Web ALPCA" <${emailFrom}>`,
      to: emailTo,
      replyTo: email,
      subject: `Nuevo contacto web - ${servicio}`,
      text: [
        "Nuevo mensaje desde el formulario de contacto de ALPCA",
        "",
        `Nombre: ${nombreCompleto}`,
        `Correo: ${email}`,
        telefono ? `Teléfono: ${telefono}` : null,
        `Servicio de interés: ${servicio}`,
      ]
        .filter(Boolean)
        .join("\n"),
      html: `
        <h2 style="color:#482845;">Nuevo mensaje desde el formulario de contacto de ALPCA</h2>
        <table style="border-collapse:collapse;width:100%;max-width:560px;">
          <tr><td style="padding:8px 12px;font-weight:bold;background:#f5f0f4;">Nombre</td><td style="padding:8px 12px;">${escapeHtml(nombreCompleto)}</td></tr>
          <tr><td style="padding:8px 12px;font-weight:bold;background:#f5f0f4;">Correo</td><td style="padding:8px 12px;">${escapeHtml(email)}</td></tr>
          ${telefono ? `<tr><td style="padding:8px 12px;font-weight:bold;background:#f5f0f4;">Teléfono</td><td style="padding:8px 12px;">${escapeHtml(telefono)}</td></tr>` : ""}
          <tr><td style="padding:8px 12px;font-weight:bold;background:#f5f0f4;">Servicio de interés</td><td style="padding:8px 12px;">${escapeHtml(servicio)}</td></tr>
        </table>
      `,
    });

    return NextResponse.json(
      { ok: true, message: "Tu consulta fue enviada correctamente." },
      { status: 200 },
    );
  } catch (error) {
    console.error("Error en envio de formulario de contacto", error);
    return NextResponse.json(
      { error: "No se pudo enviar tu consulta. Intenta nuevamente." },
      { status: 500 },
    );
  }
}
