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
        <footer className="w-screen xl:w-auto p-10 xl:p-30 flex flex-col xl:flex-row font-mono font-semibold justify-between">
            <div className="">
                <h1 className="text-2xl xl:text-7xl">Get in touch</h1>
                <a className="text-main text-2xl xl:text-5xl" href={"mailto:aniket@abhattacharyea.dev"}>aniket@bhattacharyea.dev</a>
            </div>
            <div className="xl:mx-10 flex gap-5">
                <MenuAnimation menuItems={menuItems} />
            </div>

        </footer>
    )
}
