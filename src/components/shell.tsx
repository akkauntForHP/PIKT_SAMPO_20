import { Link, useRouterState } from "@tanstack/react-router";
import type { ReactNode } from "react";

const links = [
  { to: "/", label: "Дела" },
  { to: "/ruling", label: "Решение" },
  { to: "/sources", label: "База" },
] as const;

export function Shell({ children }: { children: ReactNode }) {
  const path = useRouterState({ select: (state) => state.location.pathname });

  return (
    <div className="min-h-screen">
      <header className="no-print border-b border-line bg-paper">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-3 px-4 py-3">
          <Link to="/" className="font-serif text-xl leading-none text-ink">
            Комиссия
            <span className="mt-1 block font-sans text-xs font-semibold tracking-widest text-muted uppercase">
              Вариант 20
            </span>
          </Link>
          <nav className="flex gap-1">
            {links.map((link) => {
              const active = path === link.to;
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`inline-flex min-h-11 items-center px-3 text-sm font-semibold ${
                    active ? "border-b-2 border-seal text-ink" : "text-muted"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </div>
      </header>
      <main className="mx-auto max-w-5xl min-w-0 px-4 py-8">{children}</main>
    </div>
  );
}
