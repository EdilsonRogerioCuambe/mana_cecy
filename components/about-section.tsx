import { BookOpen, Heart, Star, Users } from "lucide-react"
import Image from "next/image"

const values = [
  {
    icon: Heart,
    title: "Amor",
    description: "O amor é a base de toda transformação familiar.",
  },
  {
    icon: Users,
    title: "Família",
    description: "Famílias fortes constroem sociedades melhores.",
  },
  {
    icon: Star,
    title: "Fé",
    description: "A espiritualidade como guia para decisões sábias.",
  },
  {
    icon: BookOpen,
    title: "Educação",
    description: "Conhecimento é a chave para relações saudáveis.",
  },
]

const timeline = [
  { year: "2015", event: "Início da jornada como conselheira familiar" },
  { year: "2018", event: "Lançamento do projeto Mana dos Manos" },
  { year: "2020", event: "Expansão para plataformas digitais" },
  { year: "2023", event: "Reconhecimento como influenciadora social" },
  { year: "2025", event: "Consolidação como referência em aconselhamento" },
]

export function AboutSection() {
  return (
    <section id="sobre" className="py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="flex items-center gap-3">
            <div className="h-px w-12 bg-primary" />
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-primary">
              Sobre Mim
            </span>
            <div className="h-px w-12 bg-primary" />
          </div>
          <h2 className="font-serif text-4xl font-bold text-foreground md:text-5xl">
            Quem é Mana dos Manos?
          </h2>
        </div>

        {/* Bio with Image */}
        <div className="mt-16 grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="relative flex justify-center">
            <div className="relative aspect-[4/5] w-full max-w-[400px] overflow-hidden rounded-2xl shadow-xl">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SaveGram.App_581807034_18541103884043485_3138854650538390452_n-Y82cnE3fmyXHLMXWNMq035jNs4GwrC.jpg"
                alt="Inocência Gaisse em traje tradicional"
                fill
                className="object-cover object-top"
              />
            </div>
            {/* Decorative border */}
            <div className="absolute -bottom-4 -right-4 -z-10 h-full w-full max-w-[400px] rounded-2xl border-2 border-primary/30" />
          </div>

          <div className="flex flex-col gap-6">
            <h3 className="font-serif text-3xl font-bold text-foreground">
              Inocência Gaisse
            </h3>
            <p className="leading-relaxed text-muted-foreground">
              Sou Inocência Gaisse, conhecida carinhosamente como Mana dos
              Manos. Há mais de uma década, dedico a minha vida a fortalecer
              famílias e edificar lares através do aconselhamento, da educação e
              do amor.
            </p>
            <p className="leading-relaxed text-muted-foreground">
              A minha missão é inspirar e capacitar mulheres, casais e famílias a
              construírem relações saudáveis, baseadas no respeito, na
              comunicação e nos valores que nos unem. Acredito profundamente que
              famílias fortes são o alicerce de comunidades prósperas.
            </p>

            {/* Mission / Vision */}
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl bg-card p-6">
                <h4 className="mb-2 font-serif text-lg font-bold text-primary">
                  Missão
                </h4>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Fortalecer famílias e edificar lares, promovendo relações
                  saudáveis e duradouras.
                </p>
              </div>
              <div className="rounded-xl bg-card p-6">
                <h4 className="mb-2 font-serif text-lg font-bold text-primary">
                  Visão
                </h4>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Ser referência em aconselhamento familiar, impactando positivamente milhares de famílias.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="mt-20">
          <h3 className="mb-10 text-center font-serif text-3xl font-bold text-foreground">
            Os Meus Valores
          </h3>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div
                key={value.title}
                className="group flex flex-col items-center gap-4 rounded-2xl bg-card p-8 text-center transition-all hover:shadow-lg"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <value.icon className="h-6 w-6" />
                </div>
                <h4 className="font-serif text-lg font-bold text-foreground">
                  {value.title}
                </h4>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="mt-24">
          <div className="flex flex-col items-center gap-4 text-center">
            <div className="flex items-center gap-3">
              <div className="h-px w-12 bg-primary" />
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-primary">
                Trajetória
              </span>
              <div className="h-px w-12 bg-primary" />
            </div>
            <h3 className="font-serif text-3xl font-bold text-foreground md:text-4xl">
              A Minha Jornada
            </h3>
          </div>

          {/* Vertical alternating timeline */}
          <div className="relative mx-auto mt-14 max-w-3xl">
            {/* Center line */}
            <div className="absolute top-0 bottom-0 left-5 w-px bg-primary/20 md:left-1/2 md:-translate-x-px" />

            <div className="flex flex-col gap-12 md:gap-16">
              {timeline.map((item, index) => {
                const isLeft = index % 2 === 0
                return (
                  <div key={item.year} className="relative">
                    {/* Dot on center line */}
                    <div className="absolute left-5 top-0 z-10 -translate-x-1/2 md:left-1/2">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full border-4 border-background bg-primary shadow-lg">
                        <span className="text-[10px] font-bold text-primary-foreground">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                      </div>
                    </div>

                    {/* Content card - alternating sides on desktop */}
                    <div
                      className={`ml-14 md:ml-0 md:w-[calc(50%-2.5rem)] ${
                        isLeft ? "md:mr-auto md:text-right" : "md:ml-auto md:text-left"
                      }`}
                    >
                      <div
                        className={`rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:shadow-lg hover:border-primary/30 ${
                          isLeft ? "md:rounded-r-2xl" : "md:rounded-l-2xl"
                        }`}
                      >
                        {/* Year badge */}
                        <div
                          className={`mb-3 flex items-center gap-3 ${
                            isLeft ? "md:flex-row-reverse" : ""
                          }`}
                        >
                          <span className="inline-flex rounded-full bg-primary/10 px-4 py-1 font-serif text-lg font-bold text-primary">
                            {item.year}
                          </span>
                          <div className="h-px flex-1 bg-primary/10" />
                        </div>
                        <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
                          {item.event}
                        </p>
                      </div>

                      {/* Connector arrow on desktop */}
                      <div
                        className={`absolute top-3 hidden h-4 w-4 rotate-45 border border-border bg-card md:block ${
                          isLeft
                            ? "right-[calc(50%-2.5rem+0.5px)] border-l-0 border-b-0"
                            : "left-[calc(50%-2.5rem+0.5px)] border-r-0 border-t-0"
                        }`}
                      />
                    </div>
                  </div>
                )
              })}
            </div>

            {/* End dot */}
            <div className="mt-12 flex justify-start md:justify-center">
              <div className="ml-[0.55rem] flex h-6 w-6 items-center justify-center rounded-full bg-primary/20 md:ml-0">
                <div className="h-2.5 w-2.5 rounded-full bg-primary" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
