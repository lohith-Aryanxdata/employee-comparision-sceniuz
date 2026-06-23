import React, { useEffect, useRef } from "react";
import { cn, getInitials } from "@/utils/helpers";
import { X, AlertCircle, CheckCircle, Info, AlertTriangle } from "lucide-react";

// ── Spinner ────────────────────────────────────────────────────────────────────
export function Spinner({ size = "md", className = "" }) {
  const sizes = { sm: "h-4 w-4", md: "h-6 w-6", lg: "h-8 w-8", xl: "h-12 w-12" };
  return (
    <div className={cn("animate-spin rounded-full border-2 border-surface-200 border-t-brand-600", sizes[size], className)} />
  );
}

export function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-surface-50">
      <div className="flex flex-col items-center gap-3">
        <Spinner size="xl" />
        <p className="text-sm text-slate-500">Loading…</p>
      </div>
    </div>
  );
}

// ── Badge ──────────────────────────────────────────────────────────────────────
const BADGE_VARIANTS = {
  default: "bg-surface-100 text-slate-600",
  primary: "bg-brand-50 text-brand-700",
  success: "bg-emerald-50 text-emerald-700",
  warning: "bg-amber-50 text-amber-700",
  danger: "bg-red-50 text-red-700",
  info: "bg-blue-50 text-blue-700",
};

export function Badge({ children, variant = "default", className = "" }) {
  return (
    <span className={cn("badge", BADGE_VARIANTS[variant], className)}>
      {children}
    </span>
  );
}

// ── Avatar ─────────────────────────────────────────────────────────────────────
export function Avatar({ name, size = "md", className = "" }) {
  const sizes = { sm: "h-8 w-8 text-xs", md: "h-10 w-10 text-sm", lg: "h-12 w-12 text-base" };
  return (
    <div className={cn("rounded-full gradient-brand flex items-center justify-center text-white font-semibold flex-shrink-0", sizes[size], className)}>
      {getInitials(name)}
    </div>
  );
}

// ── Progress Bar ───────────────────────────────────────────────────────────────
export function ProgressBar({ value, max = 100, className = "", color = "brand", showLabel = false }) {
  const pct = Math.min(100, Math.max(0, (value / max) * 100));
  const colors = {
    brand: "bg-brand-600",
    success: "bg-emerald-500",
    warning: "bg-amber-500",
    danger: "bg-red-500",
  };
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <div className="flex-1 h-2 bg-surface-200 rounded-full overflow-hidden">
        <div
          className={cn("h-full rounded-full transition-all duration-500", colors[color])}
          style={{ width: `${pct}%` }}
        />
      </div>
      {showLabel && <span className="text-xs text-slate-500 w-9 text-right">{pct.toFixed(0)}%</span>}
    </div>
  );
}

// ── Stat Card ──────────────────────────────────────────────────────────────────
export function StatCard({ title, value, subtitle, icon: Icon, trend, color = "brand", className = "" }) {
  const iconColors = {
    brand: "bg-brand-50 text-brand-600",
    success: "bg-emerald-50 text-emerald-600",
    warning: "bg-amber-50 text-amber-600",
    danger: "bg-red-50 text-red-600",
    info: "bg-blue-50 text-blue-600",
  };
  return (
    <div className={cn("stat-card animate-slide-up", className)}>
      <div className="flex items-start justify-between">
        <div className="flex-1 min-w-0">
          <p className="text-xs font-medium text-slate-500 uppercase tracking-wide">{title}</p>
          <p className="text-2xl font-bold text-slate-900 mt-1">{value ?? "—"}</p>
          {subtitle && <p className="text-xs text-slate-500 mt-0.5">{subtitle}</p>}
        </div>
        {Icon && (
          <div className={cn("p-2.5 rounded-lg flex-shrink-0 ml-3", iconColors[color])}>
            <Icon size={20} />
          </div>
        )}
      </div>
      {trend !== undefined && (
        <p className={cn("text-xs font-medium mt-2", trend >= 0 ? "text-emerald-600" : "text-red-500")}>
          {trend >= 0 ? "▲" : "▼"} {Math.abs(trend)}% vs last month
        </p>
      )}
    </div>
  );
}

// ── Empty State ────────────────────────────────────────────────────────────────
export function EmptyState({ icon: Icon, title, description, action }) {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4 text-center">
      {Icon && (
        <div className="p-4 bg-surface-100 rounded-full mb-4">
          <Icon size={28} className="text-slate-400" />
        </div>
      )}
      <h3 className="text-base font-semibold text-slate-700">{title}</h3>
      {description && <p className="text-sm text-slate-500 mt-1 max-w-xs">{description}</p>}
      {action && <div className="mt-4">{action}</div>}
    </div>
  );
}

// ── Modal ──────────────────────────────────────────────────────────────────────
export function Modal({ isOpen, onClose, title, children, size = "md" }) {
  const overlayRef = useRef(null);
  useEffect(() => {
    const handler = (e) => { if (e.key === "Escape") onClose(); };
    if (isOpen) document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [isOpen, onClose]);

  if (!isOpen) return null;
  const sizes = { sm: "max-w-sm", md: "max-w-lg", lg: "max-w-2xl", xl: "max-w-4xl" };

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: "rgba(15,23,42,0.5)", backdropFilter: "blur(2px)" }}
      onClick={(e) => { if (e.target === overlayRef.current) onClose(); }}
    >
      <div className={cn("w-full bg-white rounded-2xl shadow-2xl animate-slide-up", sizes[size])}>
        <div className="flex items-center justify-between px-6 py-4 border-b border-surface-200">
          <h2 className="text-base font-semibold text-slate-900">{title}</h2>
          <button onClick={onClose} className="p-1.5 hover:bg-surface-100 rounded-lg transition-colors">
            <X size={16} className="text-slate-500" />
          </button>
        </div>
        <div className="px-6 py-5">{children}</div>
      </div>
    </div>
  );
}

// ── Alert ──────────────────────────────────────────────────────────────────────
const ALERT_STYLES = {
  error: { bg: "bg-red-50 border-red-200", text: "text-red-700", Icon: AlertCircle },
  success: { bg: "bg-emerald-50 border-emerald-200", text: "text-emerald-700", Icon: CheckCircle },
  warning: { bg: "bg-amber-50 border-amber-200", text: "text-amber-700", Icon: AlertTriangle },
  info: { bg: "bg-blue-50 border-blue-200", text: "text-blue-700", Icon: Info },
};

export function Alert({ type = "info", message, className = "" }) {
  const { bg, text, Icon } = ALERT_STYLES[type];
  if (!message) return null;
  return (
    <div className={cn("flex items-start gap-3 px-4 py-3 rounded-lg border text-sm", bg, text, className)}>
      <Icon size={16} className="flex-shrink-0 mt-0.5" />
      <span>{message}</span>
    </div>
  );
}

// ── Confirm Dialog ─────────────────────────────────────────────────────────────
export function ConfirmDialog({ isOpen, onClose, onConfirm, title, message, confirmLabel = "Confirm", danger = false }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title={title} size="sm">
      <p className="text-sm text-slate-600 mb-6">{message}</p>
      <div className="flex justify-end gap-3">
        <button onClick={onClose} className="btn-secondary text-sm">Cancel</button>
        <button
          onClick={() => { onConfirm(); onClose(); }}
          className={danger ? "btn-danger text-sm" : "btn-primary text-sm"}
        >
          {confirmLabel}
        </button>
      </div>
    </Modal>
  );
}

// ── Score Ring ─────────────────────────────────────────────────────────────────
// React Bits replacement: ShinyText / CountUp style animated score display
// 👉 REACT BITS: Replace this with <CountUp> or <ShinyText> from React Bits for animated number reveal
export function ScoreRing({ value, label, size = 120, color = "#4f46e5" }) {
  const r = 46;
  const circ = 2 * Math.PI * r;
  const pct = Math.min(100, Math.max(0, value ?? 0));
  const dash = (pct / 100) * circ;

  return (
    <div className="flex flex-col items-center gap-1.5">
      <div className="relative" style={{ width: size, height: size }}>
        <svg width={size} height={size} viewBox="0 0 100 100" className="-rotate-90">
          <circle cx="50" cy="50" r={r} fill="none" stroke="#e2e8f0" strokeWidth="8" />
          <circle
            cx="50" cy="50" r={r} fill="none"
            stroke={color} strokeWidth="8"
            strokeLinecap="round"
            strokeDasharray={`${dash} ${circ}`}
            style={{ transition: "stroke-dasharray 1s ease-out" }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-xl font-bold text-slate-900">{pct.toFixed(0)}%</span>
        </div>
      </div>
      {label && <p className="text-xs font-medium text-slate-500 text-center">{label}</p>}
    </div>
  );
}

// ── CAI Meter ─────────────────────────────────────────────────────────────────
// 👉 REACT BITS: Replace with <GlowCard> or <MagicCard> wrapper from React Bits
export function CAIMeter({ value }) {
  const pct = value ?? 0;
  const color = pct >= 80 ? "#059669" : pct >= 60 ? "#d97706" : "#dc2626";
  const label = pct >= 80 ? "Excellent" : pct >= 60 ? "Good" : "Needs Work";
  return (
    <div className="flex flex-col items-center gap-3 p-4 rounded-xl bg-gradient-to-b from-slate-50 to-white border border-surface-200">
      <ScoreRing value={pct} label="Confidence Accuracy" size={110} color={color} />
      <Badge variant={pct >= 80 ? "success" : pct >= 60 ? "warning" : "danger"}>{label}</Badge>
      <p className="text-xs text-slate-500 text-center max-w-[160px]">
        How well your self-perception matches reality
      </p>
    </div>
  );
}
