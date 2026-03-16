import { motion } from "framer-motion";

const PAYMENT_URL = "https://pay.kiwify.com.br/sKF8BxP";

const included = [
  { label: "Eleva Estética: treinamento completo", value: "R$ 897,90" },
  { label: "Treinamento de Criação de Conteúdo", value: "R$ 129,90" },
  { label: "Manual de Atendimento 5 Estrelas", value: "R$ 47,90" },
  { label: "Workshop de Tráfego Pago", value: "R$ 149,90" },
  { label: "Campanhas de Pico de Venda", value: "R$ 197,90" },
];

const PricingSection = () => {
  return (
    <section className="py-24 lg:py-32 bg-card">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-2xl mx-auto">
          <motion.div
            className="bg-background rounded-[24px] shadow-elegant p-10 lg:p-14"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">
              Investimento
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-foreground mt-4 mb-8">
              Tudo o que você vai acessar
            </h2>

            <div className="space-y-4 mb-10">
              {included.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center justify-between py-3 border-b border-border/50"
                >
                  <span className="text-foreground text-sm">{item.label}</span>
                  <span className="text-sm text-muted-foreground line-through tabular-nums">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>

            <div className="text-center space-y-4">
              <div>
                <span className="text-sm text-muted-foreground">Por apenas</span>
                <div className="text-5xl font-serif text-foreground mt-1">
                  12x de <span className="text-primary">R$ 51,40</span>
                </div>
                <span className="text-sm text-muted-foreground">ou R$ 497,00 à vista</span>
              </div>

              <motion.a
                href={PAYMENT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full px-8 py-5 bg-primary text-primary-foreground font-medium rounded-[16px] transition-all duration-300 hover:shadow-elegant-hover hover:-translate-y-0.5 text-lg"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
              >
                Iniciar minha transformação
              </motion.a>

              <div className="flex items-center justify-center gap-4 pt-2 text-xs text-muted-foreground">
                <span className="flex items-center gap-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"/></svg>
                  Compra segura
                </span>
                <span className="flex items-center gap-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182"/></svg>
                  7 dias de garantia
                </span>
                <span className="flex items-center gap-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"/></svg>
                  Liberação imediata
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
