"use client";
import { useRouter } from "next/navigation";

export const Button = ({ buttonText, onClick, buttonColor, link }) => {
    const router = useRouter();

    const handleClick = () => {
        if (link) {
            router.push(link); // Använd Next.js routing istället för window.location.href
        } else if (typeof onClick === "function") {
            onClick(); // Kontrollera om onClick är en funktion innan du anropar den
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
