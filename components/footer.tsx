import { Instagram, Facebook, Mail, Heart } from "lucide-react"

const quickLinks = [
  { href: "#inicio", label: "Inicio" },
  { href: "#sobre", label: "Sobre" },
  { href: "#servicos", label: "Servicos" },
  { href: "#galeria", label: "Galeria" },
  { href: "#depoimentos", label: "Depoimentos" },
  { href: "#contato", label: "Contato" },
]

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <div className="flex flex-col leading-tight">
              <span className="font-serif text-xl font-bold text-foreground">
                Inocencia Gaisse
              </span>
              <span className="text-xs tracking-widest uppercase text-muted-foreground">
                Mana dos Manos
              </span>
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Conselheira de Lar, Educadora Familiar e Coach de Vida.
              Fortalecendo familias, edificando lares com amor e sabedoria.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-background text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-background text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                aria-label="Facebook"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="mailto:contato@inocenciagaisse.com"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-background text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                aria-label="Email"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <h4 className="font-serif text-lg font-bold text-foreground">
              Links Rapidos
            </h4>
            <nav className="flex flex-col gap-2">
              {quickLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div className="flex flex-col gap-4">
            <h4 className="font-serif text-lg font-bold text-foreground">
              Servicos
            </h4>
            <nav className="flex flex-col gap-2">
              <a
                href="#servicos"
                className="text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                Aconselhamento Familiar
              </a>
              <a
                href="#servicos"
                className="text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                Palestras e Workshops
              </a>
              <a
                href="#servicos"
                className="text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                Mentoria para Casais
              </a>
              <a
                href="#servicos"
                className="text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                Coaching de Vida
              </a>
              <a
                href="#servicos"
                className="text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                Consultoria para Mulheres
              </a>
            </nav>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center gap-4 border-t border-border pt-8 sm:flex-row sm:justify-between">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Inocencia Gaisse. Todos os direitos
            reservados.
          </p>
          <p className="flex items-center gap-1 text-xs text-muted-foreground">
            Feito com <Heart className="h-3 w-3 fill-primary text-primary" /> por
            Mana dos Manos
          </p>
        </div>
      </div>
    </footer>
  )
}
