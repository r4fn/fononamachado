import type { Metadata } from "next";
import SiteContainer from "@/components/layout/SiteContainer";
import ValoresCard from "@/components/cadastro/ValoresCard";
import FormCadastro from "@/components/cadastro/FormCadastro";
import { siteEdgePadding } from "@/lib/siteLayout";

export const metadata: Metadata = {
  title: "Cadastro de Paciente — Nathália Machado Fonoaudióloga",
  robots: { index: false, follow: false },
};

export default function CadastroPage() {
  return (
    <>
      {/* Hero */}
      <div
        data-navbar-dark
        className={`bg-forest pb-12 pt-[calc(72px+2.5rem)] text-center ${siteEdgePadding}`}
      >
        <SiteContainer>
          <h1 className="font-serif text-[clamp(2rem,4vw,3rem)] font-light tracking-wide text-white">
            Ficha de <em className="not-italic text-honey-light">Cadastro</em>
          </h1>
          <p className="mx-auto mt-3 max-w-lg text-[0.9rem] font-light leading-[1.7] text-white/65">
            Preencha os dados abaixo para formalizar seu atendimento.
            <br />
            As informações serão utilizadas para emissão de nota fiscal e
            organização dos atendimentos.
          </p>
          <div className="mx-auto mt-5 h-px w-12 bg-honey" />
        </SiteContainer>
      </div>

      {/* Valores */}
      <ValoresCard />

      {/* Form */}
      <div className={`pb-16 ${siteEdgePadding}`}>
        <SiteContainer className="max-w-3xl">
          <FormCadastro />
        </SiteContainer>
      </div>
    </>
  );
}
