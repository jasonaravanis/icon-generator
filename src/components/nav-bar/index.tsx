import { Flex } from "@components/flex";
import { container } from "./navBar.css";
import { Box } from "@components/box";
import { Button } from "@components/button";
import { Hamburger } from "@components/icons";
import { Link } from "@components/link";
import { useSession } from "next-auth/react";
import { User } from "@components/icons/user";

const navItems: { href: string; label: string }[] = [
  {
    href: "/create",
    label: "Create",
  },
  {
    href: "/discover",
    label: "Discover",
  },
  {
    href: "/your-gallery",
    label: "Your Gallery",
  },
];

const NavBar = () => {
  const session = useSession();
  const isLoggedIn = !!session.data;
  return (
    <Flex className={container} as="nav" width="full">
      <Flex justify="space-between" align="center" width="full">
        <Box>Logo</Box>
        <Flex gap="space-e" display={{ default: "flex", mobile: "none" }}>
          {navItems.map((item) => (
            <Link key={item.href} {...item} />
          ))}
        </Flex>
        <Flex gap="space-c" align="center">
          {isLoggedIn ? (
            <Box
              display={{ default: "block", mobile: "none" }}
              width={{
                tablet: "space-c",
                desktop: "space-b",
              }}
            >
              <User />
            </Box>
          ) : (
            <Button type="primary" label="Sign in" />
          )}
          <Box
            display={{ default: "none", mobile: "block" }}
            width={{
              default: "space-e",
              tablet: "space-d",
            }}
          >
            <Hamburger />
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
};

export { NavBar };
