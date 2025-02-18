import { useLocation } from "preact-iso";
import preactLogo from "./dude.png";
import LinkButton from "../LinkButton";

export function Header() {
  const { url } = useLocation();

  return (
    <header class="static w-full h-20 bg-orange-950 mb-2 flex flex-row place-items-center border-b border-red-500 *:w-auto *:h-auto *:flex *:place-items-center *:m-2  ">
      <a href="/" class="aspect-square !ml-0 !h-full p-2">
        <img
          src={preactLogo}
          alt="Logo"
          class=" h-full w-full aspect-square rounded-full"
        />
      </a>
      <LinkButton href={"/d"}>d</LinkButton>
    </header>
  );
}
