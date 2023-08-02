import { AlignRightSimple } from "phosphor-react";
import { Logo } from "./Logo";

export function Header() {
    return (
        <>
            <header className="w-full py-5 px-2 flex flex-col items-center justify-between sm:justify-center bg-gray-888 border-b border-myblue-888" >
                <Logo />
                    {/* <button className="p-2 mx-2 text-blue-666 sm:hidden">
                        <AlignRightSimple size={32} weight="light" />
                    </button> */}
            </header>
        </>

    )
}