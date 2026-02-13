"use client"

import { Menu, X } from "lucide-react"
import { useEffect, useState } from "react"

const navLinks = [
  { href: "#inicio", label: "Início" },
  { href: "#sobre", label: "Sobre" },
  { href: "#servicos", label: "Serviços" },
  { href: "#galeria", label: "Galeria" },
  { href: "#depoimentos", label: "Depoimentos" },
  { href: "#contato", label: "Contato" },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || isOpen
          ? "bg-background/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <a href="#inicio" className="flex flex-col leading-tight">
          <span className="font-serif text-xl font-bold tracking-tight text-foreground">
            Inocência Gaisse
          </span>
          <span className="text-xs tracking-widest uppercase text-muted-foreground">
            Mana dos Manos
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium tracking-wide text-foreground/80 transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contato"
            className="rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:opacity-90"
          >
            Fale Comigo
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-foreground"
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="absolute inset-x-0 top-full h-[calc(100vh-100%)] overflow-y-auto bg-background/98 backdrop-blur-lg shadow-lg lg:hidden">
          <div className="flex min-h-full flex-col justify-center gap-6 px-6 py-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="rounded-lg px-4 py-3 text-center text-lg font-medium text-foreground/80 transition-colors hover:bg-muted hover:text-primary"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contato"
              onClick={() => setIsOpen(false)}
              className="mt-4 rounded-full bg-primary px-8 py-4 text-center text-base font-semibold text-primary-foreground"
            >
              Fale Comigo
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
