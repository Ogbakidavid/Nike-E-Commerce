import { star } from "../assets/icons"

const ProductCard = ({ imgURL, name, price}) => {
    return (
        <div className="flex flex-col w-full max-sm:w-full rounded-xl">
            <img 
                src={imgURL}
                alt={name} 
                className="w-[280px] h-[280px]"
            />
            <div className="mt-8 flex justify-start gap-2.5">
                <img 
                src={star} 
                alt="rating" 
                width={24} height={24}
                />
                <p className="font-tertiary text-slate-gray 
                font-bold leading-normal text-xl">
                    (4.5)
                </p>
            </div>
                <h3 className="mt-2 text-lg leading-normal 
                font-tertiary font-semibold">
                    {name}
                </h3>
                <p className="mt-2 font-semibold text-coral leading-normal">{price}</p>
        </div>
    )
}

export default ProductCard
