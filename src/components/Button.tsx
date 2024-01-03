import { VariantProps, tv } from "tailwind-variants";

const button = tv({
  base: "rounded py-2 px-4",
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

type ButtonVariants = VariantProps<typeof button>;

type ButtonProps = React.ComponentPropsWithoutRef<"button"> &
  React.PropsWithChildren & {
    variant?: ButtonVariants;
  };

export function Button(props: ButtonProps) {
  const { variant } = props;
  return (
    <button {...props} className={button(variant)}>
      {props.children}
    </button>
  );
}
