import ContactForm from "@/components/contact-form";
import { formSchema } from "@/lib/data/contact-form";
import { z } from "zod";

import { HTTPError, strapi } from '@strapi/client';

const client = strapi({ baseURL: process.env.STRAPI_BASE_URL || 'http://localhost:1337/api', auth: process.env.STRAPI_TOKEN });

async function submitForm(values:z.infer<typeof formSchema>) {
    "use server"
    try {
        await client.collection("contact-form-responses").create({...values})
        return {success: true, error: ""}
    } catch (e) {
        return {success: false, error: (e as HTTPError).message}
    }
}
export default function Contact() {
    return (
        <div className="p-10 mt-10 w-screen">
            <h2>Get in touch</h2>
            <div className="w-120">
                <ContactForm submitForm={submitForm} />

            </div>
        </div>
    )
}
