import { products } from "./constants";
import ProductCard from "./ProductCard";

const Product = () => {
    return (
        <section id="products" className="max-sm:mt-16 w-full mt-20 py-18 px-12 max-lg:px-8">
            <div className="flex flex-col justify-start gap-5 py-[5rem]">
                <h2 className="capitalize text-4xl font-secondary font-extrabold max-sm:text-[20px] max-sm:leading-[32px]">
                    our <span className="text-coral">popular</span> products
                </h2>
                <p className="lg:max-w-lg text-[17px] font-medium text-slate-gray">
                    Experience top-notch quality 
                    and style with our sought-after 
                    selections. Discover a world of comfort,
                    design, and value
                </p>
            </div>

            <div className="mt-16 max-sm:mt-6 grid lg:grid-cols-4 md:grid-cols-3 
            sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14">
                {products.map((product) => (
                    <ProductCard 
                    key={product.name} {...product} />
                ))}
            </div>
        </section>
    )
}

export default Product
