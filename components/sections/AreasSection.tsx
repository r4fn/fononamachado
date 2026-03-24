import SiteContainer from "@/components/layout/SiteContainer";
import SectionLabel from "@/components/ui/SectionLabel";
import GoldRule from "@/components/ui/GoldRule";
import { AreaCardIcon } from "@/components/ui/SectionCardIcons";
import { siteEdgePadding } from "@/lib/siteLayout";
import { cn } from "@/lib/utils";
import type { AreaCard } from "@/types";

const AREAS: AreaCard[] = [
  {
    iconKey: "childLanguage",
    title: "Linguagem infantil",
    description:
      "Avaliação e intervenção no desenvolvimento da linguagem em crianças, trabalhando comunicação, fala e compreensão.",
  },
  {
    iconKey: "adultLanguage",
    title: "Linguagem adulto",
    description:
      "Acompanhamento terapêutico para adultos com alterações de linguagem, voz ou comunicação em geral.",
  },
  {
    iconKey: "oro",
    title: "Motricidade orofacial",
    description:
      "Avaliação e tratamento de alterações nos músculos da face, boca, mastigação, deglutição e respiração.",
  },
  {
    iconKey: "dysphagia",
    title: "Disfagia adulto",
    description:
      "Reabilitação da deglutição em adultos, com atendimento domiciliar disponível para casos que exigem.",
  },
  {
    iconKey: "assessment",
    title: "Avaliação detalhada",
    description:
      "Processo avaliativo completo com elaboração de plano terapêutico individualizado para cada paciente.",
  },
  {
    iconKey: "family",
    title: "Orientação familiar",
    description:
      "Suporte e orientação para famílias, integrando o núcleo familiar no processo terapêutico da criança.",
  },
];

export default function AreasSection() {
  return (
    <section
      id="areas"
      aria-labelledby="areas-titulo"
      className={cn(
        "bg-cream-alt py-24 text-center lg:py-28",
        siteEdgePadding,
      )}
    >
      <SiteContainer>
        <SectionLabel>Especialidades</SectionLabel>
        <h2
          id="areas-titulo"
          className="font-serif text-[clamp(2.2rem,4vw,3.2rem)] font-light leading-[1.15] text-ink"
        >
          Áreas de <span className="text-forest italic">Atuação</span>
        </h2>
        <GoldRule className="mx-auto" />

        <div
          className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-5"
          role="list"
        >
          {AREAS.map((area) => (
            <article
              key={area.title}
              role="listitem"
              className={cn(
                "rounded-2xl border border-forest/10 bg-white p-8 text-center shadow-card",
                "transition-all duration-200",
                "hover:-translate-y-1 hover:border-sage/50 hover:shadow-md",
              )}
            >
              <span
                className={cn(
                  "mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl",
                  "border border-forest/10 bg-sage-pale/60 text-forest",
                )}
                aria-hidden
              >
                <AreaCardIcon name={area.iconKey} />
              </span>
              <h3 className="mb-2.5 font-serif text-[1.3rem] font-normal text-forest">
                {area.title}
              </h3>
              <p className="text-[0.84rem] font-light leading-[1.7] text-ink-muted">
                {area.description}
              </p>
            </article>
          ))}
        </div>
      </SiteContainer>
    </section>
  );
}
