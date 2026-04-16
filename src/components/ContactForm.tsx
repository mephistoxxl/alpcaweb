"use client";

import Script from "next/script";
import { ChangeEvent, FormEvent, useState } from "react";
import { CheckCircle, Loader2, XCircle } from "lucide-react";

declare global {
  interface Window {
    grecaptcha: {
      ready: (cb: () => void) => void;
      execute: (siteKey: string, options: { action: string }) => Promise<string>;
    };
  }
}

type FormData = {
  nombre: string;
  apellido: string;
  email: string;
  telefono: string;
  servicio: string;
  consentimiento: boolean;
  website: string;
};

type Feedback = {
  type: "idle" | "success" | "error";
  message: string;
};

const INITIAL_FORM: FormData = {
  nombre: "",
  apellido: "",
  email: "",
  telefono: "",
  servicio: "",
  consentimiento: false,
  website: "",
};

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>(INITIAL_FORM);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState<Feedback>({ type: "idle", message: "" });

  const sitekey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckbox = (event: ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, consentimiento: event.target.checked }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFeedback({ type: "idle", message: "" });

    if (!formData.consentimiento) {
      setFeedback({ type: "error", message: "Debes aceptar el consentimiento para continuar." });
      return;
    }

    setIsSubmitting(true);

    try {
      // Obtener token de reCAPTCHA v3 de forma invisible
      let recaptchaToken = "";
      if (sitekey) {
        await new Promise<void>((resolve) => window.grecaptcha.ready(resolve));
        recaptchaToken = await window.grecaptcha.execute(sitekey, { action: "contact_form" });
      }

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nombre: formData.nombre,
          apellido: formData.apellido,
          email: formData.email,
          telefono: formData.telefono,
          servicio: formData.servicio,
          recaptchaToken,
          website: formData.website,
        }),
      });

      const data = (await response.json()) as { message?: string; error?: string };

      if (!response.ok) {
        setFeedback({
          type: "error",
          message: data.error ?? "No se pudo enviar tu consulta. Intenta nuevamente.",
        });
        return;
      }

      setFeedback({
        type: "success",
        message: data.message ?? "Tu consulta fue enviada correctamente.",
      });
      setFormData(INITIAL_FORM);
    } catch {
      setFeedback({
        type: "error",
        message: "Error de conexión. Verifica tu internet e intenta nuevamente.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (feedback.type === "success") {
    return (
      <div className="flex flex-col items-center justify-center text-center gap-4 min-h-[380px]">
        <CheckCircle className="w-16 h-16 text-green-500" />
        <h3 className="text-2xl font-bold text-[#482845]">¡Mensaje enviado!</h3>
        <p className="text-slate-600 text-sm leading-relaxed max-w-xs">
          Gracias por contactarnos. Un asesor de ALPCA se comunicará contigo a la brevedad.
        </p>
        <button
          onClick={() => setFeedback({ type: "idle", message: "" })}
          className="mt-2 text-sm text-[#fe6333] font-semibold underline underline-offset-2 hover:text-[#eb5b2f] transition-colors"
        >
          Enviar otro mensaje
        </button>
      </div>
    );
  }

  return (
    <>
      {/* Script reCAPTCHA v3 — carga una sola vez */}
      {sitekey && (
        <Script
          src={`https://www.google.com/recaptcha/api.js?render=${sitekey}`}
          strategy="afterInteractive"
        />
      )}

      <form className="space-y-4" onSubmit={(e) => void handleSubmit(e)} noValidate>
        {/* Honeypot anti-spam */}
        <div className="hidden" aria-hidden="true">
          <input
            type="text"
            name="website"
            value={formData.website}
            onChange={handleChange}
            autoComplete="off"
            tabIndex={-1}
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-1">
            <label htmlFor="cf-nombre" className="text-[15px] font-semibold text-[#482845]">
              Nombre*
            </label>
            <input
              id="cf-nombre"
              name="nombre"
              type="text"
              required
              value={formData.nombre}
              onChange={handleChange}
              className="w-full px-4 py-2.5 bg-[#e9e2e6] rounded-xl outline-none focus:ring-2 focus:ring-[#482845]/30 transition"
            />
          </div>
          <div className="space-y-1">
            <label htmlFor="cf-apellido" className="text-[15px] font-semibold text-[#482845]">
              Apellido*
            </label>
            <input
              id="cf-apellido"
              name="apellido"
              type="text"
              required
              value={formData.apellido}
              onChange={handleChange}
              className="w-full px-4 py-2.5 bg-[#e9e2e6] rounded-xl outline-none focus:ring-2 focus:ring-[#482845]/30 transition"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-1">
            <label htmlFor="cf-email" className="text-[15px] font-semibold text-[#482845]">
              Correo*
            </label>
            <input
              id="cf-email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2.5 bg-[#e9e2e6] rounded-xl outline-none focus:ring-2 focus:ring-[#482845]/30 transition"
            />
          </div>
          <div className="space-y-1">
            <label htmlFor="cf-telefono" className="text-[15px] font-semibold text-[#482845]">
              Teléfono*
            </label>
            <input
              id="cf-telefono"
              name="telefono"
              type="tel"
              required
              value={formData.telefono}
              onChange={handleChange}
              className="w-full px-4 py-2.5 bg-[#e9e2e6] rounded-xl outline-none focus:ring-2 focus:ring-[#482845]/30 transition"
            />
          </div>
        </div>

        <div className="space-y-1 mt-2">
          <label htmlFor="cf-servicio" className="text-[15px] font-semibold text-[#482845]">
            ¿Qué tipo de servicios estás buscando?*
          </label>
          <textarea
            id="cf-servicio"
            name="servicio"
            rows={3}
            required
            value={formData.servicio}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-[#e9e2e6] rounded-xl outline-none resize-none focus:ring-2 focus:ring-[#482845]/30 transition"
          />
        </div>

        <div className="flex items-start gap-3 mt-4">
          <input
            id="cf-consentimiento"
            type="checkbox"
            checked={formData.consentimiento}
            onChange={handleCheckbox}
            className="mt-1 w-4 h-4 rounded border-gray-300 accent-[#482845] cursor-pointer"
          />
          <label htmlFor="cf-consentimiento" className="text-[11px] text-[#482845] leading-tight font-medium cursor-pointer">
            Al dar click en esta casilla, Ud. ofrece a ALP SOLUCIONES &amp; SERVICIOS C.A., su consentimiento para que
            tratemos sus datos personales con la finalidad de ser contactado y atender su petición. Para conocer las
            condiciones relativas a la privacidad de sus datos personales, puede consultar nuestra Política de
            Privacidad{" "}
            <span className="text-[#fe6333] hover:underline">aquí</span>
          </label>
        </div>

        {/* Error */}
        {feedback.type === "error" && (
          <div className="flex items-center gap-2 text-red-700 text-sm font-medium bg-red-50 border border-red-200 px-3 py-2 rounded-lg">
            <XCircle className="w-4 h-4 flex-shrink-0" />
            {feedback.message}
          </div>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-[#fe6333] hover:bg-[#eb5b2f] disabled:opacity-60 disabled:cursor-not-allowed text-white text-lg font-medium py-3 rounded-md transition-colors mt-4 flex items-center justify-center gap-2"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Enviando…
            </>
          ) : (
            "Enviar"
          )}
        </button>

        {/* Nota de privacidad reCAPTCHA v3 (recomendado por Google) */}
        {sitekey && (
          <p className="text-[10px] text-slate-400 text-center leading-snug mt-1">
            Este sitio está protegido por reCAPTCHA y aplican la{" "}
            <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="underline hover:text-slate-600">
              Política de Privacidad
            </a>{" "}
            y los{" "}
            <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer" className="underline hover:text-slate-600">
              Términos de Servicio
            </a>{" "}
            de Google.
          </p>
        )}
      </form>
    </>
  );
}
