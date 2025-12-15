"use client";

import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import { motion } from "framer-motion";

import { BarChart3, ShieldCheck, Brain, Zap } from "lucide-react";
import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-base-100 text-base-content">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 py-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl font-bold leading-tight">
              Controla tus ventas.
              <span className="block text-primary">
                Toma mejores decisiones.
              </span>
            </h1>
            <p className="mt-6 text-lg text-base-content/70">
              SalesScope es un dashboard inteligente para analizar ventas,
              productos y tendencias en tiempo real.
            </p>
            <div className="mt-8 flex gap-4">
              <Link href="/login">
                <Button size="lg" className="rounded-2xl">
                  Comenzar ahora
                </Button>
              </Link>
              <Link href="/dashboard">
                <Button variant="primary" size="lg" className="rounded-2xl">
                  Ver demo
                </Button>
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full" />
            <img
              src="/dashboard-preview.png"
              alt="Dashboard preview"
              className="relative rounded-2xl shadow-2xl"
            />
          </motion.div>
        </div>
      </section>
      <section className="py-24 bg-base-200">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold">
              Conoce a tu asistente inteligente
            </h2>
            <p className="mt-4 text-base-content/70">
              Nuestro asistente IA analiza tus ventas y te da recomendaciones
              claras para mejorar ingresos, optimizar inventario y anticipar
              tendencias.
            </p>
            <ul className="mt-6 space-y-3 text-sm">
              <li>✔ Consejos personalizados según tus métricas</li>
              <li>✔ Alertas de caídas o picos de ventas</li>
              <li>✔ Explicaciones simples, sin lenguaje técnico</li>
            </ul>
            <Button size="lg" className="mt-8 rounded-2xl">
              Hablar con el asistente
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative flex justify-center"
          >
            <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full" />
            <img
              src="/ai-assistant/idle.png"
              alt="AI Assistant"
              className="relative w-80 drop-shadow-2xl"
            />
          </motion.div>
        </div>
      </section>
      {/* Features */}
      <section className="py-24 bg-base-200">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center">
            Todo lo que necesitas en un solo lugar
          </h2>
          <p className="mt-4 text-center text-base-content/70">
            Diseñado para equipos que necesitan claridad y velocidad.
          </p>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                icon: BarChart3,
                title: "Análisis en tiempo real",
                desc: "Visualiza métricas clave y ventas al instante.",
              },
              {
                icon: Brain,
                title: "Predicciones con IA",
                desc: "Anticípate a tendencias y toma decisiones inteligentes.",
              },
              {
                icon: Zap,
                title: "Rápido y moderno",
                desc: "Interfaz optimizada con animaciones fluidas.",
              },
              {
                icon: ShieldCheck,
                title: "Seguro",
                desc: "Autenticación y control de roles integrados.",
              },
            ].map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Card></Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-4xl font-bold"
          >
            Empieza a escalar tu negocio hoy
          </motion.h2>
          <p className="mt-4 text-base-content/70">
            Centraliza tus datos y obtén insights accionables desde el primer
            día.
          </p>
          <Link href="/register">
            <Button size="lg" className="mt-8 rounded-2xl">
              Crear cuenta gratis
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 bg-base-200 text-center text-sm text-base-content/60">
        © {new Date().getFullYear()} SalesScope. Todos los derechos reservados.
      </footer>
    </div>
  );
}
