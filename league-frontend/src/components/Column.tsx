import { PropsWithChildren } from "preact/compat";

export default function Column(
  props: PropsWithChildren<{ class?: string; center?: boolean }>
) {
  return (
    <div class={"h-full flex flex-col " + (props.class || "")}>
      {props.children}
    </div>
  );
}
