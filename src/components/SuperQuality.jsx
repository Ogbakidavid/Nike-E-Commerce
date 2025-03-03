import { shoe8 } from "../assets/images";
import Button from "./Button";

const SuperQuality = () => {
    return (
        <section id="about-us" className="flex justify-between items-center max-lg:flex-col 
        max-sm:mt-7 w-full py-[8rem] px-12  gap-15 max-lg:px-8">
            <div className="flex flex-1 flex-col gap-5">
                <h2 className='font-secondary capitalize font-extrabold 
                text-4xl mt-10 leading-normal max-sm:text-[20px] max-sm:leading-[32px] lg:max-w-lg'>
                    we provide you  <span className="text-coral">super</span>  <span className="text-coral">quality</span>  shoes
                </h2>
                <p className='lg:max-w-lg text-[17px] font-medium text-slate-gray'>
                    Ensuring premium comfort and style, our meticulously crafted
                    footwear is designed to elevate your experience, providing you
                    with unmatched quality, innovations, and a touch of elegance
                </p>
                <p className="lg:max-w-lg text-[18px] font-medium text-slate-gray">
                    Our dedication to detail and excellence ensures you satisfaction
                </p>
                <div>
                    <Button label={"View details"} />
                </div>
            </div>

            <div className="flex-1 flex justify-center items-center">
                <img 
                    src={shoe8} 
                    alt="shoe"
                    width={570}
                    height={570} 
                />
            </div>
        </section>
    )
}

export default SuperQuality
