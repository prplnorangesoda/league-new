import { PropsWithChildren } from "preact/compat";

export default function Center(props: PropsWithChildren<{}>) {
  return (
    <div class=" bg-orange-950 h-full p-2 place-items-center place-content-center m-auto w-11/12 max-w-3xl">
      {props.children}
    </div>
  );
}
