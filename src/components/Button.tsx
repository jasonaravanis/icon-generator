import Link from "next/link";
import type { LinkProps } from "next/link";
import { tv } from "tailwind-variants";
import type { VariantProps } from "tailwind-variants";
import { LoadingSpinner } from "./LoadingSpinner";

const style = tv({
  base: "rounded py-2 px-4 w-fit min-w-24 disabled:bg-gray-300 disabled:text-gray-500",
  variants: {
    color: {
      primary: "bg-blue-400 hover:bg-blue-500",
      secondary: "bg-gray-400 hover:bg-gray-500",
    },
  },
  defaultVariants: {
    color: "primary",
  },
});

type ButtonVariants = VariantProps<typeof style>;

type LinkOrButtonProps = LinkProps | React.ComponentPropsWithoutRef<"button">;

type Props = React.PropsWithChildren &
  LinkOrButtonProps & {
    variant?: ButtonVariants;
    isLoading?: boolean;
  };

export function Button({ variant, isLoading, ...props }: Props) {
  if ("href" in props) {
    return (
      <Link {...props} className={style(variant)}>
        {props.children}
      </Link>
    );
  }
  return (
    <button {...props} className={style(variant)}>
      {isLoading && <LoadingSpinner />}
      {!isLoading && props.children}
    </button>
  );
}
