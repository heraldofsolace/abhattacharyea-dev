import FlipCard from "./animata/card/flip-card";

export default function ServicesList() {
    return (
        <div className="flex flex-col items-center justify-center lg:flex-row m-10 lg:gap-10 lg:m-30">
            <FlipCard image="/a-man-typing-on-a-laptop.png"
                title="Technical Content Creation"
                description="I'll create SEO friendly blog posts for you, complete with code snippets, screenshots, and demo application on GitHub."
            />
            <FlipCard image="/tianyi-ma-WiONHd_zYI4-unsplash.jpg"
                title="Devrel Consulting"
                description="I'll help you grow and foster a developer community with devrel strategy that resonates with them."
            />
            <FlipCard image="/nikita-kachanovsky-OVbeSXRk_9E-unsplash.jpg"
                title="Content Planning and Reviewing"
                description="I'll create a detailed content outline for blog posts or scripts for videos and review the articles or videos produced by your existing content creators and ensure they're technically sound and engaging."
            />
        </div>
    )
}
