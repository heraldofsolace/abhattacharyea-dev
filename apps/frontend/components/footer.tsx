import { ArrowUpRight } from "lucide-react";
import MenuAnimation from "./animata/list/menu-animation";

export default function Footer() {
    const menuItems = [
        {
            name: "LinkedIn",
            link: "https://linkedin.com/in/heraldofsolace"
        },
        {
            name: "GitHub",
            link: "https://github/heraldofsolace"
        }
    ]
    return (
        <footer className="p-30 flex font-mono font-semibold justify-between">
            <div className="">
                <h1 className="text-7xl">Get in touch</h1>
                <a className="text-main text-5xl" href={"mailto:aniket@abhattacharyea.dev"}>aniket@bhattacharyea.dev</a>
            </div>
            <div className="mx-10 flex gap-5">
                <MenuAnimation menuItems={menuItems} />
            </div>

        </footer>
    )
}
