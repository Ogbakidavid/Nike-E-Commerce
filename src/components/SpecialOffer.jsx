import { arrowRight } from "../assets/icons"
import { offer } from "../assets/images"
import Button from "./Button"


const SpecialOffer = () => {
    return (
        <section className="w-full px-12 py-16 flex justify-evenly max-lg:px-8
        items-center gap-10 max-xl:flex-col-reverse">
            <div className="flex-1 max-lg:mt-8">
                <img src={offer}
                alt="offer"
                width={773}
                height={687} 
                className="object-contain w-full"/>
            </div>

            <div className="flex flex-1 flex-col gap-5">
                <h2 className='font-secondary capitalize font-extrabold 
                text-4xl mt-10 leading-normal max-sm:text-[20px]'>
                    <span className="text-coral">special</span> offer
                </h2>
                <p className="text-[17px] font-medium text-slate-gray leading-normal">
                    Embark on a shopping journey that redefines your deals.
                    From premier selections to incredible savings, we offer
                    unparalleled value that sets us apart
                </p>
                <p className="text-[17px] font-medium text-slate-gray max-sm:mb-5">
                    Navigate a realm of possibilities designed to fulfill
                    your unique desires, surpassing the loftiest expectations.
                    Your journey with us is nothing short of exceptional
                </p>
                <div className="flex flex-wrap gap-4">
                    <Button label="Shop now"
                    iconURL={arrowRight} />
                    <Button 
                    label="learn more"
                    backgroundColor="bg-white"
                    borderColor="border-slate-gray"
                    textColor="text-slate-gray" />
                </div>
            </div>
        </section>
    )
}

export default SpecialOffer
