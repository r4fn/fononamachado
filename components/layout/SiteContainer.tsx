import { cn } from "@/lib/utils";
import { siteMaxWidthInner } from "@/lib/siteLayout";

interface SiteContainerProps {
  children: React.ReactNode;
  className?: string;
}

/** Conteúdo centralizado com o mesmo max-width da hero (`max-w-6xl`). */
export default function SiteContainer({ children, className }: SiteContainerProps) {
  return <div className={cn(siteMaxWidthInner, className)}>{children}</div>;
}
