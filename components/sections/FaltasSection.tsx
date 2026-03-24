import SiteContainer from "@/components/layout/SiteContainer";
import SectionLabel from "@/components/ui/SectionLabel";
import GoldRule from "@/components/ui/GoldRule";
import Button from "@/components/ui/Button";
import { siteEdgePadding } from "@/lib/siteLayout";
import { cn } from "@/lib/utils";
import type { FaltaItem } from "@/types";

const FALTAS: FaltaItem[] = [
  {
    number: 1,
    text: "Cancelamentos com mínimo 12h de antecedência não são cobrados.",
  },
  {
    number: 2,
    text: "Cancelamentos fora desse prazo são cobrados normalmente.",
  },
  {
    number: 3,
    text: "Faltas sem aviso não geram reposição e o tempo perdido por atraso não é compensado.",
  },
  {
    number: 4,
    text: "Reposições em até 30 dias; sem horário disponível, o valor vira crédito para o mês seguinte.",
  },
  {
    number: 5,
    text: "Ausência prolongada: pausa de até 30 dias mantendo a vaga, com aviso de 30 dias. Disponível 1x por ano.",
  },
  {
    number: 6,
    text: "A partir de 2 faltas consecutivas sem aviso, o paciente poderá perder sua vaga e horário preferencial.",
  },
];

const DocumentIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden
  >
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14,2 14,8 20,8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
  </svg>
);

export default function FaltasSection() {
  return (
    <section
      id="faltas"
      aria-labelledby="faltas-titulo"
      className={cn("bg-cream-alt py-24 lg:py-28", siteEdgePadding)}
    >
      <SiteContainer className="grid grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-20">
        <div>
          <SectionLabel>Organização</SectionLabel>
          <h2
            id="faltas-titulo"
            className="font-serif text-[clamp(2.2rem,4vw,3.2rem)] font-light leading-[1.15] text-ink"
          >
            Faltas e <span className="text-forest italic">Reposições</span>
          </h2>
          <GoldRule />
          <ul className="mt-8 list-none space-y-3" role="list">
            {FALTAS.map((falta) => (
              <li key={falta.number} role="listitem">
                <div
                  className={cn(
                    "flex gap-4 rounded-2xl border border-forest/10 bg-white/90 px-4 py-4 shadow-card",
                    "transition-all duration-200 hover:border-sage/35 hover:shadow-md",
                  )}
                >
                  <span
                    className={cn(
                      "flex h-10 min-w-[2.5rem] shrink-0 items-center justify-center rounded-xl",
                      "bg-forest text-[0.75rem] font-semibold tabular-nums text-white",
                    )}
                    aria-hidden
                  >
                    {falta.number}
                  </span>
                  <p className="text-[0.9rem] font-light leading-[1.7] text-ink-soft">
                    {falta.text}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <aside
          className={cn(
            "self-start rounded-2xl border border-forest/10 bg-white p-8 text-center shadow-card",
            "lg:sticky lg:top-[calc(72px+1.5rem)]",
          )}
          aria-labelledby="faltas-termos-titulo"
        >
          <SectionLabel>Documentação</SectionLabel>
          <h3
            id="faltas-termos-titulo"
            className="mb-3 font-serif text-[clamp(1.5rem,3vw,1.85rem)] font-light leading-tight text-ink"
          >
            Termos de <span className="text-forest italic">atendimento</span>
          </h3>
          <GoldRule className="mx-auto my-5" />
          <p className="mb-8 text-[0.9rem] font-light leading-[1.75] text-ink-muted">
            Antes de iniciar o acompanhamento terapêutico, responsáveis ou
            pacientes tomam ciência e concordam com os termos e condições do
            atendimento fonoaudiológico.
          </p>
          <Button as="link" href="/termo" variant="forest" className="w-full sm:w-auto">
            <DocumentIcon />
            Ler termos completos
          </Button>
        </aside>
      </SiteContainer>
    </section>
  );
}
