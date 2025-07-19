import {getPostsPaginated} from "@/lib/data/posts";
import * as React from "react"
import Image from "next/image"

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import {CollectionTypeResponse} from "@/src/types/types";
import { Button } from "./ui/button";
import Link from "next/link";

function ScrollAreaHorizontal({blogs}: {blogs: CollectionTypeResponse<"api::post.post">}) {
    const strapiURL = process.env.STRAPI_BASE_URL || "http://localhost:1337"
    return (
        <ScrollArea className="rounded-md xl:w-1/2 whitespace-nowrap">
            <div className="flex flex-col xl:flex-row w-max space-y-4 xl:space-x-4 p-4">
                {blogs.data.map((blog) => (

                    <div key={blog.documentId}>
                           <figure className={"shrink-0"}>
                            <div className="overflow-hidden">
                                {blog.feature_image? <Image
                                    src={`${strapiURL}${blog.feature_image.url}`}
                                    alt={`Photo by`}
                                    className="aspect-[3/2] h-fit w-fit object-cover"
                                    width={350}
                                    height={100}
                                />: null}
                                
                            </div>
                            </figure>
                        
                        <h3 className="font-bold text-xl mt-3 overflow-hidden text-wrap w-96 xl:w-96"><Link href={`/blogs/${blog.documentId}`}>{blog.title}</Link></h3>
                        <span className="text-xs">
                            {blog.publishedAt? new Date(blog.publishedAt).toDateString() : null}
                        </span>
                    </div>

                ))}
            </div>
            <ScrollBar orientation="horizontal" className="hidden xl:visible" />
        </ScrollArea>
    )
}

export default async function BlogsList() {
    const blogs = await getPostsPaginated()

    return (
        <section className="flex flex-col-reverse xl:flex-row p-5 xl:p-10 xl:gap-10 w-screen items-center justify-center overflow-x-hidden">
            <ScrollAreaHorizontal blogs={blogs} />
            <div className="w-full p-5 xl:w-1/2 align-self-start">
                <h2 className="text-5xl xl:text-7xl mb-3">Get Inspired</h2>
                <Button>
                    <Link href="/blogs">Read more</Link>
                </Button>
            </div>
        </section>
    )
}
