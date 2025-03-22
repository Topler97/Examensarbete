'use client';

export const Button = ({ buttonText, onClick, buttonColor, link }) => {

    const handleClick = () => {
        if (link) {
            window.location.href = link;
        } else {
            onClick();
        }
    };

    return (
        <button
            onClick={handleClick}
            style={{
                backgroundColor: buttonColor 
            }}
            className="text-white rounded-xl py-2 px-10 text-[16px] cursor-pointer"
        >
            {buttonText}
        </button>
    );
};
