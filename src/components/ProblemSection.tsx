import { motion } from "framer-motion";

const ProblemSection = () => {
  return (
    <section className="py-24 lg:py-32 bg-card">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-foreground leading-tight">
              Você <em className="italic text-primary">não precisa</em> de técnicas inovadoras
              ou mais especializações para lucrar alto
            </h2>

            <div className="mt-10 space-y-6 text-muted-foreground">
              <p>
                Talvez você esteja lutando para atrair clientes, vendo sua agenda vazia,
                sem nenhuma procura pelos seus procedimentos estéticos.
              </p>
              <p>
                E ao se deparar com essa situação, você acredita que a falta de clientes
                está associada a técnicas e especializações que ainda não fez.
              </p>
              <p className="text-foreground font-medium text-lg">
                Mas essa não é a verdade. Afinal, todas as especializações que você fez até hoje
                tiraram você dessa situação?
              </p>
              <p>
                A verdade é que para dobrar o faturamento da sua clínica, você precisa dominar
                <strong className="text-foreground"> posicionamento, captação e venda</strong>.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
