import SiteContainer from "@/components/layout/SiteContainer";
import SectionLabel from "@/components/ui/SectionLabel";
import GoldRule from "@/components/ui/GoldRule";
import { InfoCardIcon } from "@/components/ui/SectionCardIcons";
import { siteEdgePadding } from "@/lib/siteLayout";
import { cn } from "@/lib/utils";
import type { InfoCard } from "@/types";

const INFO_CARDS: InfoCard[] = [
  {
    iconKey: "weekly",
    title: "Atendimento semanal",
    description:
      "Preferencialmente semanal — a constância é essencial para o processo terapêutico. Você tem um horário exclusivo reservado na agenda.",
  },
  {
    iconKey: "biweekly",
    title: "Atendimento quinzenal",
    description:
      "Disponível em situações específicas, sem reserva de horário fixo. Pagamento por sessão individual.",
  },
  {
    iconKey: "home",
    title: "Atendimento domiciliar",
    description:
      "Disponível para disfagia e linguagem. Mesmo valor do consultório para disfagia (R$ 150). Acréscimo de deslocamento para outra cidade.",
  },
  {
    iconKey: "session",
    title: "Duração da sessão",
    description:
      "45 minutos por sessão. O valor se aplica a todas as consultas: anamnese, avaliação e acompanhamento.",
  },
];

export default function SobreSection() {
  return (
    <section
      id="sobre"
      aria-labelledby="sobre-titulo"
      className={cn("bg-white py-24 lg:py-28", siteEdgePadding)}
    >
      <SiteContainer className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-20">
        <div>
          <SectionLabel>Quem sou eu</SectionLabel>
          <h2
            id="sobre-titulo"
            className="mb-6 font-serif text-[clamp(2.2rem,4vw,3.2rem)] font-light leading-[1.15] text-ink"
          >
            Sobre <span className="text-forest italic">Mim</span>
          </h2>
          <GoldRule />
          <p className="mb-4 font-light leading-[1.9] text-ink-muted">
            Sou Fonoaudióloga, formada pela Universidade de Sorocaba, e realizo
            atendimentos para crianças e adultos em São Miguel Arcanjo e região.
          </p>
          <p className="mb-4 font-light leading-[1.9] text-ink-muted">
            Meu trabalho é guiado pelo cuidado, pela escuta e pelo respeito,
            sempre buscando oferecer um acompanhamento responsável e de qualidade
            de acordo com as necessidades de cada pessoa.
          </p>
          <div className="mt-6 rounded-2xl border border-sage/30 bg-sage-pale/80 px-6 py-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.7)]">
            <p className="text-[0.92rem] font-normal leading-[1.75] text-forest">
              O atendimento é individual, com duração de 45 minutos, baseado em
              avaliação detalhada e plano terapêutico personalizado, respeitando
              as necessidades de cada paciente e família.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          {INFO_CARDS.map((card) => (
            <article
              key={card.title}
              className={cn(
                "rounded-2xl border border-forest/10 bg-cream p-5 shadow-card",
                "transition-all duration-200",
                "hover:-translate-y-0.5 hover:border-sage/40 hover:bg-white hover:shadow-md",
              )}
            >
              <div className="flex gap-4">
                <span
                  className={cn(
                    "flex h-12 w-12 shrink-0 items-center justify-center rounded-xl",
                    "border border-forest/10 bg-white text-forest",
                  )}
                  aria-hidden
                >
                  <InfoCardIcon name={card.iconKey} />
                </span>
                <div className="min-w-0 flex-1">
                  <h3 className="mb-1.5 font-serif text-xl font-normal text-ink">
                    {card.title}
                  </h3>
                  <p className="text-[0.84rem] font-light leading-[1.65] text-ink-muted">
                    {card.description}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </SiteContainer>
    </section>
  );
}
