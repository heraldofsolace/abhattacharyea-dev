"use client"
import { cn } from "@/lib/utils";
import  Image from "next/image";
import { useCallback, useRef } from "react";
 
import { useMousePosition } from "@/hooks/use-mouse-position";

function BentoCard({ children, className, companyName }: { children: React.ReactNode; className?: string, companyName:string }) {
    const divRef = useRef<HTMLDivElement>(null);
    const infoRef = useRef<HTMLDivElement>(null);
    const update = useCallback(({ x, y }: { x: number; y: number }) => {
        // We need to offset the position to center the info div
        const offsetX = (infoRef.current?.offsetWidth || 0) / 2;
        const offsetY = (infoRef.current?.offsetHeight || 0) / 2;
    
        // Use CSS variables to position the info div instead of state to avoid re-renders
        infoRef.current?.style.setProperty("--x", `${x - offsetX}px`);
        infoRef.current?.style.setProperty("--y", `${y - offsetY}px`);
    }, [])
    useMousePosition(divRef, update)
    return (
        <div ref={divRef} className={cn("group relative h-full w-full overflow-hidden rounded-2xl p-4", className)}>
            {children}
            {/* Cursor tracker */}
            <div
                ref={infoRef}
                style={{
                    transform: "translate(var(--x), var(--y))",
                }}
                className="pointer-events-none absolute left-0 top-0 z-50 rounded-full bg-two px-4 py-2 text-sm font-bold text-white opacity-0 duration-0 group-hover:opacity-100"
            >
                {companyName}
            </div>
        </div>
    );
}

function FeatureOne() {
    return (
        <BentoCard className="flex flex-col items-center justify-center bg-white" companyName="Fingerprint">
            <Image src={"/fingerprint.png"} alt={"fingerprint"} width={350} height={0} />
        </BentoCard>
    );
}

function FeatureTwo() {
    return (
        <BentoCard className="relative flex flex-col items-center justify-center overflow-visible bg-yellow-100 sm:col-span-2" companyName="Bright Data">
            <Image src={"/brightdata.png"} alt={"brightdata"} width={350} height={0} />
        </BentoCard>
    );
}

function FeatureThree() {
    return (
        <BentoCard className="flex flex-col items-center justify-center bg-orange-300" companyName="Earthly">
            <Image src={"/earthly.png"} alt={""} width={200} height={0} />
        </BentoCard>
    );
}

function FeatureFour() {
    return (
        <BentoCard className="flex items-center justify-center gap-4 bg-white sm:col-span-2" companyName="FusionAuth">
           <Image src={"/fusionauth.svg"} alt={""} width={1000} height={0} />
        </BentoCard>
    );
}

function FeatureFive() {
    return (
        <BentoCard className="flex flex-col items-center justify-center bg-lime-200 sm:col-span-2" companyName="GoLand">
            <Image src={"/goland.svg"} alt={""} width={200} height={0} />
        </BentoCard>
    );
}

function FeatureSix() {
    return (
        <BentoCard className="bg-green-200 flex items-center justify-center" companyName="Dropbox Sign">

           <Image src={"/dropbox-sign.svg"} alt={""} width={250} height={0} />
        </BentoCard>
    );
}

function FeatureSeven() {
    return (
        <BentoCard className="flex flex-col gap-2 bg-white items-center justify-center" companyName="Loft Labs">
            <Image src={"/loftlabs.jpg"} alt={""} width={150} height={0} />
        </BentoCard>
    );
}

function FeatureEight() {
    return (
        <BentoCard className="relative flex flex-col items-center justify-center bg-blue-200 sm:col-span-2" companyName="Tailscale">
            <Image src={"/tailscale.png"} alt={""} width={300} height={0} />
        </BentoCard>
    );
}

// #endregion

export default function Eight() {
    return (
        <div className="storybook-fix max-w-full xl:max-w-1/2">
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-4 sm:grid-rows-3">
                <FeatureOne />
                <FeatureTwo />
                <FeatureThree />
                <FeatureFour />
                <FeatureFive />
                <FeatureSix />
                <FeatureSeven />
                <FeatureEight />
            </div>
        </div>
    );
}
