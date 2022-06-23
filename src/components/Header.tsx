import { Logo } from "./Logo";

export function Header() {
    return (
        <header className="w-full py-5 flex items-center justify-center bg-gray-888 border-b border-myblue-999" >
        <Logo />
        </header>
    )
}