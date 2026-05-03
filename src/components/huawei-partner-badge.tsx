import { cn } from "@/lib/utils";

type HuaweiPartnerBadgeProps = {
  className?: string;
};

/** Code-built partner lockup; tweak colors via Tailwind classes on the root or here. */
export function HuaweiPartnerBadge({ className }: HuaweiPartnerBadgeProps) {
  return (
    <div
      role="img"
      aria-label="Huawei Gold Partner 2026. Verified Global Solutions Integrator."
      className={cn(
        "w-full max-w-[320px] rounded-xl border border-amber-700/35 bg-gradient-to-br from-amber-300 via-amber-400 to-amber-600 text-center shadow-[var(--shadow-elevated)] ring-1 ring-amber-800/25",
        className
      )}
    >
      <div className="px-6 py-5 sm:px-8 sm:py-6 md:px-9 md:py-7">
        <p className="font-bold tracking-tight text-[2rem] sm:text-[2.25rem] md:text-[2.5rem] leading-none text-red-700 drop-shadow-sm">
          HUAWEI
        </p>
        <p className="mt-2 text-[11px] sm:text-xs md:text-[13px] font-bold uppercase tracking-[0.2em] text-amber-950">
          Gold Partner 2026
        </p>
        <div className="my-4 border-t border-amber-900/30" />
        <p className="text-[11px] sm:text-xs md:text-[13px] leading-snug text-amber-950/80 italic">
          Verified Global Solutions
          <br />
          Integrator
        </p>
      </div>
    </div>
  );
}
