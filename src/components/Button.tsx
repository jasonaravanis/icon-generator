import Link, { LinkProps } from "next/link";
import { VariantProps, tv } from "tailwind-variants";

const style = tv({
  base: "rounded py-2 px-4 w-fit",
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
  };

export function Button({ variant, ...props }: Props) {
  if ("href" in props) {
    return (
      <Link {...props} className={style(variant)}>
        {props.children}
      </Link>
    );
  }
  return (
    <button {...props} className={style(variant)}>
      {props.children}
    </button>
  );
}
