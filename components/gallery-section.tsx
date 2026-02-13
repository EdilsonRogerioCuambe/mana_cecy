"use client"

import Image from "next/image"
import { useState, useRef, useEffect, useCallback } from "react"
import { X, ChevronLeft, ChevronRight, Heart } from "lucide-react"

const galleryImages = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SaveGram.App_599397525_18545338651043485_97361349057261757_n-1tKAZ5BsTOsxPVk2dS9BHIIAdha3k5.jpg",
    alt: "Inocencia Gaisse em vestido elegante",
    category: "Profissional",
    height: "tall" as const,
    caption: "Elegancia e confianca em cada detalhe",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SaveGram.App_581807034_18541103884043485_3138854650538390452_n-Y82cnE3fmyXHLMXWNMq035jNs4GwrC.jpg",
    alt: "Inocencia Gaisse em traje tradicional africano",
    category: "Tradicional",
    height: "medium" as const,
    caption: "A beleza das nossas raizes culturais",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SaveGram.App_632026361_18559516645043485_4835030053296608185_n-EsJTI6OSGKyaHj35Fvhzg0UAUf8ZQo.jpg",
    alt: "Inocencia Gaisse em vestido africano estampado",
    category: "Casual",
    height: "short" as const,
    caption: "Estilo que celebra a nossa identidade",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SaveGram.App_582067656_18541103893043485_863687450632386772_n-YvMiiRw1UsJy965yyyqmrcWzc2xDcb.jpg",
    alt: "Inocencia Gaisse em traje tradicional completo",
    category: "Tradicional",
    height: "tall" as const,
    caption: "Orgulho e graca em traje tradicional",
  },
]

const heightMap = {
  tall: "aspect-[3/5]",
  medium: "aspect-[3/4]",
  short: "aspect-[4/5]",
}

const categories = ["Todas", "Profissional", "Tradicional", "Casual"]

function PinCard({
  image,
  index,
  onOpen,
}: {
  image: (typeof galleryImages)[0]
  index: number
  onOpen: () => void
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className="mb-5 break-inside-avoid"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(30px)",
        transition: `opacity 0.5s ease ${index * 120}ms, transform 0.5s ease ${index * 120}ms`,
      }}
    >
      <button
        onClick={onOpen}
        className="group relative w-full overflow-hidden rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
      >
        <div className={`relative ${heightMap[image.height]} w-full overflow-hidden`}>
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          />

          {/* Hover overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[hsl(20,20%,10%)]/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

          {/* Bottom info on hover */}
          <div className="absolute inset-x-0 bottom-0 flex flex-col gap-1 p-4 translate-y-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
            <p className="text-sm font-medium text-[hsl(30,33%,97%)]">
              {image.caption}
            </p>
            <span className="text-xs text-[hsl(30,33%,80%)]">{image.category}</span>
          </div>

          {/* Heart icon on hover */}
          <div className="absolute top-3 right-3 flex h-9 w-9 items-center justify-center rounded-full bg-[hsl(30,33%,97%)]/90 opacity-0 shadow-md transition-all duration-300 group-hover:opacity-100">
            <Heart className="h-4 w-4 text-primary" />
          </div>
        </div>
      </button>

      {/* Category tag below card (Pinterest style) */}
      <div className="mt-2.5 flex items-center gap-2 px-1">
        <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-[11px] font-medium text-primary">
          {image.category}
        </span>
      </div>
    </div>
  )
}

export function GallerySection() {
  const [selectedCategory, setSelectedCategory] = useState("Todas")
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const filteredImages =
    selectedCategory === "Todas"
      ? galleryImages
      : galleryImages.filter((img) => img.category === selectedCategory)

  const openLightbox = (globalIndex: number) => setLightboxIndex(globalIndex)
  const closeLightbox = () => setLightboxIndex(null)

  const goNext = useCallback(() => {
    if (lightboxIndex === null) return
    setLightboxIndex((lightboxIndex + 1) % filteredImages.length)
  }, [lightboxIndex, filteredImages.length])

  const goPrev = useCallback(() => {
    if (lightboxIndex === null) return
    setLightboxIndex(
      (lightboxIndex - 1 + filteredImages.length) % filteredImages.length
    )
  }, [lightboxIndex, filteredImages.length])

  useEffect(() => {
    if (lightboxIndex === null) return
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox()
      if (e.key === "ArrowRight") goNext()
      if (e.key === "ArrowLeft") goPrev()
    }
    window.addEventListener("keydown", handleKey)
    return () => window.removeEventListener("keydown", handleKey)
  }, [lightboxIndex, goNext, goPrev])

  return (
    <section id="galeria" className="py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="flex items-center gap-3">
            <div className="h-px w-12 bg-primary" />
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-primary">
              Galeria
            </span>
            <div className="h-px w-12 bg-primary" />
          </div>
          <h2 className="font-serif text-4xl font-bold text-foreground md:text-5xl">
            Momentos Especiais
          </h2>
          <p className="max-w-xl text-base leading-relaxed text-muted-foreground">
            Uma colecao de momentos que capturam a essencia da minha jornada,
            cultura e missao.
          </p>
        </div>

        {/* Filter */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`rounded-full px-6 py-2.5 text-sm font-medium transition-all ${
                selectedCategory === cat
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-card text-muted-foreground hover:bg-card/80 hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Pinterest Masonry Grid */}
        <div className="mt-14 columns-2 gap-5 md:columns-3 lg:columns-4">
          {filteredImages.map((image, index) => (
            <PinCard
              key={`${selectedCategory}-${index}`}
              image={image}
              index={index}
              onOpen={() => openLightbox(index)}
            />
          ))}
        </div>
      </div>

      {/* Lightbox with navigation */}
      {lightboxIndex !== null && filteredImages[lightboxIndex] && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-[hsl(20,20%,8%)]/95 p-4 backdrop-blur-sm"
          onClick={closeLightbox}
          role="dialog"
          aria-label="Imagem ampliada"
        >
          {/* Close */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-[hsl(30,33%,97%)]/10 text-[hsl(30,33%,97%)] transition-colors hover:bg-[hsl(30,33%,97%)]/20"
            aria-label="Fechar"
          >
            <X className="h-5 w-5" />
          </button>

          {/* Prev */}
          {filteredImages.length > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation()
                goPrev()
              }}
              className="absolute left-4 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-[hsl(30,33%,97%)]/10 text-[hsl(30,33%,97%)] transition-colors hover:bg-[hsl(30,33%,97%)]/20"
              aria-label="Imagem anterior"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
          )}

          {/* Image */}
          <div
            className="relative max-h-[85vh] max-w-4xl overflow-hidden rounded-3xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={filteredImages[lightboxIndex].src}
              alt={filteredImages[lightboxIndex].alt}
              width={800}
              height={1000}
              className="max-h-[85vh] w-auto object-contain"
            />
            {/* Caption bar */}
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[hsl(20,20%,8%)] to-transparent px-6 pb-6 pt-12">
              <p className="text-sm font-medium text-[hsl(30,33%,97%)]">
                {filteredImages[lightboxIndex].caption}
              </p>
              <span className="mt-1 text-xs text-[hsl(30,33%,80%)]">
                {lightboxIndex + 1} / {filteredImages.length}
              </span>
            </div>
          </div>

          {/* Next */}
          {filteredImages.length > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation()
                goNext()
              }}
              className="absolute right-4 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-[hsl(30,33%,97%)]/10 text-[hsl(30,33%,97%)] transition-colors hover:bg-[hsl(30,33%,97%)]/20"
              aria-label="Proxima imagem"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          )}
        </div>
      )}
    </section>
  )
}
