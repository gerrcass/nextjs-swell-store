const Footer = () => {
  return (
    <footer className="w-full max-w-7xl mx-auto px-4 lg:px-8 z-10 pt-10 pb-4 text-stone-400">
      <h5 className="text-lg">
        LuxPicks{" "}
        <span className="text-sm text-stone-500">
          &copy; {new Date().getFullYear()}
        </span>
      </h5>
      <div className="text-sm text-stone-400">
        Developed by{" "}
        <a
          className="text-sky-600"
          href="https://www.gerardocastillo.me/"
          rel="noreferrer"
          target="_blank"
        >
          gerrcass
        </a>{" "}
        using{" "}
        <a
          className="text-sky-600"
          href="https://nextjs.org/"
          rel="noreferrer"
          target="_blank"
        >
          NextJs
        </a>{" "}
        and{" "}
        <a
          className="text-sky-600"
          href="https://www.swell.is/"
          rel="noreferrer"
          target="_blank"
        >
          Swell
        </a>
        .
      </div>
    </footer>
  );
};

export default Footer;
