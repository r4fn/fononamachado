import { cn } from "@/lib/utils";

/**
 * Losangos (naipe ouros) + folhas em degradê honey (tom da marca).
 * Animações só em CSS; camada não recebe clique.
 */
const PIECES: {
  top: string;
  left?: string;
  right?: string;
  size: number;
  animation: "honey-float" | "honey-drift" | "honey-sway";
  delay: string;
  kind: "diamond" | "leaf";
  flip?: boolean;
}[] = [
  { top: "6%", left: "4%", size: 26, animation: "honey-float", delay: "0s", kind: "diamond" },
  { top: "18%", right: "6%", size: 18, animation: "honey-drift", delay: "0.8s", kind: "leaf" },
  {
    top: "42%",
    left: "2%",
    size: 20,
    animation: "honey-sway",
    delay: "1.2s",
    kind: "diamond",
    flip: true,
  },
  { top: "55%", right: "10%", size: 32, animation: "honey-float", delay: "2s", kind: "diamond" },
  {
    top: "72%",
    left: "12%",
    size: 16,
    animation: "honey-drift",
    delay: "0.3s",
    kind: "leaf",
    flip: true,
  },
  { top: "78%", right: "4%", size: 22, animation: "honey-sway", delay: "1.6s", kind: "leaf" },
  {
    top: "28%",
    left: "48%",
    size: 14,
    animation: "honey-drift",
    delay: "2.4s",
    kind: "diamond",
  },
];

function GoldGradientDefs({ id }: { id: string }) {
  return (
    <defs>
      <linearGradient id={id} x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#F0D4B8" />
        <stop offset="35%" stopColor="#E8B48A" />
        <stop offset="100%" stopColor="#C4834A" />
      </linearGradient>
    </defs>
  );
}

function Diamond({ size, gid }: { size: number; gid: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className="overflow-visible drop-shadow-[0_0_14px_rgba(196,131,74,0.22)]"
      aria-hidden
    >
      <GoldGradientDefs id={gid} />
      <path fill={`url(#${gid})`} d="M12 2.5 21.5 12 12 21.5 2.5 12 12 2.5z" />
    </svg>
  );
}

function Leaf({ size, gid }: { size: number; gid: string }) {
  return (
    <svg
      width={size}
      height={size * 1.15}
      viewBox="0 0 24 28"
      className="overflow-visible drop-shadow-[0_0_12px_rgba(232,180,138,0.2)]"
      aria-hidden
    >
      <GoldGradientDefs id={gid} />
      <path
        fill={`url(#${gid})`}
        d="M12 2c-1.5 4-5.5 8.5-9 12 3.5-.5 7 0 9 2 2-2 5.5-2.5 9-2-3.5-3.5-7.5-8-9-12z"
      />
      <path
        fill="none"
        stroke={`url(#${gid})`}
        strokeWidth="0.75"
        strokeLinecap="round"
        d="M12 6v14"
        opacity={0.85}
      />
    </svg>
  );
}

export default function FooterGoldDecor() {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden
    >
      {PIECES.map((piece, i) => {
        const gid = `footer-gold-grad-${i}`;
        return (
          <div
            key={i}
            className={cn(
              "absolute will-change-transform",
              piece.animation === "honey-float" && "animate-honey-float",
              piece.animation === "honey-drift" && "animate-honey-drift",
              piece.animation === "honey-sway" && "animate-honey-sway",
              piece.flip && "scale-x-[-1]",
            )}
            style={{
              top: piece.top,
              left: piece.left,
              right: piece.right,
              animationDelay: piece.delay,
            }}
          >
            {piece.kind === "diamond" ? (
              <Diamond size={piece.size} gid={gid} />
            ) : (
              <Leaf size={piece.size} gid={gid} />
            )}
          </div>
        );
      })}
    </div>
  );
}
