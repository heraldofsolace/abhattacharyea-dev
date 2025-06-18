import { CollectionTypeResponse, SingleTypeResponse } from '@/src/types/types';
import { strapi } from '@strapi/client';

const query = { populate: "*" };

const client = strapi({ baseURL: process.env.STRAPI_BASE_URL || 'http://localhost:1337/api' });

export async function getAllBlogPortfolios() {
    const blogPortfolios = client.collection("blog-portfolios")
    const allBlogPortfolios = await blogPortfolios.find(query) as unknown as CollectionTypeResponse<"api::blog-portfolio.blog-portfolio">
    console.log(allBlogPortfolios)
    return allBlogPortfolios
}

export async function getBlogPortfolio(id: string) {
    const blogPortfolios = client.collection("blog-portfolios")
    const blogPortfolio = blogPortfolios.findOne(id) as unknown as SingleTypeResponse<"api::blog-portfolio.blog-portfolio">
    return blogPortfolio
}
