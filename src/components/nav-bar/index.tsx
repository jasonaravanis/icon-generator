import { Flex } from "@components/flex";
import { container, navBar } from "./navBar.css";
import { Box } from "@components/box";
import { Button } from "@components/button";
import { Hamburger } from "@components/icons";

const NavBar = () => {
  return (
    <Flex className={container} as="nav">
      <Flex className={navBar} justify="space-between" align="center">
        <Box>Logo</Box>
        <Flex gap="space-c">
          <Button type="primary" label="Get Started" />
          <Box width="space-e">
            <Hamburger />
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
};

export { NavBar };
