const Button = ({ label,  iconURL, backgroundColor, borderColor, textColor, fullWidth}) => {
    return (
        <button className={`flex justify-center items-center 
        px-4 py-2 cursor-pointer shadow-xl
        border font-tertiary text-lg leading-normal
        ${ 
            backgroundColor 
            ? `${backgroundColor} ${textColor} ${borderColor}` 
            : 'bg-coral text-white'
        } rounded-full ${fullWidth && 'w-full'}`}>
            {label}

            {iconURL && <img src={iconURL} 
            alt="arrow right icon" 
            className="ml-2 rounded-full w-5 h-5"
            /> }
        </button>
    )
}


export default Button
