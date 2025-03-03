import { reviews } from "./constants"
import ReviewCard from "./ReviewCard"

const CustomerReview = () => {
    return (
        <section className="w-full px-12 py-16 max-lg:px-8 max-container bg-pale-blue">
            <h3 className="text-4xl leading-normal text-center font-secondary font-bold max-sm:text-[20px] max-sm:leading-[32px]">
                what our 
                <span className="text-coral"> customers </span> 
                says
            </h3>
            <p className="text-center text-slate-gray 
            font-medium text-[17px] max-w-[500px] mx-auto pt-2">
                hear genuine stories from our satisfied customers 
                about their exceptional experience with us
            </p>
            <div className="flex-1 flex justify-evenly items-center 
            mt-24 max-lg:flex-col gap-14">
                {reviews.map((review) => (
                    <ReviewCard
                    key={review.customerName}
                    imgURL={review.imgURL}
                    customerName={review.customerName}
                    rating={review.rating}
                    feedback={review.feedback} />
                ))}
            </div>
        </section>
    )
}

export default CustomerReview
