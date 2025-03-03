import { footerLogo } from "../assets/images"
import { footerLinks, socialMedia } from "./constants"


const Footer = () => {
    return (
        <footer className="bg-black px-12 w-full pt-16 pb-3 max-lg:px-8 max-container text-white">
            <div className="flex justify-between items-start 
            gap-20 flex-wrap max-lg:flex-col">
                <div className="flex flex-col items-start">
                    <a href="/">
                        <img src={footerLogo} 
                        alt="nike-logo"
                        width={150}
                        height={46} />
                    </a>
                    <p className="mt-3 font-light font-tertiary 
                    max-w-sm text-base text-white-400">Get shoes ready for the new term at your
                        nearest Nike store, Find your perfect size
                        in store, Get Rewards
                    </p>
                    <div className="flex items-center gap-5 mt-6">
                        {socialMedia.map((icon) => (
                            <div key={icon} className="flex justify-center 
                            items-center bg-white p-3 rounded-full w-12 h-12">
                                <a href="">
                                    <img src={icon.src} 
                                    alt={icon.alt}
                                    width={24}
                                    height={24}
                                    />
                                </a>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="flex flex-1 justify-between 
                flex-wrap gap-20 lg:gap-10">
                    {footerLinks.map((section) => (
                        <div key={section}>
                            <h4 className="text-white capitalize text-[15px]
                            font-bold font-secondary leading-normal">{section.title}
                            </h4>
                            <ul className="font-tertiary flex flex-col">
                                {section.links.map((link) => (
                                    <li key={link} className="text-base mt-3 
                                    text-white-400 leading-normal hover:text-coral
                                    transition duration-300 ease-linear">
                                        <a href="">{link.name}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex justify-between items-start font-tertiary
            text-white mt-28 max-sm:flex-col max-sm:items-center">
                <span className="capitalize">&copy; copyright. all rights reserved.</span>

                <p className="capitalize font-medium">terms & conditions</p>
            </div>
        </footer>
    )
}

export default Footer
