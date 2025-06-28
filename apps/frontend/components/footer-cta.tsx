import ContactMeButton from "@/components/animata/button/contact-me-button";
import Image from "next/image";

export default function FooterCTA() {
    return (
        <section className="p-5 xl:p-10">
            <h2 className="text-5xl xl:text-7xl xl:w-max-500">Learn how to grow the developer audience you <span className="text-main">deserve</span>.</h2>
            <div className="flex flex-col xl:flex-row items-center p-10 gap-10">
                <Image src={"/a-man-typing-on-a-laptop.png"} width={1000} height={100} alt="" className="rounded-lg"/>
                <div>
                    <p className="xl:text-5xl font-mono font-semibold">Schedule your free consultation and find out how I can help</p>
                    <ContactMeButton text={"Get in touch"} />
                </div>
                
            </div>

        </section>
    )
}
