import { JSX, PropsWithChildren } from "preact/compat";

type ButtonVariant = "PRIMARY";
export default function LinkButton(
  props: PropsWithChildren<
    { variant?: ButtonVariant } & JSX.AnchorHTMLAttributes
  >
) {
  let variant = props.variant || "PRIMARY";
  props.variant = undefined;

  return (
    <a
      class="transition-all hover:bg-orange-400 text-white hover:text-black p-5 rounded !h-5 "
      {...props}
    >
      {props.children}
    </a>
  );
}
