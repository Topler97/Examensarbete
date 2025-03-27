"use client";
import { useRouter } from "next/navigation";

export const Button = ({ buttonText, onClick, buttonColor, link }) => {
    const router = useRouter();

    const handleClick = () => {
        if (link) {
            router.push(link); // Använd Next.js routing istället för window.location.href
        } else if (onClick) {
            onClick();
        }
    };

    return (
        <button
            onClick={handleClick}
            style={{
                backgroundColor: buttonColor,
            }}
            className="text-white rounded-xl py-2 px-10 text-[16px] cursor-pointer"
        >
            {buttonText}
        </button>
    );
};

