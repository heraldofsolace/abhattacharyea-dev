import {getAllPosts} from "@/lib/data/posts";
import * as React from "react"
import Image from "next/image"

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import {CollectionTypeResponse} from "@/src/types/types";
import { Button } from "./ui/button";
import Link from "next/link";

function ScrollAreaHorizontal({blogs}: {blogs: CollectionTypeResponse<"api::post.post">}) {
    return (
        <ScrollArea className="rounded-md w-1/2 whitespace-nowrap">
            <div className="flex w-max space-x-4 p-4">
                {blogs.data.map((blog) => (

                    <div key={blog.documentId}>
                           <figure className={"shrink-0"}>
                            <div className="overflow-hidden">
                                {blog.feature_image? <Image
                                    src={`http://localhost:1337${blog.feature_image.url}`}
                                    alt={`Photo by`}
                                    className="aspect-[3/4] h-fit w-fit object-cover"
                                    width={150}
                                    height={200}
                                />: null}
                                
                            </div>
                            </figure>
                        
                        <h3 className="font-bold text-xl mt-3">{blog.title}</h3>
                        <span className="text-xs">
                            {blog.publishedAt? new Date(blog.publishedAt).toDateString() : null}
                        </span>
                    </div>

                ))}
            </div>
            <ScrollBar orientation="horizontal" />
        </ScrollArea>
    )
}

export default async function BlogsList() {
    const blogs = await getAllPosts()

    return (
        <section className="flex p-10 gap-10 items-center justify-center overflow-x-hidden">
            <ScrollAreaHorizontal blogs={blogs} />
            <div className="w-1/2">
                <h2 className="">Get Inspired</h2>
                <Button>
                    <Link href="/blogs">Read more</Link>
                </Button>
            </div>
        </section>
    )
}
