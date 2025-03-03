import { services } from "./constants"
import ServicesCard from "./ServicesCard"

const Services = () => {
    return (
        <section className="py-[8rem] px-12 max-lg:px-8 flex justify-center flex-wrap lg:gap-9 max-lg:gap-12">
            {services.map((service) => (
                <ServicesCard key={service.label} 
                {...service} />
            ))}
        </section>
    )
}

export default Services
