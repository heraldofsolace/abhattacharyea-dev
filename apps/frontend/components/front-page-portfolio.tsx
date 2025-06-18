
import {getAllBlogPortfolios} from "@/lib/data/blog-portfolios";
import BlogPortfolio from "@/components/blog-portfolio";

export default async function FrontPagePortfolio() {
    const blogPortfolios = await getAllBlogPortfolios();

    return (
        <section className="p-10">
            <h2 className={"my-15"}>My Works</h2>
            {blogPortfolios?.data.map((portfolio) => {
                return (
                    <div key={portfolio.documentId}>
                        <BlogPortfolio blogPortfolio={portfolio} />
                    </div>
                )
            })}
        </section>
    )
}
