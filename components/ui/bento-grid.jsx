import { cn } from "@/lib/utils";

export const BentoGrid = ({ className, children }) => {
  return (
    <div
      className={cn(
        "mx-auto grid max-w-7xl grid-cols-1 gap-5 md:auto-rows-[18rem] md:grid-cols-3",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
}) => {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-white/20 bg-white/60 backdrop-blur-2xl p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl",
        className,
      )}
    >
      {/* 🍏 glass highlight layer */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/70 via-white/20 to-transparent opacity-80 pointer-events-none" />

      {/* subtle glow edge */}
      <div className="absolute inset-0 ring-1 ring-white/30 rounded-2xl pointer-events-none" />

      {/* header (visual block) */}
      <div className="relative z-10">{header}</div>

      {/* content */}
      <div className="relative z-10 transition-transform duration-300 group-hover:translate-x-1">
        <div className="flex items-center gap-2 mt-3">
          <div className="text-blue-500">{icon}</div>
          <div className="font-bold text-slate-900 text-sm">{title}</div>
        </div>

        <div className="mt-2 text-xs text-slate-600 leading-relaxed">
          {description}
        </div>
      </div>
    </div>
  );
};
