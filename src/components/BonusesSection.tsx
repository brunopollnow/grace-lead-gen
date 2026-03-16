import { motion } from "framer-motion";

const bonuses = [
  {
    number: "01",
    title: "Campanhas de Picos de Vendas",
    description: "Aprenda a fazer campanhas em datas específicas e gerar picos de faturamento.",
    value: "R$ 197,90",
  },
  {
    number: "02",
    title: "Fidelização de Clientes",
    description: "Como fidelizar a cliente para que ela continue com você mesmo após o procedimento.",
    value: "R$ 97,90",
  },
  {
    number: "03",
    title: "Workshop de Tráfego Pago",
    description: "Aprenda a fazer sua própria campanha de captação de clientes.",
    value: "R$ 149,90",
  },
  {
    number: "04",
    title: "Treinamento de Conteúdo",
    description: "O passo a passo para vender através dos conteúdos no Instagram.",
    value: "R$ 129,90",
  },
  {
    number: "05",
    title: "Manual de Atendimento 5 Estrelas",
    description: "Copie e cole as conversas de venda que triplicaram os agendamentos.",
    value: "R$ 47,90",
  },
];

const BonusesSection = () => {
  return (
    <section className="py-24 lg:py-32">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">
            Bônus Exclusivos
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-foreground mt-4">
            E tem mais — bônus potencializadores
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Além de todo o método validado, você terá acesso a bônus que irão acelerar o crescimento das suas vendas.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-3">
          {bonuses.map((bonus, i) => (
            <motion.div
              key={bonus.number}
              className="group flex items-start gap-6 p-6 rounded-[20px] bg-card shadow-elegant transition-all duration-300 hover:shadow-elegant-hover"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <span className="text-xs text-primary font-semibold tabular-nums mt-1 shrink-0">
                {bonus.number}
              </span>
              <div className="flex-1">
                <h3 className="text-lg font-serif text-foreground">{bonus.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">{bonus.description}</p>
              </div>
              <span className="text-sm text-muted-foreground line-through shrink-0">
                {bonus.value}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BonusesSection;
