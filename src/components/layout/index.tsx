import { Box } from "@components/box";
import {
  baseTheme,
  defaultTheme,
  responsiveTheme,
} from "@style-system/styles.css";
import "@style-system/core/global.css";
import clsx from "clsx";
import nextFontLocal from "next/font/local";
import { NavBar } from "@components/nav-bar";
import { main } from "./layout.css";
import { Flex } from "@components/flex";

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
    <Box
      className={clsx(
        geist.variable,
        baseTheme,
        responsiveTheme,
        defaultTheme // TODO: implement swap to dawnTheme for light mode
      )}
    >
      <NavBar />
      <Flex as="main" flexDirection="column" align="center" className={main}>
        {children}
      </Flex>
      {/* TODO: add footer */}
    </Box>
  );
};

export { Layout };
