"use client";

import { useState } from "react";
import type { Dictionary } from "@/content/dictionary";

type Values = Record<string, string>;
type Errors = Record<string, string>;

function validate(values: Values, t: Dictionary["signup"]["errors"]): Errors {
  const errors: Errors = {};

  if (!values.nombre?.trim()) errors.nombre = t.name;

  const phone = values.telefono?.replace(/[\s()-]/g, "") ?? "";
  if (!phone) errors.telefono = t.phoneMissing;
  else if (!/^\+?\d{7,15}$/.test(phone)) errors.telefono = t.phoneInvalid;

  const email = values.email?.trim() ?? "";
  if (!email) errors.email = t.emailMissing;
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) errors.email = t.emailInvalid;

  return errors;
}

export function LeadForm({ dict }: { dict: Dictionary }) {
  const t = dict.signup;
  const [values, setValues] = useState<Values>({});
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const found = validate(values, t.errors);
    setErrors(found);
    if (Object.keys(found).length > 0) return;

    setStatus("sending");
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      setStatus(res.ok ? "sent" : "error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="stack-16">
        <span className="tag tag--strong">{t.success.eyebrow}</span>
        <h3>{t.success.title}</h3>
        <p className="body-s" style={{ maxWidth: "42ch" }}>
          {t.success.body}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="form">
      {t.fields.map((field, i) => (
        <label key={field.name} className="field">
          <span className="tag">{field.label}</span>
          <input
            type={["text", "tel", "email"][i]}
            name={field.name}
            placeholder={field.placeholder}
            value={values[field.name] ?? ""}
            aria-invalid={Boolean(errors[field.name])}
            onChange={(e) => setValues((v) => ({ ...v, [field.name]: e.target.value }))}
          />
          {errors[field.name] && (
            <span role="alert" className="caption" style={{ color: "var(--accent)" }}>
              {errors[field.name]}
            </span>
          )}
        </label>
      ))}

      <button type="submit" className="btn btn--primary btn--block" disabled={status === "sending"}>
        {status === "sending" ? t.sending : t.submit}
      </button>

      {status === "error" && (
        <p role="alert" className="caption" style={{ color: "var(--accent)" }}>
          {t.errors.submit}
        </p>
      )}

      <p className="caption">{t.whatsappNote}</p>
    </form>
  );
}
