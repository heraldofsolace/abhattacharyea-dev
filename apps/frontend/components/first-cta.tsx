import CycleText from "@/components/animata/text/cycle-text";
import Image from "next/image";
import Link from "next/link";
import GetStartedButton from "@/components/animata/button/get-started-button";

export function FirstCTA() {
    const words = [
        { text: "Confidence", classes: "text-main" },
        { text: "Authority", classes: "text-main" },
        { text: "Reliability", classes: "text-main" },
    ]
    return (
        <section className="p-10">
            <div className="flex gap-10 items-center">
                <Image src="/computer-pic-1.jpg" width={600} height={0} alt="" className="rounded-md"/>
                <h2 className="">
                    Reach your developer audience with <CycleText words={words} />
                </h2>
            </div>

            <div className="flex flex-row-reverse gap-5 justify-center p-10 font-mono font-semibold">
                <Image src="/computer-pic-2.jpg" width={500} height={0} alt="" className="rounded-md"/>
                <div className="w-96">
                    <p>Speaking to developers is not easy. They value quality over buzzwords and can see right through the marketing speak.</p>
                    <p className="mt-5">
                        I have over 5 years of developer experience and over 3 years of developer relations experience. I have written over 150 technical articles and helped over 30 clients with my expertise.
                    </p>
                    <Link href="/services" className={"block mt-5"}><GetStartedButton text={"See my services"} /></Link>
                </div>

            </div>

        </section>
    )
}
