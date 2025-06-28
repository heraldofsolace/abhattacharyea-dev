import { getPostsPaginated } from "@/lib/data/posts";
import { APIResponseData } from "@/src/types/types";
import {
  Card,
  CardAction,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import PaginationComponent from "@/components/pagination-component";
import { Badge } from "@/components/ui/badge";

function BlogCard({post}:{post: APIResponseData<"api::post.post">}) {
    const strapiURL = process.env.STRAPI_BASE_URL || "http://localhost:1337"
    return (
        <Card className="min-h-150 relative">
            <CardHeader>
                <CardTitle className="text-xl">{post.title}</CardTitle>
                <CardAction>
                    <Button>
                        <Link href={`/blogs/${post.documentId}`}>Read article</Link>
                    </Button>
                </CardAction>
            </CardHeader>
            <CardContent className="flex flex-col justify-center">
                <Image src={`${strapiURL}/uploads${post.feature_image?.url}`} className="mx-auto" width={500} height={300} alt="" />
                <p className="mt-5">{post.summary}</p>
            </CardContent>
            <CardFooter className="absolute bottom-0 mb-3">
                {post.article_categories?.map((cat) => <Badge key={cat.slug}>{cat.name}</Badge>)}
            </CardFooter>
        </Card>
    )
}

export default async function Blogs({searchParams}:{
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
    const page = Number((await searchParams).page) || 1
 
    console.log(page)
    const allPosts = await getPostsPaginated(page);
    return (<div className="flex items-center justifiy-center">
        <div className="col-span-3">
            <div className="mt-20 p-10 grid grid-cols-4 gap-5">
                {allPosts.data.map((post) => {
                    return <div key={post.documentId}>
                        <BlogCard post={post} />
                    </div>
                })}
        
            </div>
            <div>
                <PaginationComponent itemCount={allPosts.meta.pagination.total} pageSize={allPosts.meta.pagination.pageSize} currentPage={page} />
            </div>
        </div>
       
        
    </div>)
    
}
