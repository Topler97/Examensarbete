

export const Button = ({buttonText, onClick, buttonColor}) => {
    return(
        <button onClick={onClick} className={`${buttonColor} text-white bg-primary`}>
            Våra produkter
        </button>
    )
}