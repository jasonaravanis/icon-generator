import { clsx } from "clsx";

import { icon } from "./icon.css";

import type { MaterialSymbol } from "@style-system/utils/types";
import type { ClassValue } from "clsx";

interface IconProps {
  className?: ClassValue;
  name: MaterialSymbol;
  onClick?: () => void;
}

export const Icon = ({ className, name, onClick }: IconProps) =>
  name === "none" ? null : (
    <span
      aria-label={name}
      className={`${clsx(icon, className)}`}
      onClick={onClick}
      role="img"
    >
      {name}
    </span>
  );
