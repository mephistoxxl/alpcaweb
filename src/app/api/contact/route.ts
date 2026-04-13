import nodemailer from "nodemailer";
import { NextResponse } from "next/server";
import { verifyCaptchaToken } from "@/lib/contact-captcha";

export const runtime = "nodejs";

const DESTINATION_EMAIL = "alpcontadoresyauditores@gmail.com";
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type ContactRequestBody = {
  name?: string;
  email?: string;
  service?: string;
  message?: string;
  captchaAnswer?: string;
  captchaToken?: string;
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

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactRequestBody;

    const website = normalizeText(body.website ?? "");
    if (website) {
      return NextResponse.json({ ok: true }, { status: 200 });
    }

    const name = normalizeText(body.name ?? "");
    const email = normalizeText(body.email ?? "").toLowerCase();
    const service = normalizeText(body.service ?? "Consultoría General");
    const message = normalizeText(body.message ?? "");
    const captchaAnswer = normalizeText(body.captchaAnswer ?? "");
    const captchaToken = normalizeText(body.captchaToken ?? "");

    if (name.length < 3) {
      return NextResponse.json({ error: "Ingresa un nombre válido." }, { status: 400 });
    }

    if (!EMAIL_REGEX.test(email)) {
      return NextResponse.json({ error: "Ingresa un correo válido." }, { status: 400 });
    }

    if (message.length < 10) {
      return NextResponse.json({ error: "El mensaje debe tener al menos 10 caracteres." }, { status: 400 });
    }

    if (!verifyCaptchaToken(captchaToken, captchaAnswer)) {
      return NextResponse.json({ error: "Captcha inválido. Intenta nuevamente." }, { status: 400 });
    }

    const smtpUser = process.env.SMTP_USER || DESTINATION_EMAIL;
    const smtpPass = process.env.SMTP_PASS;
    const smtpHost = process.env.SMTP_HOST || "smtp.gmail.com";
    const smtpPort = Number.parseInt(process.env.SMTP_PORT || "465", 10);

    if (!smtpPass) {
      return NextResponse.json(
        { error: "Falta configurar SMTP_PASS para enviar correos." },
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

    await transporter.sendMail({
      from: `"Sitio Web ALPCA" <${smtpUser}>`,
      to: DESTINATION_EMAIL,
      replyTo: email,
      subject: `Nuevo contacto web - ${service}`,
      text: [
        "Nuevo mensaje desde el formulario de contacto de ALPCA",
        "",
        `Nombre o Razon Social: ${name}`,
        `Correo: ${email}`,
        `Servicio de interes: ${service}`,
        "",
        "Mensaje:",
        message,
      ].join("\n"),
      html: `
        <h2>Nuevo mensaje desde el formulario de contacto de ALPCA</h2>
        <p><strong>Nombre o Razón Social:</strong> ${escapeHtml(name)}</p>
        <p><strong>Correo:</strong> ${escapeHtml(email)}</p>
        <p><strong>Servicio de interés:</strong> ${escapeHtml(service)}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${escapeHtml(message).replace(/\n/g, "<br />")}</p>
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
