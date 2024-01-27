import { Flex } from "@components/flex";
import { container } from "./navBar.css";

const NavBar = () => {
  return (
    <Flex className={container} as="nav">
      <div>Item One</div>
      <div>Item Two</div>
      <div>Item Three</div>
    </Flex>
  );
};

export { NavBar };
