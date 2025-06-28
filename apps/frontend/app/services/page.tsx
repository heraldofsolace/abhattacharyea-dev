import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { getAllServices } from "@/lib/data/services"
import { GetValues } from "@/src/types/types"
import Image from "next/image"
import Link from "next/link"

const images = [
    "/a-man-typing-on-a-laptop.png",
    "/christopher-gower-m_HRfLhgABo-unsplash.jpg",
    "/nikita-kachanovsky-OVbeSXRk_9E-unsplash.jpg",
    "/tianyi-ma-WiONHd_zYI4-unsplash.jpg"
]

function ServiceCard({service, index}: { service: GetValues<"api::service.service">, index: number}) {
    const {name, starting_price, summary, slug} = service
    return (
        <Card className="max-w-100">
            <CardHeader>
                <CardTitle>{name}</CardTitle>
                <CardDescription>{starting_price}</CardDescription>
            </CardHeader>
            <CardContent>
                 <Image src={images[index]} alt="" width={300} height={300} className="mb-5 rounded-md mx-auto" />
                    {summary}
            </CardContent>
            <CardFooter>
                <Button>
                    <Link href={`/services/${slug}`}>Learn more</Link>
                </Button>
            </CardFooter>
        </Card>
    )
}
export default async function Services() {
    const services = await getAllServices()
    return (
        <div className="p-10">
            <h1 className="text-9xl font-mono font-semibold p-10">
                Services
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 justify-center">
                {services.data.map((service, index) => {
                        return <ServiceCard service={service} key={service.slug} index={index} />
                    })}
            </div>
   
        </div>
    )
}
