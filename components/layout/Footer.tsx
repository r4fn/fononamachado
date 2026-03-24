import Link from "next/link";
import SiteContainer from "@/components/layout/SiteContainer";
import Logo from "@/components/ui/Logo";
import { INSTAGRAM_URL } from "@/lib/constants";
import { siteEdgePadding } from "@/lib/siteLayout";

export default function Footer() {
  return (
    <footer className={`bg-ink py-9 ${siteEdgePadding}`}>
      <SiteContainer className="flex flex-wrap items-center justify-between gap-6">
        <Logo
          height={36}
          linked={false}
          imgClassName="opacity-85"
          loading="lazy"
        />

        <p className="text-center text-[0.74rem] font-light tracking-wide text-white/30">
          © 2026 Nathália Machado · Fonoaudióloga · CRFa 2-23700
          <br />
          São Miguel Arcanjo — SP
        </p>

        <div className="flex gap-5">
          <Link
            href="/termo"
            className="text-[0.74rem] tracking-wide text-white/40 transition-colors hover:text-white/75"
          >
            Termos de Atendimento
          </Link>
          <Link
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[0.74rem] tracking-wide text-white/40 transition-colors hover:text-white/75"
          >
            Instagram
          </Link>
        </div>
      </SiteContainer>
    </footer>
  );
}
