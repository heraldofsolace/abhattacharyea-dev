import { getService } from "@/lib/data/services"
import { BlocksRenderer } from "@strapi/blocks-react-renderer"
import Link from "next/link"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { GetValues } from "@/src/types/types"
import { Button } from "@/components/ui/button"

function PriceCard({pricing}: { pricing: GetValues<"api::service-pricing.service-pricing">}) {
    return (
        <Card className="w-100">
            <CardHeader>
                <CardTitle className="text-3xl">{pricing.name}</CardTitle>
                <CardDescription className="text-xl">{pricing.price}</CardDescription>
            </CardHeader>
            <CardContent>
                    <BlocksRenderer content={pricing.details} />
            </CardContent>
            <CardFooter>
                <Button>
                    <Link href={"/contact"}>Contact</Link>
                </Button>
            </CardFooter>
        </Card>
    )
}

export default async function Service({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
    const {slug} = await params
    const service = await getService(slug)
    
    return (
        <main className="p-10 mt-10 min-w-screen">
            <h1 className="text-9xl font-mono font-semibold">{service.name}</h1>
            <article className="w-500 mt-10 font-mono prose dark:prose-invert prose-h2:text-5xl prose-p:m-3 prose-h3:text-3xl prose-h4:text-xl ">
                <BlocksRenderer 
                        content={service.description}
                    />
            </article>

            <section className="flex flex-col gap-10">
                <h2 className="text-7xl mb-10 font-mono font-semibold">Pricing</h2>
                <div className="flex mt-10 gap-10 justify-center">
                {service.service_pricings?.map((pricing) => {
                        return <PriceCard pricing={pricing} key={pricing.name} />
                    })}
            </div>
            </section>
   
        </main>
    )
}
