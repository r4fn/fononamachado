import type { Metadata } from "next";
import Link from "next/link";
import SiteContainer from "@/components/layout/SiteContainer";
import ValoresCard from "@/components/cadastro/ValoresCard";
import FormCadastro from "@/components/cadastro/FormCadastro";
import Logo from "@/components/ui/Logo";
import { siteEdgePadding } from "@/lib/siteLayout";

export const metadata: Metadata = {
  title: "Cadastro de Paciente — Nathália Machado Fonoaudióloga",
  robots: { index: false, follow: false },
};

const ChevronLeft = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <polyline points="15 18 9 12 15 6" />
  </svg>
);

export default function CadastroPage() {
  return (
    <>
      {/* Sub-nav */}
      <nav
        className={`fixed left-0 right-0 top-0 z-50 h-[72px] border-b border-forest/10 bg-cream/92 backdrop-blur-xl ${siteEdgePadding}`}
      >
        <SiteContainer className="flex h-full items-center justify-between">
          <Logo height={72} priority alt="Logo" className="flex-shrink-0" />
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[0.78rem] font-medium uppercase tracking-[0.12em] text-ink-muted transition-colors hover:text-forest"
          >
            <ChevronLeft />
            Voltar ao site
          </Link>
        </SiteContainer>
      </nav>

      {/* Hero */}
      <div className={`bg-forest pb-12 pt-[110px] text-center ${siteEdgePadding}`}>
        <SiteContainer>
          <p className="mb-3 text-[0.68rem] font-semibold uppercase tracking-[0.25em] text-honey-light">
            Fono na Machado
          </p>
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
