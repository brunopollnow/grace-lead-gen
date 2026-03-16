import { motion } from "framer-motion";

const pillars = [
  {
    number: "01",
    title: "Posicionamento Desejável",
    description:
      "Crie um posicionamento que atrai as clientes certas, sem precisar criar um personagem ou abrir mão de quem você é.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={0.8} viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Previsibilidade de Clientes",
    description:
      "Domine 8 maneiras diferentes para captar clientes com estratégias práticas e de alta eficiência, online e offline.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={0.8} viewBox="0 0 24 24">
        <path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Venda 5 Estrelas",
    description:
      "Conduza conversas de venda até o agendamento, prezando por uma venda humanizada onde a cliente é encantada desde o primeiro contato.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={0.8} viewBox="0 0 24 24">
        <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    ),
  },
];

const MethodSection = () => {
  return (
    <section className="py-24 lg:py-32">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          className="text-center mb-16 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">
            O Método
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-foreground mt-4">
            Você precisa dominar 3 pilares para dobrar seu faturamento
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.number}
              className="group relative bg-card p-8 lg:p-10 rounded-[24px] shadow-elegant transition-all duration-300 hover:shadow-elegant-hover"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
            >
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs uppercase tracking-[0.1em] text-primary font-semibold tabular-nums">
                  {pillar.number}
                </span>
                <span className="text-primary">{pillar.icon}</span>
              </div>
              <h3 className="text-2xl font-serif text-foreground mb-4">
                {pillar.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.p
          className="text-center mt-12 text-lg text-muted-foreground max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Aplicando esses pilares, você pode dobrar o faturamento mensal da sua clínica,
          se tornar uma profissional <strong className="text-foreground">reconhecida e desejada</strong> pelas clientes.
        </motion.p>
      </div>
    </section>
  );
};

export default MethodSection;
