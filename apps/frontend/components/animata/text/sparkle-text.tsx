"use client"

import { useEffect, useMemo, useState } from "react";
import { loadFull } from "tsparticles";

import type { ISourceOptions } from "@tsparticles/engine";
import Particles, { initParticlesEngine } from "@tsparticles/react";

const options: ISourceOptions = {
    key: "star",
    name: "Star",
    particles: {
        number: {
            value: 20,
            density: {
                enable: false,
            },
        },
        color: {
            value: ["#d64541", "#d64541", "#d64541", "#d64541", "#d64541", "#d64541", "#d64541"],
        },
        shape: {
            type: "star",
            options: {
                star: {
                    sides: 4,
                },
            },
        },
        opacity: {
            value: 0.8,
        },
        size: {
            value: { min: 1, max: 4 },
        },
        rotate: {
            value: {
                min: 0,
                max: 360,
            },
            enable: true,
            direction: "clockwise",
            animation: {
                enable: true,
                speed: 10,
                sync: false,
            },
        },
        links: {
            enable: false,
        },
        reduceDuplicates: true,
        move: {
            enable: true,
            center: {
                x: 120,
                y: 45,
            },
        },
    },
    interactivity: {
        events: {},
    },
    smooth: true,
    fpsLimit: 120,
    background: {
        color: "transparent",
        size: "cover",
    },
    fullScreen: {
        enable: false,
    },
    detectRetina: true,
    absorbers: [
        {
            enable: true,
            opacity: 0,
            size: {
                value: 1,
                density: 1,
                limit: {
                    radius: 5,
                    mass: 5,
                },
            },
            position: {
                x: 110,
                y: 45,
            },
        },
    ],
    emitters: [
        {
            autoPlay: true,
            fill: true,
            life: {
                wait: true,
            },
            rate: {
                quantity: 5,
                delay: 0.5,
            },
            position: {
                x: 110,
                y: 45,
            },
        },
    ],
};

export default function SparkleText({text, textClasses}: {text: string, textClasses?: string}) {
    const [particleState, setParticlesReady] = useState<"loaded" | "ready">();
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadFull(engine);
        }).then(() => {
            setParticlesReady("loaded");
        });
    }, []);

    const modifiedOptions = useMemo(() => {
        options.autoPlay = isHovering;
        return options;
    }, [isHovering]);

    return (
        <div
            className="inline-block group relative my-8 rounded-full text-white transition-transform"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
        >
            <div className="relative flex items-center justify-center gap-2 rounded-full py-2 text-white">
                <span className={textClasses}>{text}</span>
            </div>
            {!!particleState && (
                <Particles
                    id="whatever"
                    className={`pointer-events-none absolute -bottom-4 -left-4 -right-4 -top-4 z-0 opacity-0 transition-opacity ${particleState === "ready" ? "group-hover:opacity-100" : ""}`}
                    particlesLoaded={async () => {
                        setParticlesReady("ready");
                    }}
                    options={modifiedOptions}
                />
            )}
        </div>
    );
}
