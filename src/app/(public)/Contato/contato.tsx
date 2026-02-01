"use client";

import { useState } from "react";
import Footer from "@/app/components/Footer/footer";
import PublicHeader from "@/app/components/PublicHeader/publicHeader";
import styles from "./contato.module.css";

export default function Contato() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    assunto: "",
    mensagem: "",
  });
  const [enviado, setEnviado] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você pode integrar com API, email (ex: Resend, SendGrid) ou WhatsApp
    setEnviado(true);
    setFormData({ nome: "", email: "", assunto: "", mensagem: "" });
  };

  return (
    <div className={styles.page}>
      <PublicHeader />

      <div className={styles.content}>
        <h1 className={styles.pageTitle}>Contato</h1>
        <p className={styles.pageSubtitle}>
          Envie sua mensagem ou entre em contato pelos canais abaixo.
        </p>
        <div className={styles.grid}>
          {/* Formulário */}
          <section className={styles.formSection}>
            <h2 className={styles.formTitle}>Envie uma mensagem</h2>
            {enviado ? (
              <div className={styles.success}>
                Mensagem enviada com sucesso! Em breve entraremos em contato.
              </div>
            ) : (
              <form className={styles.form} onSubmit={handleSubmit}>
                <label className={styles.label} htmlFor="nome">
                  Nome
                </label>
                <input
                  id="nome"
                  name="nome"
                  type="text"
                  required
                  value={formData.nome}
                  onChange={handleChange}
                  className={styles.input}
                  placeholder="Seu nome"
                />

                <label className={styles.label} htmlFor="email">
                  E-mail
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className={styles.input}
                  placeholder="seu@email.com"
                />

                <label className={styles.label} htmlFor="assunto">
                  Assunto
                </label>
                <select
                  id="assunto"
                  name="assunto"
                  value={formData.assunto}
                  onChange={handleChange}
                  className={styles.select}
                >
                  <option value="">Selecione...</option>
                  <option value="treino">Treinos e planos</option>
                  <option value="dicas">Dúvidas e dicas</option>
                  <option value="parceria">Parcerias</option>
                  <option value="outro">Outro</option>
                </select>

                <label className={styles.label} htmlFor="mensagem">
                  Mensagem
                </label>
                <textarea
                  id="mensagem"
                  name="mensagem"
                  required
                  rows={5}
                  value={formData.mensagem}
                  onChange={handleChange}
                  className={styles.textarea}
                  placeholder="Escreva sua mensagem..."
                />

                <button type="submit" className={styles.button}>
                  Enviar mensagem
                </button>
              </form>
            )}
          </section>

          {/* Informações de contato */}
          <aside className={styles.infoSection}>
            <h2 className={styles.infoTitle}>Outros canais</h2>
            <div className={styles.infoCard}>
              <span className={styles.infoLabel}>WhatsApp</span>
              <a
                href="https://wa.me/5511999999999"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.infoLink}
              >
                (11) 99999-9999
              </a>
              <p className={styles.infoHint}>
                Substitua pelo seu número real (com DDI e DDD).
              </p>
            </div>
            <div className={styles.infoCard}>
              <span className={styles.infoLabel}>E-mail</span>
              <a href="mailto:contato@gutembergpersonal.com" className={styles.infoLink}>
                contato@gutembergpersonal.com
              </a>
            </div>
            <div className={styles.infoCard}>
              <span className={styles.infoLabel}>Redes sociais</span>
              <p className={styles.infoText}>
                Acesse os links na página de Links para Instagram e outros canais.
              </p>
            </div>
          </aside>
        </div>
      </div>

      <Footer />
    </div>
  );
}
