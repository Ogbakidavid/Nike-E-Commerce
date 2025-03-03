import Button from "./Button"

const subscribe = () => {
    return (
        <section className="w-full px-12 py-16 max-lg:px-8 
        max-container flex justify-between items-center max-lg:flex-col gap-10" id="contact-us">
            <h3 className="text-2xl font-bold font-secondary leading-[38px] 
            max-sm:text-[15px] max-sm:leading-[22px] max-lg:text-center lg:max-w-[600px]">
                Sign Up for 
                <span className="text-coral"> Updates </span>
                & Newsletter
            </h3>
            <div className="lg:max-w-[40%] w-full flex justify-center
            items-center max-sm:flex-col gap-5 p-2.5 sm:border 
            sm:border-slate-gray rounded-full">
                <input type="text" 
                placeholder="subscribe@nike.com" 
                name="email" id="email" 
                className="input"/>
                <div className="flex max-sm:justify-end items-center max-sm:w-full">
                    <Button label="sign in" 
                    fullWidth/>
                </div>
            </div>
        </section>
    )
}

export default subscribe
