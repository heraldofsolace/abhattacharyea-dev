import {APIResponseData} from "@/src/types/types";
import {Circle} from "lucide-react";

export default function BlogPortfolio({blogPortfolio}:{blogPortfolio: APIResponseData<"api::blog-portfolio.blog-portfolio">}) {
    return (
        <div className="m-5 flex gap-5 items-center w-full font-mono font-semibold">
            <div className="flex flex-col justify-center">
                <h3 className="text-5xl"><a href={blogPortfolio.link}>{blogPortfolio.title}</a></h3>
                <span className={"text-sm text-gray-300"}>For <span className={"text-red-500"}>{blogPortfolio.client}</span> <Circle className="inline-block" size={10} /> <span className={"text-sm"}>{blogPortfolio.publishedAt?.toString()}</span></span>
            
                <span className={"text-sm"}>{blogPortfolio.article_categories?.toString()}</span>
            </div>
        </div>
    )
}
