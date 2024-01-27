import { Text } from "@components/typography/text";
import { default as NextLink } from "next/link";

export type LinkProps = {
  href: string;
  label: string;
};

const Link = ({ href, label }: LinkProps) => {
  return (
    <NextLink href={href}>
      <Text color="contrast" style="link">
        {label}
      </Text>
    </NextLink>
  );
};

export { Link };
