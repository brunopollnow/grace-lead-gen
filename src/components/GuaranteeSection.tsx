import { motion } from "framer-motion";

const GuaranteeSection = () => {
  return (
    <section className="py-24 lg:py-32">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          className="max-w-2xl mx-auto text-center"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-card shadow-elegant flex items-center justify-center">
            <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" strokeWidth={1.2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
            </svg>
          </div>

          <h2 className="text-3xl sm:text-4xl font-serif text-foreground mb-4">
            Garantia de Satisfação
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Você tem <strong className="text-foreground">7 dias de garantia</strong> assegurados por lei.
            Se não ficar satisfeita com o conteúdo dentro desse prazo, devolvemos seu dinheiro.
            Sem burocracia, sem perguntas.
          </p>
          <p className="text-sm text-muted-foreground mt-4">
            Suporte e tira-dúvidas diretamente pela plataforma.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default GuaranteeSection;
