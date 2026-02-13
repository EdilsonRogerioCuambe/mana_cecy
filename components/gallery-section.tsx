"use client"

import { ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react"
import Image from "next/image"
import { useCallback, useEffect, useState } from "react"
import { createPortal } from "react-dom"

const categories = ["Todas", "Tradicional", "Profissional", "Casual"]

const galleryImages = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SaveGram.App_599397525_18545338651043485_97361349057261757_n-1tKAZ5BsTOsxPVk2dS9BHIIAdha3k5.jpg",
    alt: "Inocência Gaisse em vestido elegante",
    category: "Profissional",
    caption: "Elegância e confiança em cada detalhe",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SaveGram.App_581807034_18541103884043485_3138854650538390452_n-Y82cnE3fmyXHLMXWNMq035jNs4GwrC.jpg",
    alt: "Inocência Gaisse em traje tradicional africano",
    category: "Tradicional",
    caption: "A beleza das nossas raízes culturais",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SaveGram.App_632026361_18559516645043485_4835030053296608185_n-EsJTI6OSGKyaHj35Fvhzg0UAUf8ZQo.jpg",
    alt: "Inocência Gaisse em vestido africano estampado",
    category: "Casual",
    caption: "Estilo que celebra a nossa identidade",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SaveGram.App_582067656_18541103893043485_863687450632386772_n-YvMiiRw1UsJy965yyyqmrcWzc2xDcb.jpg",
    alt: "Inocência Gaisse em traje tradicional completo",
    category: "Tradicional",
    caption: "Orgulho e graça em traje tradicional",
  },
]

function PinCard({
  image,
  index,
  onOpen,
}: {
  image: (typeof galleryImages)[0]
  index: number
  onOpen: () => void
}) {
  return (
    <div
      className="group relative mb-5 break-inside-avoid overflow-hidden rounded-2xl bg-card shadow-md transition-all hover:shadow-xl hover:-translate-y-1 cursor-pointer"
      onClick={onOpen}
    >
      <div className="relative">
        <Image
          src={image.src}
          alt={image.alt}
          width={600}
          height={800}
          className="h-auto w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/20" />

        <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm">
            <ZoomIn className="h-6 w-6" />
          </div>
        </div>
      </div>

      <div className="p-4">
        <p className="text-sm font-medium text-foreground">{image.caption}</p>
        <p className="mt-1 text-xs text-muted-foreground">{image.category}</p>
      </div>
    </div>
  )
}

export function GallerySection() {
  const [selectedCategory, setSelectedCategory] = useState("Todas")
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

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
    document.body.style.overflow = "hidden" // Prevent background scroll
    return () => {
      window.removeEventListener("keydown", handleKey)
      document.body.style.overflow = "" // Restore scroll
    }
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
            Uma coleção de momentos que capturam a essência da minha jornada,
            cultura e missão.
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

      {/* Lightbox with navigation - Portal */}
      {mounted && lightboxIndex !== null && filteredImages[lightboxIndex] && createPortal(
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[hsl(20,20%,8%)]/95 p-4 backdrop-blur-sm"
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
            className="relative max-h-[85vh] max-w-4xl overflow-hidden rounded-3xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={filteredImages[lightboxIndex].src}
              alt={filteredImages[lightboxIndex].alt}
              width={1200}
              height={1600}
              quality={90}
              className="max-h-[85vh] w-auto object-contain"
              priority
            />
            {/* Caption bar */}
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[hsl(20,20%,8%)] via-[hsl(20,20%,8%)]/80 to-transparent px-8 pb-8 pt-20">
              <p className="text-lg font-medium text-[hsl(30,33%,97%)]">
                {filteredImages[lightboxIndex].caption}
              </p>
              <div className="mt-2 flex items-center justify-between">
                <span className="inline-block rounded-full bg-[hsl(30,33%,97%)]/10 px-3 py-1 text-xs text-[hsl(30,33%,80%)]">
                  {filteredImages[lightboxIndex].category}
                </span>
                <span className="text-xs text-[hsl(30,33%,50%)]">
                  {lightboxIndex + 1} / {filteredImages.length}
                </span>
              </div>
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
              aria-label="Próxima imagem"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          )}
        </div>,
        document.body
      )}
    </section>
  )
}
