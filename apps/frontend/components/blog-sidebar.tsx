import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { getMorePosts } from "@/lib/data/posts"
import Image from "next/image"
import Link from "next/link"


export default async function BlogSidebar({postId}: {postId: string}) {
    const morePosts = await getMorePosts(postId)
    const strapiURL = process.env.STRAPI_BASE_URL || "http://localhost:1337"
  return (
    <Sidebar side="right" variant="inset" className="w-96">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>More Posts</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {morePosts.data.map(post => (
                <SidebarMenuItem key={post.documentId}>
                    <div className="relative m-5">
                        <Image src={`${strapiURL}${post.feature_image?.url}`} width={300} height={300} alt="" />
                        <h5 className="absolute top-0 left-0 m-3 underline"><Link href={`/blogs/${post.documentId}`}>{post.title}</Link></h5>
                    </div>
                    
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
