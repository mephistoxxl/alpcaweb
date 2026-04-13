"use client";

import { ChangeEvent, FormEvent, useCallback, useEffect, useState } from "react";
import { Loader2, RefreshCcw, Send } from "lucide-react";

type FormData = {
  name: string;
  email: string;
  service: string;
  message: string;
  captchaAnswer: string;
  website: string;
};

type CaptchaChallenge = {
  question: string;
  token: string;
};

type Feedback = {
  type: "idle" | "success" | "error";
  message: string;
};

const INITIAL_FORM: FormData = {
  name: "",
  email: "",
  service: "Constitución de SAS",
  message: "",
  captchaAnswer: "",
  website: "",
};

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>(INITIAL_FORM);
  const [captcha, setCaptcha] = useState<CaptchaChallenge | null>(null);
  const [isLoadingCaptcha, setIsLoadingCaptcha] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState<Feedback>({ type: "idle", message: "" });

  const loadCaptcha = useCallback(async () => {
    setIsLoadingCaptcha(true);

    try {
      const response = await fetch("/api/contact/captcha", {
        method: "GET",
        cache: "no-store",
      });

      if (!response.ok) {
        throw new Error("No se pudo cargar el captcha.");
      }

      const data = (await response.json()) as CaptchaChallenge;
      setCaptcha(data);
    } catch {
      setCaptcha(null);
    } finally {
      setIsLoadingCaptcha(false);
    }
  }, []);

  useEffect(() => {
    void loadCaptcha();
  }, [loadCaptcha]);

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = event.target;
    setFormData((previous) => ({ ...previous, [name]: value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!captcha?.token) {
      setFeedback({ type: "error", message: "No se pudo cargar el captcha. Recárgalo e intenta de nuevo." });
      return;
    }

    setIsSubmitting(true);
    setFeedback({ type: "idle", message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          captchaToken: captcha.token,
        }),
      });

      const data = (await response.json()) as { message?: string; error?: string };

      if (!response.ok) {
        setFeedback({
          type: "error",
          message: data.error || "No se pudo enviar tu consulta. Intenta nuevamente.",
        });
        setFormData((previous) => ({ ...previous, captchaAnswer: "" }));
        await loadCaptcha();
        return;
      }

      setFeedback({
        type: "success",
        message: data.message || "Tu consulta fue enviada correctamente.",
      });
      setFormData(INITIAL_FORM);
      await loadCaptcha();
    } catch {
      setFeedback({
        type: "error",
        message: "Error de conexión. Verifica tu internet e intenta nuevamente.",
      });
      setFormData((previous) => ({ ...previous, captchaAnswer: "" }));
      await loadCaptcha();
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit} noValidate>
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2">
            Nombre o Razón Social
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            minLength={3}
            className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-700 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
            placeholder="Ej. Empresa S.A."
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">
            Correo Electrónico
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-700 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
            placeholder="correo@empresa.com"
          />
        </div>
      </div>

      <div>
        <label htmlFor="service" className="block text-sm font-semibold text-slate-700 mb-2">
          Servicio de Interés
        </label>
        <select
          id="service"
          name="service"
          value={formData.service}
          onChange={handleChange}
          className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-700 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
        >
          <option>Constitución de SAS</option>
          <option>Emisión de Firma Electrónica</option>
          <option>Contabilidad e Impuestos SRI</option>
          <option>Nómina y Legalizaciones MDT</option>
          <option>Software Facturador Electrónico</option>
          <option>Consultoría General</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2">
          ¿Cómo podemos ayudarte?
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={formData.message}
          onChange={handleChange}
          required
          minLength={10}
          className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-700 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all resize-none"
          placeholder="Cuéntanos brevemente sobre la situación de tu negocio..."
        ></textarea>
      </div>

      <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
        <div className="flex items-start justify-between gap-3">
          <div>
            <label htmlFor="captchaAnswer" className="block text-sm font-semibold text-slate-700 mb-1">
              Verificación de seguridad
            </label>
            <p className="text-sm text-slate-600">
              {isLoadingCaptcha ? "Cargando captcha..." : captcha?.question || "No se pudo cargar el captcha."}
            </p>
          </div>
          <button
            type="button"
            onClick={() => void loadCaptcha()}
            className="p-2 rounded-md border border-slate-300 text-slate-600 hover:text-accent hover:border-accent transition-colors"
            aria-label="Recargar captcha"
          >
            <RefreshCcw className={`w-4 h-4 ${isLoadingCaptcha ? "animate-spin" : ""}`} />
          </button>
        </div>

        <input
          type="text"
          id="captchaAnswer"
          name="captchaAnswer"
          inputMode="numeric"
          value={formData.captchaAnswer}
          onChange={handleChange}
          required
          disabled={isLoadingCaptcha || !captcha?.token || isSubmitting}
          className="mt-3 w-full bg-white border border-slate-200 rounded-lg px-4 py-3 text-slate-700 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
          placeholder="Escribe el resultado"
        />
      </div>

      <div className="hidden" aria-hidden="true">
        <label htmlFor="website">Sitio web</label>
        <input
          type="text"
          id="website"
          name="website"
          value={formData.website}
          onChange={handleChange}
          autoComplete="off"
          tabIndex={-1}
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting || isLoadingCaptcha || !captcha?.token}
        className="w-full bg-accent hover:bg-primary text-white font-bold py-4 rounded-lg flex items-center justify-center gap-2 transition-colors shadow-lg hover:shadow-xl group disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:bg-accent"
      >
        {isSubmitting ? (
          <Loader2 className="w-5 h-5 animate-spin" />
        ) : (
          <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        )}
        {isSubmitting ? "Enviando..." : "Enviar Consulta"}
      </button>

      {feedback.type !== "idle" && (
        <p
          className={`text-sm font-medium ${
            feedback.type === "success" ? "text-emerald-600" : "text-rose-600"
          }`}
        >
          {feedback.message}
        </p>
      )}
    </form>
  );
}
