import Image from "next/image"

export function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-8 px-6 pt-24 pb-16 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:pt-32">
        {/* Text */}
        <div className="flex flex-col gap-6 text-center lg:text-left">
          <div className="flex items-center justify-center gap-3 lg:justify-start">
            <div className="h-px w-12 bg-primary" />
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-primary">
              Conselheira de Lar
            </span>
          </div>

          <h1 className="font-serif text-5xl font-bold leading-tight tracking-tight text-foreground md:text-6xl lg:text-7xl">
            <span className="text-balance">Inocencia</span>
            <br />
            <span className="text-primary">Gaisse</span>
          </h1>

          <p className="text-lg leading-relaxed text-muted-foreground md:text-xl">
            Conselheira de Lar &middot; Educadora Familiar &middot; Coach de Vida
          </p>

          <p className="font-serif text-xl italic text-foreground/70 md:text-2xl">
            {'"Fortalecendo familias, edificando lares."'}
          </p>

          <div className="flex flex-col items-center gap-4 pt-4 sm:flex-row lg:justify-start">
            <a
              href="#contato"
              className="w-full rounded-full bg-primary px-8 py-4 text-center text-sm font-semibold tracking-wide text-primary-foreground transition-all hover:opacity-90 sm:w-auto"
            >
              Fale Comigo
            </a>
            <a
              href="#servicos"
              className="w-full rounded-full border-2 border-foreground/20 px-8 py-4 text-center text-sm font-semibold tracking-wide text-foreground transition-all hover:border-primary hover:text-primary sm:w-auto"
            >
              Conheca Meu Trabalho
            </a>
          </div>
        </div>

        {/* Image */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative w-full max-w-[400px] md:max-w-[460px]">
            {/* Decorative circle behind image */}
            <div className="absolute -inset-4 rounded-full bg-primary/10 blur-2xl" />
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-[2rem] shadow-2xl">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SaveGram.App_599397525_18545338651043485_97361349057261757_n-1tKAZ5BsTOsxPVk2dS9BHIIAdha3k5.jpg"
                alt="Inocencia Gaisse - Mana dos Manos"
                fill
                className="object-cover object-top"
                priority
              />
            </div>
            {/* Decorative accent */}
            <div className="absolute -bottom-6 -left-6 flex h-28 w-28 items-center justify-center rounded-full bg-primary shadow-lg">
              <span className="text-center font-serif text-xs font-bold leading-tight text-primary-foreground">
                Mana
                <br />
                dos
                <br />
                Manos
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
