const Footer = () => {
  return (
    <footer className="py-12 border-t border-border/50">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Eloisa Aguiar. Todos os direitos reservados.
          </span>
          <a
            href="mailto:eloaguiarmarketing@gmail.com"
            className="text-sm text-primary hover:underline"
          >
            eloaguiarmarketing@gmail.com
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
