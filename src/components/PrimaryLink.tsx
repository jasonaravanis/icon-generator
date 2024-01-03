import Link from "next/link";
import type { LinkProps } from "next/link";

export function PrimaryLink(props: LinkProps & React.PropsWithChildren) {
  return (
    <Link className=" hover:text-cyan-500" {...props}>
      {props.children}
    </Link>
  );
}
