import { motion } from "framer-motion";
import heroImg from "@/assets/hero-elo.jpg";

const PAYMENT_URL = "https://pay.kiwify.com.br/sKF8BxP";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">
          {/* Text Column - 60% */}
          <motion.div
            className="lg:col-span-3 space-y-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">
                Eleva Estética — por Elo Aguiar
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-serif text-foreground leading-[1.1]">
              Faça do início do ano o momento{" "}
              <em className="italic text-primary">mais lucrativo</em> da sua estética
            </h1>

            <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
              Aplique as estratégias que venderam milhares de procedimentos estéticos em 2025.
              Um manual prático para dobrar seu faturamento.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <motion.a
                href={PAYMENT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground font-medium rounded-[16px] transition-all duration-300 hover:shadow-elegant-hover hover:-translate-y-0.5"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Iniciar minha transformação
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </motion.a>
              <span className="text-sm text-muted-foreground self-center">
                12x de <strong className="text-foreground">R$ 51,40</strong>
              </span>
            </div>

            <div className="flex items-center gap-6 pt-2 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                Aulas gravadas
              </span>
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                Acesso imediato
              </span>
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                7 dias de garantia
              </span>
            </div>
          </motion.div>

          {/* Image Column - 40% */}
          <motion.div
            className="lg:col-span-2 relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="relative rounded-[24px] overflow-hidden shadow-elegant">
              <img
                src={heroImg}
                alt="Elo Aguiar — Especialista em Estética"
                className="w-full h-auto object-cover aspect-[4/5]"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/10 to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
