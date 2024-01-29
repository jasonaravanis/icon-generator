import clsx from "clsx";
import nextFontLocal from "next/font/local";

const geist = nextFontLocal({
  src: [
    {
      path: "../../styles/fonts/Geist-Black.woff2",
      weight: "1000",
      style: "normal",
    },
    {
      path: "../../styles/fonts/Geist-Bold.woff2",
      weight: "800",
      style: "normal",
    },
    {
      path: "../../styles/fonts/Geist-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../styles/fonts/Geist-Regular.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-geist",
});

const Layout = ({ children }: React.PropsWithChildren) => {
  return (
    <div className={clsx(geist.variable)}>
      {/* TODO: add navBar */}
      <main>{children}</main>
      {/* TODO: add footer */}
    </div>
  );
};

export { Layout };
