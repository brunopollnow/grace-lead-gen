import { motion } from "framer-motion";

const results = [
  "Terá um plano prático para captar clientes e vender, sem depender de alto investimento em marketing",
  "Irá ter autonomia para fazer as próprias campanhas de vendas",
  "Venderá toda semana, de forma leve e prezando pelos seus valores pessoais",
  "Terá clientes dispostas a pagar o seu preço",
  "Será mais valorizada pelas clientes",
  "Irá dobrar o faturamento",
];

const ResultsSection = () => {
  return (
    <section className="py-24 lg:py-32">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">
            Resultados
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-foreground mt-4 mb-12">
            Ao final do Eleva, você terá:
          </h2>

          <div className="grid sm:grid-cols-2 gap-4">
            {results.map((result, i) => (
              <motion.div
                key={i}
                className="flex items-start gap-4 p-5 rounded-[20px] bg-card shadow-elegant"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm text-foreground">{result}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ResultsSection;
