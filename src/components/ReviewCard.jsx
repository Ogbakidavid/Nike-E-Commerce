import { star } from "../assets/icons"

const ReviewCard = ({imgURL, customerName, rating, feedback}) => {
    return (
        <div className="flex justify-center items-center flex-col">
            <img 
                src={imgURL} 
                alt="customer"
                className="rounded-full w-[120px] h-[120px] object-cover"
            />
            <p className="text-slate-gray text-center 
            font-medium text-[17px] py-4 max-w-sm leading-normal">{feedback}</p>
            <div className="flex justify-center items-center gap-2 mb-4">
                <img 
                    src={star} 
                    width={24}
                    height={24}
                    alt="star"
                    className="object-contain m-0"
                />
                <p className="text-slate-gray font-medium text-xl">({rating})</p>
            </div>
            <h3 className="font-tertiary font-bold">{customerName}</h3>
        </div>
    )
}


export default ReviewCard

