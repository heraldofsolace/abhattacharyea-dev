import { CollectionTypeResponse, SingleTypeResponse } from '@/src/types/types';
import { strapi } from '@strapi/client';

const query = { populate: "*" };

const client = strapi({ baseURL: process.env.STRAPI_BASE_URL || 'http://localhost:1337/api', auth: process.env.STRAPI_TOKEN });

export async function getAllServices() {
    const services = client.collection("services")
    const allServices = await services.find(query) as unknown as CollectionTypeResponse<"api::service.service">
    console.log(allServices)
    return allServices
}

export async function getService(slug: string) {
    const services = client.collection("services")
    const service = await services.find({filters: {slug}, populate: "*"}) as unknown as CollectionTypeResponse<"api::service.service">
    console.log(service)
    return service.data[0]
}
