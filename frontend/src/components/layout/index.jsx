import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import { cn, getInitials } from "@/utils/helpers";
import {
  LayoutDashboard, ClipboardCheck, Brain, Trophy, BarChart3,
  Users, HelpCircle, LineChart, LogOut, Menu, X, Zap,
} from "lucide-react";

// ── Brand Logo ─────────────────────────────────────────────────────────────────
function Logo({ collapsed }) {
  return (
    <div className="flex items-center gap-2.5 px-4 py-5">
      <div className="p-1.5 rounded-lg gradient-brand flex-shrink-0">
        <Zap size={16} className="text-white" />
      </div>
      {!collapsed && (
        <div>
          <span className="text-sm font-bold text-slate-900">SkillAssess</span>
          <p className="text-[10px] text-slate-400 leading-none mt-0.5">Platform</p>
        </div>
      )}
    </div>
  );
}

// ── Nav Item ──────────────────────────────────────────────────────────────────
function NavItem({ to, icon: Icon, label, collapsed }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        cn(
          "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-150 group",
          isActive
            ? "bg-brand-600 text-white shadow-sm"
            : "text-slate-600 hover:bg-surface-100 hover:text-slate-900"
        )
      }
      title={collapsed ? label : undefined}
    >
      <Icon size={18} className="flex-shrink-0" />
      {!collapsed && <span>{label}</span>}
    </NavLink>
  );
}

// ── Sidebar ────────────────────────────────────────────────────────────────────
function Sidebar({ links, collapsed, onToggle }) {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <aside
      className={cn(
        "flex flex-col h-screen bg-white border-r border-surface-200 flex-shrink-0 transition-all duration-200",
        collapsed ? "w-16" : "w-56"
      )}
    >
      <div className="flex items-center justify-between border-b border-surface-200">
        <Logo collapsed={collapsed} />
        <button
          onClick={onToggle}
          className="p-2 mr-2 hover:bg-surface-100 rounded-lg text-slate-500"
        >
          {collapsed ? <Menu size={16} /> : <X size={16} />}
        </button>
      </div>

      <nav className="flex-1 overflow-y-auto p-3 space-y-1">
        {links.map((link) => (
          <NavItem key={link.to} {...link} collapsed={collapsed} />
        ))}
      </nav>

      {/* User footer */}
      <div className="border-t border-surface-200 p-3">
        <div className={cn("flex items-center gap-2.5 mb-2", collapsed && "justify-center")}>
          <div className="h-8 w-8 rounded-full gradient-brand flex items-center justify-center text-white text-xs font-semibold flex-shrink-0">
            {getInitials(user?.name)}
          </div>
          {!collapsed && (
            <div className="min-w-0">
              <p className="text-xs font-semibold text-slate-900 truncate">{user?.name}</p>
              <p className="text-[10px] text-slate-400 capitalize">{user?.role?.toLowerCase()}</p>
            </div>
          )}
        </div>
        <button
          onClick={handleLogout}
          className={cn(
            "flex items-center gap-2 w-full px-2.5 py-2 text-xs font-medium text-red-600 hover:bg-red-50 rounded-lg transition-colors",
            collapsed && "justify-center"
          )}
          title="Logout"
        >
          <LogOut size={14} />
          {!collapsed && "Sign out"}
        </button>
      </div>
    </aside>
  );
}

// ── Employee Layout ────────────────────────────────────────────────────────────
const EMPLOYEE_LINKS = [
  { to: "/dashboard", icon: LayoutDashboard, label: "Dashboard" },
  { to: "/self-assessment", icon: Brain, label: "Self Assessment" },
  { to: "/test", icon: ClipboardCheck, label: "MCQ Test" },
  { to: "/results", icon: BarChart3, label: "My Results" },
  { to: "/leaderboard", icon: Trophy, label: "Leaderboard" },
];

export function EmployeeLayout({ children }) {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <div className="flex h-screen overflow-hidden bg-surface-50">
      <Sidebar links={EMPLOYEE_LINKS} collapsed={collapsed} onToggle={() => setCollapsed((p) => !p)} />
      <main className="flex-1 overflow-y-auto">
        <div className="max-w-6xl mx-auto p-6 animate-fade-in">{children}</div>
      </main>
    </div>
  );
}

// ── Admin Layout ───────────────────────────────────────────────────────────────
const ADMIN_LINKS = [
  { to: "/admin/dashboard", icon: LayoutDashboard, label: "Dashboard" },
  { to: "/admin/employees", icon: Users, label: "Employees" },
  { to: "/admin/questions", icon: HelpCircle, label: "Questions" },
  { to: "/admin/analytics", icon: LineChart, label: "Analytics" },
];

export function AdminLayout({ children }) {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <div className="flex h-screen overflow-hidden bg-surface-50">
      <Sidebar links={ADMIN_LINKS} collapsed={collapsed} onToggle={() => setCollapsed((p) => !p)} />
      <main className="flex-1 overflow-y-auto">
        <div className="max-w-7xl mx-auto p-6 animate-fade-in">{children}</div>
      </main>
    </div>
  );
}
