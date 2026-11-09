"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2, LoaderCircle } from "lucide-react";

export default function ContactForm() {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    const form = event.currentTarget;
    const data = new FormData(form);
    try {
      const response = await fetch("https://formsubmit.co/ajax/psievertonaraujo@gmail.com", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      if (!response.ok) throw new Error("Falha no envio");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="contact-form-wrap">
      <button className="contact-form-toggle" type="button" onClick={() => setOpen(!open)}>
        Prefiro deixar meu contato <ArrowRight size={16} />
      </button>
      {open && (
        <form className="contact-form" onSubmit={handleSubmit}>
          <p className="form-intro">Preencha seus dados e entrarei em contato. Não inclua informações íntimas ou detalhes clínicos neste formulário.</p>
          <label>Seu nome<input name="nome" autoComplete="name" required maxLength={100} placeholder="Como posso chamar você?" /></label>
          <label>WhatsApp<input name="whatsapp" type="tel" autoComplete="tel" required maxLength={25} placeholder="(00) 00000-0000" /></label>
          <label>Faixa etária<select name="faixa_etaria" required defaultValue=""><option value="" disabled>Selecione</option><option>Adolescente (12 a 17 anos)</option><option>Adulto (18 anos ou mais)</option></select></label>
          <label>Melhor horário para contato<select name="horario" defaultValue=""><option value="">Sem preferência</option><option>Manhã</option><option>Tarde</option><option>Noite</option></select></label>
          <label>Mensagem (opcional)<textarea name="mensagem" rows={3} maxLength={500} placeholder="Se desejar, deixe uma breve mensagem." /></label>
          <input type="hidden" name="_subject" value="Novo contato pelo site — Everton Araújo" />
          <input type="text" name="_honey" tabIndex={-1} autoComplete="off" className="form-honey" />
          <button className="button button-light form-submit" type="submit" disabled={status === "sending"}>
            {status === "sending" ? <><LoaderCircle className="spin" size={17} /> Enviando...</> : <>Enviar contato <ArrowRight size={17} /></>}
          </button>
          {status === "success" && <p className="form-status"><CheckCircle2 size={17} /> Dados enviados. Obrigado pelo contato!</p>}
          {status === "error" && <p className="form-status form-error">Não foi possível enviar agora. Tente novamente ou fale comigo pelo WhatsApp.</p>}
          <small className="form-privacy">Seus dados serão usados somente para retornar seu contato.</small>
        </form>
      )}
    </div>
  );
}
