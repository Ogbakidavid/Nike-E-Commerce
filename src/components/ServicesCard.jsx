const ServicesCard = ({imgURL, label, subtext}) => {
    return (
        <div className="sm:w-[350px] sm:min-w-[350px] w-full
        rounded-[20px] px-10 py-16 shadow-2xl">
            <div className="w-11 h-11 flex justify-center items-center bg-coral rounded-full">
                <img src={imgURL} 
                alt={label}
                width={24}
                height={24} />
            </div>
            <h3 className="mt-5 font-tertiary font-bold leading-normal text-2xl max-sm:text-[20px]">{label}</h3>
            <p className="text-slate-gray text-lg font-medium 
            mt-3 break-words leading-normal">{subtext}</p>
        </div>
    )
}


export default ServicesCard
