import Link from "next/link";

interface NavBarProps {
    active: "dashboard" | "mouses" | "teclados"
}

export default function NavBar(props: NavBarProps) {
    const { active } = props
    const classActive = "border-blue-400 border-b-2 pb-1"

    return (
        <nav className="flex justify-between items-center px-4 py-2 bg-slate-900 w-full">
            <h1 className="text-4xl font-bold">ClickConnect</h1>
            <ul className="flex gap-14">
                <li className={active == "dashboard"? classActive : ""}>
                    <Link href="/">dashboard</Link>
                </li>
                <li className={active == "mouses"? classActive : ""}>
                    <Link href="/mouses">mouses</Link>
                </li>
                <li className={active == "teclados"? classActive : ""}>
                    <Link href="/teclados">teclados</Link>
                </li>
            </ul>
            <div className="w-16 rounded-full overflow-hidden">
                <img src="https://i.pravatar.cc/300" alt="avatar do usuário" />
            </div>
        </nav>
    )
}