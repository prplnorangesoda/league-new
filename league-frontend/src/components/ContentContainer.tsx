import { PropsWithChildren } from "preact/compat";

export default function ContentContainer(
  props: PropsWithChildren<{ class?: string }>
) {
  return (
    <div class={(props.class + " " || "") + "bg-orange-800/10 rounded p-4"}>
      {props.children}
    </div>
  );
}
