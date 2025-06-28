"use client"

import {motion} from "motion/react"
import {useEffect, useRef, useState} from "react";
import InteractiveGrid from "./animata/background/interactive-grid";
import ServicesList from "./services-list";

function getRelativeMousePosition(mouseX: number, mouseY: number, currX: number, currY: number, maxX: number = window.innerWidth, maxY: number = window.innerHeight) {

    console.log(mouseX, mouseY, currX, currY, maxX, maxY)
    const pos = { x: (mouseX - currX) / (maxX) * 100 , y: (mouseY - currY) / (maxY) * 100 }
    pos.x = pos.x > 100 ? 100 : pos.x < -100 ? -100 : pos.x
    pos.y = pos.y > 30 ? 30 : pos.y < -30 ? -30 : pos.y
    console.log(pos)
    return pos
}
export default function HeroSection() {
    const [x, setX] = useState(0)
    const eyeRef = useRef(null)
    const eyeRef2 = useRef(null)

    const [mousePosition, setMousePosition] = useState({
        x: 0,
        y: 0,
    });
    const [secondMousePosition, setSecondMousePostition] = useState({
        x: 0,
        y: 0,
    })

    useEffect(() => {
        if (!eyeRef.current) return;
        if (!eyeRef2.current) return;
        const rect = (eyeRef.current as HTMLElement).getBoundingClientRect();
        const rect2 = (eyeRef2.current as HTMLElement).getBoundingClientRect();
        console.log(rect)
        const updateMousePosition = (e: MouseEvent) => {
            setMousePosition(getRelativeMousePosition(e.clientX, e.clientY, rect.left + rect.width / 2, rect.top + rect.height / 2, rect.width / 2, rect.height / 2));
            setSecondMousePostition(getRelativeMousePosition(e.clientX, e.clientY, rect2.left + rect2.width / 2, rect2.top + rect2.height / 2, rect2.width / 2, rect2.height / 2));
        };

        window.addEventListener("mousemove", updateMousePosition);

        return () => {
            window.removeEventListener("mousemove", updateMousePosition);
        };
    }, []);
    useEffect(() => {
        const timer = setInterval(() => {
            setX(Math.random() * 200 - 100)
        }, 1500)

        return () => {
            clearInterval(timer)
        }
    }, [x])
    return (
        <header className="flex items-center justify-evenly w-screen">
            <InteractiveGrid>
                <div className="flex items-end justify-center">
                    <motion.svg
                        width="8rem"
                        height="25rem"
                        className={"w-10 h-30 mr-1 lg:w-30 lg:h-96"}
                        viewBox="0 0 120.62893 186.14587"
                        version="1.1"
                        id="svg1">
                        <defs>
                            <motion.clipPath id="pupil">
                                <rect
                                    fill="#ffffff"
                                    x="49.581528" y="182.89156" width={"100"} height={"20"} rx={"10"}
                                />
                            </motion.clipPath>
                        </defs>
                        <g
                            id="layer1"
                            transform="translate(-40.353296,49.824548)"
                            >
                            <motion.path
                                id="rect10"
                                fill={"#d64541"}
                                d="m 40.353298,109.61065 c 0,0 0.289274,-65.786103 61.180812,-65.786103 60.89153,0 59.44516,65.786103 59.44516,65.786103 V 229.97041 H 40.353298 Z"
                            />
                            <g id="g10" width={"100"} height={"20"} clipPath="url(#pupil)" >
                                <rect x="49.581528" y="182.89156" ref={eyeRef} width={"100"} height={"20"} rx={"10"} fill="#ffffff00" />
                                <motion.rect x="49.581528"  width={"100"} initial={{ height: 0, y: 192.89156}} animate={{ height: 20, y:182.89156 }} transition={{ duration: 0.5, delay: 0}} rx={"10"} fill="#ffdbac" />
                                <motion.circle
                                    animate={{x: `${mousePosition.x}%`, y: `${mousePosition.y}%`, scale: 1}}
                                    transition={{ duration: 0.5, delay: 0.5}}
                                    initial={{ scale: 0}}
                                    id="path11"
                                    cx="99.581528"
                                    cy="190.89156"
                                    r="24.949619" />
                            </g>
                        </g>
                    </motion.svg>
                    <span className="text-5xl lg:text-9xl mx-1 font-bold text-foreground font-(family-name:--font-geometrica)">N</span>
                    <motion.svg
                        width="6rem"
                        height="20rem"
                        className={"w-10 h-20 lg:w-30 lg:h-64"}
                        viewBox="0 0 120.62893 186.14587"
                        version="1.1"
                        id="svg2">
                        <defs>
                            <motion.clipPath id="pupil2">
                                <rect
                                    fill="#ffffff"
                                    x="49.581528" y="15.89156" width={"100"} height={"20"} rx={"10"}
                                />
                            </motion.clipPath>
                        </defs>
                        <g
                            id="layer2"
                            transform="translate(-40.353296,35.824548)">
                            <motion.rect
                                id="rect11"
                                fill={"#d64541"}
                                width={"80"} height={"200"} rx={"15"} x={"60.353298"} y={"51.89156"}
                            />
                            <g id="g13" width={"100"} height={"20"} clipPath="url(#pupil2)" >
                                <rect x="49.581528" y="15.89156"  width={"100"} height={"20"} ref={eyeRef2} rx={"10"} fill="#ffdbac00" />
                                <motion.rect x="49.581528"  width={"100"} initial={{ height: 0, y: 25.89156}} animate={{ height: 20, y:15.89156 }} transition={{ duration: 0.5, delay: 0}} rx={"10"} fill="#ffdbac" />
                                <motion.circle
                                    animate={{x: `${secondMousePosition.x}%`, y: `${secondMousePosition.y}%`, scale: 1}}
                                    id="path11"
                                    transition={{ duration: 0.5, delay: 0.5}}
                                    initial={{ scale: 0}}
                                    cx="99.581528"
                                    cy="20.89156"
                                    r="24.949619" />
                            </g>
                        </g>
                    </motion.svg>
                    <span className="text-5xl lg:text-9xl mx-1 font-bold text-foreground font-(family-name:--font-geometrica)">K</span>
                    <span className="text-5xl lg:text-9xl mx-1 font-bold text-foreground font-(family-name:--font-geometrica)">E</span>
                    <span className="text-5xl lg:text-9xl mx-1 font-bold text-foreground font-(family-name:--font-geometrica)">T</span>
                </div>
                <div className="flex justify-center"><h4 className="text-lg">Worry free developer marketing</h4></div>
                <ServicesList />


            </InteractiveGrid>
        
        
        </header>
    )
}
