import { BlocksRenderer } from "@strapi/blocks-react-renderer"

import { getPost } from "@/lib/data/posts"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import BlogSidebar from "@/components/blog-sidebar"

export default async function Blog({
  params,
}: {
  params: Promise<{ documentId: string }>
}) {
    const {documentId} = await params
    const blog = await getPost(documentId)
    
    return (<>
        <main className="mt-20 p-10">
            <h1 className="text-9xl font-mono font-semibold">{blog.data.title}</h1>
            <figure className="mt-5 mb-3">
              <Image src={`http://localhost:1337${blog.data.feature_image?.url}`} width={1000} height={300} alt="" />
              <figcaption></figcaption>
            </figure>
            <div className="mt-3">
              {blog.data.article_categories?.map((cat) => <Badge key={cat.slug}>{cat.name?.toString()}</Badge>)}
            </div>
            <article className="w-500 mt-10 font-mono prose dark:prose-invert prose-h2:text-5xl prose-p:m-3 prose-h3:text-3xl prose-h4:text-xl ">
                <BlocksRenderer 
                        content={blog.data.body}
                    />
            </article>
   
        </main>
        <BlogSidebar />
        </>
    )
}
