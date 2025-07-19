import {APIResponseData} from "@/src/types/types";
import {Circle} from "lucide-react";
import { Badge } from "./ui/badge";
export default function BlogPortfolio({blogPortfolio}:{blogPortfolio: APIResponseData<"api::blog-portfolio.blog-portfolio">}) {
    return (
        <div className="m-5 flex gap-1 xl:gap-5 items-center w-full font-mono font-semibold">
            <div className="flex flex-col justify-center">
                <h3 className="text-sm xl:text-2xl"><a href={blogPortfolio.link}>{blogPortfolio.title}</a></h3>
                <span className={"text-sm text-gray-300"}>For <span className={"text-red-500"}>{blogPortfolio.client}</span> {blogPortfolio.publishedAt ? <><Circle className="inline-block" size={10} /> <span className={"text-sm"}>{(new Date(blogPortfolio.publishedAt).toDateString())}</span></>:null}</span>
            
                <span className={"text-sm"}>{blogPortfolio.article_categories?.map(c => <Badge key={c.slug}>{c.name}</Badge>)}</span>
            </div>
        </div>
    )
}
