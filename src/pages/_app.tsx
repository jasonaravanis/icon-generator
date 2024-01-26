import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { type AppType } from "next/app";
import { api } from "@utils/api";
import { defaultTheme, responsiveTheme } from "@style-system/styles.css";
import clsx from "clsx";
import nextFontLocal from "next/font/local";

const geist = nextFontLocal({
  src: [
    {
      path: "../styles/fonts/Geist-Black.woff2",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-geist",
});

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <main className={clsx(geist.variable, defaultTheme, responsiveTheme)}>
        <Component {...pageProps} />
      </main>
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
