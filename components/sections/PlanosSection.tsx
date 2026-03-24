import SiteContainer from "@/components/layout/SiteContainer";
import SectionLabel from "@/components/ui/SectionLabel";
import GoldRule from "@/components/ui/GoldRule";
import {
  PaymentCardIcon,
  PlanoCheckIcon,
} from "@/components/ui/SectionCardIcons";
import { siteEdgePadding } from "@/lib/siteLayout";
import { cn } from "@/lib/utils";
import type { PlanoCard } from "@/types";

const PLANOS: PlanoCard[] = [
  {
    nome: "Linguagem — Consultório",
    valor: 120,
    moeda: "R$",
    period: "Pix ou Dinheiro",
    items: [
      "Linguagem infantil e adulta",
      "Motricidade orofacial",
      "Inclui anamnese e avaliação",
      "R$ 125 no cartão",
    ],
  },
  {
    nome: "Pagamento Mensal",
    valor: "Data fixa",
    period: "flexível conforme o mês",
    items: [
      "Horário exclusivo reservado",
      "Paga todas as sessões do mês",
      "Pode limitar a até 4 sessões",
      "Pix, dinheiro ou cartão",
    ],
    highlighted: true,
  },
  {
    nome: "Disfagia / Domiciliar",
    valor: 150,
    moeda: "R$",
    period: "Pix ou Dinheiro",
    items: [
      "Disfagia (consultório ou domiciliar)",
      "Linguagem domiciliar",
      "Deslocamento adicional para outra cidade",
      "R$ 155 no cartão",
    ],
  },
];

export default function PlanosSection() {
  return (
    <section
      id="planos"
      aria-labelledby="planos-titulo"
      className={cn("bg-white py-24 text-center lg:py-28", siteEdgePadding)}
    >
      <SiteContainer>
        <SectionLabel>Investimento</SectionLabel>
        <h2
          id="planos-titulo"
          className="font-serif text-[clamp(2.2rem,4vw,3.2rem)] font-light leading-[1.15] text-ink"
        >
          Valores e <span className="text-forest italic">Planos</span>
        </h2>
        <GoldRule className="mx-auto" />

        <div
          className="mt-10 grid grid-cols-1 items-start gap-5 lg:grid-cols-3 lg:gap-6"
          role="list"
        >
          {PLANOS.map((plano) => (
            <article
              key={plano.nome}
              role="listitem"
              className={cn(
                "relative overflow-hidden rounded-2xl px-6 py-9 transition-all duration-200",
                plano.highlighted
                  ? "-translate-y-1 border border-forest bg-forest text-white shadow-lg hover:-translate-y-2"
                  : "border border-forest/10 bg-cream shadow-card hover:-translate-y-1 hover:shadow-md",
              )}
            >
              {plano.highlighted && (
                <span
                  className={cn(
                    "pointer-events-none absolute right-[-1.75rem] top-5 z-10",
                    "flex w-[10rem] items-center justify-center",
                    "bg-honey py-1.5 text-center text-[0.58rem] font-semibold uppercase leading-none tracking-[0.12em] text-white",
                    "shadow-sm [transform-origin:center] rotate-[35deg]",
                  )}
                >
                  Mais popular
                </span>
              )}

              <p
                className={cn(
                  "mb-3 text-[0.68rem] font-semibold uppercase tracking-[0.16em]",
                  plano.highlighted ? "text-honey-light" : "text-honey",
                )}
              >
                {plano.nome}
              </p>

              {typeof plano.valor === "number" ? (
                <p
                  className={cn(
                    "mb-1 font-serif text-5xl font-light leading-none",
                    plano.highlighted ? "text-white" : "text-ink",
                  )}
                >
                  <sup className="align-super text-xl font-light">
                    {plano.moeda}
                  </sup>
                  {plano.valor}
                </p>
              ) : (
                <p
                  className={cn(
                    "mb-1 pt-2 font-serif text-2xl font-light",
                    plano.highlighted ? "text-white" : "text-ink",
                  )}
                >
                  {plano.valor}
                </p>
              )}

              <p
                className={cn(
                  "mb-6 text-[0.78rem] font-light",
                  plano.highlighted ? "text-white/65" : "text-ink-muted",
                )}
              >
                {plano.period}
              </p>

              <div
                className={cn(
                  "mb-5 h-px",
                  plano.highlighted ? "bg-white/15" : "bg-forest/10",
                )}
              />

              <ul className="list-none space-y-0 text-left">
                {plano.items.map((item) => (
                  <li
                    key={item}
                    className={cn(
                      "flex items-start gap-3 py-1.5 text-[0.84rem] font-light leading-[1.5]",
                      plano.highlighted ? "text-white/88" : "text-ink-soft",
                    )}
                  >
                    <PlanoCheckIcon
                      className={cn(
                        "mt-0.5",
                        plano.highlighted ? "text-sage-light" : "text-sage",
                      )}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <p
            className={cn(
              "inline-flex max-w-lg flex-wrap items-center justify-center gap-3 rounded-2xl",
              "border border-forest/10 bg-cream-alt/90 px-6 py-4 shadow-card backdrop-blur-sm",
              "text-[0.88rem] font-light text-ink-muted sm:px-8",
            )}
          >
            <PaymentCardIcon className="text-honey" />
            <span>
              Formas de pagamento:{" "}
              <strong className="font-medium text-ink-soft">
                Pix · Dinheiro · Cartão
              </strong>
            </span>
          </p>
        </div>
      </SiteContainer>
    </section>
  );
}
