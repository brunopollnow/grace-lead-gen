import { motion } from "framer-motion";
import heroImg from "@/assets/hero-elo.jpg";

const credentials = [
  "Graduada em Estética e Imagem Pessoal",
  "Especialista em Marketing para Área da Estética",
  "Mais de 5 anos atuando no mercado da beleza e estética",
  "Estrategista Digital com foco em Neuromarketing",
];

const AboutSection = () => {
  return (
    <section className="py-24 lg:py-32 bg-card">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-5xl mx-auto">
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="rounded-[24px] overflow-hidden shadow-elegant">
              <img
                src={heroImg}
                alt="Elo Aguiar"
                className="w-full aspect-[3/4] object-cover"
                loading="lazy"
              />
            </div>
          </motion.div>

          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">
              Sua mentora
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-foreground">
              Elo Aguiar
            </h2>
            <p className="text-muted-foreground">
              Irá te guiar nessa jornada de transformação da sua estética
              em um negócio lucrativo e previsível.
            </p>

            <ul className="space-y-3">
              {credentials.map((cred, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  {cred}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
