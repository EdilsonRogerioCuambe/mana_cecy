"use client"

import { useEffect, useState } from "react"

export function SplashScreen({ onComplete }: { onComplete: () => void }) {
  const [phase, setPhase] = useState(0)
  // phase 0: initial (bg fade in)
  // phase 1: ornament top draws
  // phase 2: name reveals
  // phase 3: tagline reveals
  // phase 4: ornament bottom draws
  // phase 5: exit animation

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 300),
      setTimeout(() => setPhase(2), 800),
      setTimeout(() => setPhase(3), 1600),
      setTimeout(() => setPhase(4), 2200),
      setTimeout(() => setPhase(5), 3200),
      setTimeout(() => onComplete(), 4000),
    ]
    return () => timers.forEach(clearTimeout)
  }, [onComplete])

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden"
      style={{
        background: "hsl(20 20% 12%)",
        opacity: phase >= 5 ? 0 : 1,
        transition: "opacity 0.8s ease",
        pointerEvents: phase >= 5 ? "none" : "all",
      }}
    >
      {/* Background shimmer effect */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 50%, hsl(12 66% 62% / 0.08) 0%, transparent 70%)",
          opacity: phase >= 1 ? 1 : 0,
          transform: phase >= 1 ? "scale(1)" : "scale(0.5)",
          transition: "opacity 1s ease, transform 1.5s ease",
        }}
      />

      {/* Floating particles */}
      {Array.from({ length: 12 }).map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full"
          style={{
            width: `${3 + (i % 4) * 2}px`,
            height: `${3 + (i % 4) * 2}px`,
            background: `hsl(12 66% 62% / ${0.15 + (i % 3) * 0.1})`,
            left: `${10 + (i * 7.5) % 80}%`,
            top: `${15 + (i * 11.3) % 70}%`,
            opacity: phase >= 2 ? 1 : 0,
            transform: phase >= 2
              ? `translateY(${-10 - i * 3}px)`
              : "translateY(20px)",
            transition: `opacity 0.8s ease ${0.1 * i}s, transform 2s ease ${0.1 * i}s`,
            animation: phase >= 2 ? `splashFloat ${3 + (i % 2)}s ease-in-out ${0.2 * i}s infinite alternate` : "none",
          }}
        />
      ))}

      {/* Center content container */}
      <div className="relative flex flex-col items-center gap-6 px-8">
        {/* Top ornament line */}
        <div className="flex items-center gap-4">
          <div
            style={{
              width: phase >= 1 ? "3rem" : "0",
              height: "1px",
              background: "hsl(12 66% 62% / 0.5)",
              transition: "width 0.6s ease",
            }}
          />
          <div
            style={{
              width: phase >= 1 ? "6px" : "0",
              height: phase >= 1 ? "6px" : "0",
              borderRadius: "50%",
              background: "hsl(12 66% 62%)",
              transition: "all 0.4s ease 0.3s",
            }}
          />
          <div
            style={{
              width: phase >= 1 ? "3rem" : "0",
              height: "1px",
              background: "hsl(12 66% 62% / 0.5)",
              transition: "width 0.6s ease",
            }}
          />
        </div>

        {/* Initials / Logo mark */}
        <div
          className="flex items-center justify-center"
          style={{
            opacity: phase >= 2 ? 1 : 0,
            transform: phase >= 2 ? "scale(1) translateY(0)" : "scale(0.6) translateY(10px)",
            transition: "all 0.7s cubic-bezier(0.34, 1.56, 0.64, 1)",
          }}
        >
          <span
            className="font-serif text-7xl font-bold md:text-8xl lg:text-9xl"
            style={{
              color: "hsl(30 33% 97%)",
              textShadow: "0 0 60px hsl(12 66% 62% / 0.3)",
            }}
          >
            I
          </span>
          <span
            className="font-serif text-7xl font-bold md:text-8xl lg:text-9xl"
            style={{
              color: "hsl(12 66% 62%)",
              textShadow: "0 0 60px hsl(12 66% 62% / 0.4)",
              marginLeft: "-0.05em",
              opacity: phase >= 2 ? 1 : 0,
              transform: phase >= 2 ? "translateX(0)" : "translateX(-10px)",
              transition: "all 0.6s ease 0.15s",
            }}
          >
            G
          </span>
        </div>

        {/* Full name */}
        <div
          className="overflow-hidden text-center"
          style={{
            opacity: phase >= 3 ? 1 : 0,
            transform: phase >= 3 ? "translateY(0)" : "translateY(15px)",
            transition: "all 0.6s ease",
          }}
        >
          <h1
            className="font-serif text-2xl font-bold tracking-wide md:text-3xl"
            style={{ color: "hsl(30 33% 97%)" }}
          >
            {"Inocencia Gaisse".split("").map((char, i) => (
              <span
                key={i}
                style={{
                  display: "inline-block",
                  opacity: phase >= 3 ? 1 : 0,
                  transform: phase >= 3 ? "translateY(0)" : "translateY(20px)",
                  transition: `all 0.4s ease ${0.03 * i}s`,
                }}
              >
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </h1>
        </div>

        {/* Tagline */}
        <div
          className="overflow-hidden text-center"
          style={{
            opacity: phase >= 3 ? 1 : 0,
            transform: phase >= 3 ? "translateY(0)" : "translateY(10px)",
            transition: "all 0.6s ease 0.4s",
          }}
        >
          <p
            className="text-xs font-semibold uppercase tracking-[0.35em] md:text-sm"
            style={{ color: "hsl(12 66% 62% / 0.7)" }}
          >
            Mana dos Manos
          </p>
        </div>

        {/* Divider line below tagline */}
        <div
          className="my-1"
          style={{
            width: phase >= 4 ? "5rem" : "0",
            height: "1px",
            background: "linear-gradient(90deg, transparent, hsl(12 66% 62% / 0.5), transparent)",
            transition: "width 0.8s ease",
          }}
        />

        {/* Bottom description */}
        <p
          className="max-w-xs text-center text-sm leading-relaxed md:text-base"
          style={{
            color: "hsl(30 20% 65%)",
            opacity: phase >= 4 ? 1 : 0,
            transform: phase >= 4 ? "translateY(0)" : "translateY(10px)",
            transition: "all 0.6s ease 0.2s",
          }}
        >
          Fortalecendo familias, edificando lares.
        </p>

        {/* Bottom ornament */}
        <div className="flex items-center gap-3">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              style={{
                width: i === 1 ? "8px" : "4px",
                height: i === 1 ? "8px" : "4px",
                borderRadius: "50%",
                background: i === 1 ? "hsl(12 66% 62%)" : "hsl(12 66% 62% / 0.4)",
                opacity: phase >= 4 ? 1 : 0,
                transform: phase >= 4 ? "scale(1)" : "scale(0)",
                transition: `all 0.4s ease ${0.4 + i * 0.1}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Corner decorative elements */}
      <div
        className="absolute top-8 left-8"
        style={{
          width: phase >= 1 ? "40px" : "0",
          height: "1px",
          background: "hsl(12 66% 62% / 0.2)",
          transition: "width 0.8s ease 0.2s",
        }}
      />
      <div
        className="absolute top-8 left-8"
        style={{
          width: "1px",
          height: phase >= 1 ? "40px" : "0",
          background: "hsl(12 66% 62% / 0.2)",
          transition: "height 0.8s ease 0.2s",
        }}
      />
      <div
        className="absolute right-8 bottom-8"
        style={{
          width: phase >= 1 ? "40px" : "0",
          height: "1px",
          background: "hsl(12 66% 62% / 0.2)",
          transition: "width 0.8s ease 0.2s",
        }}
      />
      <div
        className="absolute right-8 bottom-8"
        style={{
          width: "1px",
          height: phase >= 1 ? "40px" : "0",
          background: "hsl(12 66% 62% / 0.2)",
          transition: "height 0.8s ease 0.2s",
        }}
      />

      <style jsx global>{`
        @keyframes splashFloat {
          0% { transform: translateY(-10px); }
          100% { transform: translateY(10px); }
        }
      `}</style>
    </div>
  )
}
