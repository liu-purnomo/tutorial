import { useRouter } from "next/router";
import { DocsThemeConfig, useConfig } from "nextra-theme-docs";

const logo = (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      fontSize: "1.4rem",
      fontWeight: "bold",
      gap: "0.5rem",
    }}
  >
    <div className="flex">Tutorial by Liu</div>
  </div>
);

const config: DocsThemeConfig = {
  useNextSeoProps() {
    const { asPath } = useRouter();
    if (asPath !== "/") {
      return {
        titleTemplate: "%s – Tutorial by Liu",
      };
    }
  },
  logo,
  head: function useHead() {
    const { title } = useConfig();
    const { route } = useRouter();
    const socialCard =
      route === "/" || !title
        ? "https://tutorial.liupurnomo.com/og.jpeg"
        : `https://tutorial.liupurnomo.com/api/og?title=${title}`;

    return (
      <>
        <meta name="msapplication-TileColor" content="#fff" />
        <meta name="theme-color" content="#fff" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Language" content="en" />
        <meta name="description" content="Tutorial Gratis Dari Liu Purnomo" />
        <meta name="og:description" content="Tutorial Gratis dari Liu Purnomo" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={socialCard} />
        <meta name="twitter:site:domain" content="tutorial.liupurnomo.com" />
        <meta name="twitter:url" content="https://tutorial.liupurnomo.com" />
        <meta name="og:title" content={title ? title + " – Tutorial" : "Tutorial"} />
        <meta name="og:image" content={socialCard} />
        <meta name="apple-mobile-web-app-title" content="tutorial" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/android-chrome-192x192.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#1b2951" />
        <meta name="msapplication-TileColor" content="#1b2951" />
        <meta name="theme-color" content="#ffffff" />
      </>
    );
  },
  project: {
    link: "https://github.com/liu-purnomo",
  },
  search: {
    placeholder: "Cari tutorial..."
  },
  footer: {
    text: (
      <div className="flex w-full flex-col items-center">
        <p className="">
          © {new Date().getFullYear()} <a href="https://liupurnomo.com">Liu Purnomo</a>
        </p>
      </div>
    ),
  },
  toc: {
    backToTop: true,
  },
};

export default config;
