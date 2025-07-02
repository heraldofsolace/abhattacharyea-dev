import { CollectionTypeResponse, SingleTypeResponse } from '@/src/types/types';
import { strapi } from '@strapi/client';

const client = strapi({ baseURL: `${process.env.STRAPI_BASE_URL}/api` || 'http://localhost:1337/api', auth: process.env.STRAPI_TOKEN });

export async function getPostsPaginated(page=1) {
    const query = {
        populate: "*",
        pagination: {
            page: page,
            pageSize: 10
        }
    }
    const posts = client.collection("posts")
    const allPosts = await posts.find(query) as unknown as CollectionTypeResponse<"api::post.post">
    console.log(allPosts)
    return allPosts
}

export async function getAllPosts() {
    const posts = client.collection("posts")
    const allPosts = await posts.find() as unknown as CollectionTypeResponse<"api::post.post">

    return allPosts
}

export async function getPost(id: string) {
    const query = { populate: "*" }
    const posts = client.collection("posts")
    const post = posts.findOne(id, query) as unknown as SingleTypeResponse<"api::post.post">
    return post
}

export async function getMorePosts(id: string) {
    const query = { populate: "*", filters: { documentId: { $ne: id }}, pagination: {limit: 5} }
    const postsC = client.collection("posts")
    const posts = postsC.find(query) as unknown as CollectionTypeResponse<"api::post.post">
    return posts
}
