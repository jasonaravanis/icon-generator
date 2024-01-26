import Link from "next/link";
import { type PropsWithChildren } from "react";
import { buttonRecipe, type ButtonVariants } from "./button.css";
import { Text } from "@components/typography/text";
import { Flex } from "@components/flex";
import { Box } from "@components/box";

type ButtonProps = ButtonVariants & {
  label?: string;
  href?: string;
  onClick?: () => void;
  icon?: React.ReactNode;
  disabled?: boolean;
};

const Button = ({
  type,
  label,
  href,
  onClick,
  icon,
  disabled,
}: ButtonProps) => {
  return (
    <MaybeLink href={href}>
      <Flex
        as="button"
        gap="space-a"
        justify="center"
        alignItems="center"
        disabled={disabled}
        onClick={onClick}
        className={buttonRecipe({ type })}
      >
        {icon && (
          <Flex
            color="current"
            width="space-d"
            alignItems="center"
            justifyContent="center"
          >
            {icon}
          </Flex>
        )}
        {label && (
          <Text color="none" style="button">
            {label}
          </Text>
        )}
      </Flex>
    </MaybeLink>
  );
};

const MaybeLink = ({ href, children }: PropsWithChildren<{ href?: string }>) =>
  href ? <Link href={href}>{children}</Link> : <>{children}</>;

export { Button };
