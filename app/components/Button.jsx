
export const Button = ({ buttonText, onClick, buttonColor }) => {
    return (
        <button
            onClick={onClick}
            style={{
                backgroundColor: buttonColor 
            }}
            className="text-white rounded-xl py-2 px-10 text-[16px] cursor-pointer"
        >
            {buttonText}
        </button>
    );
};
