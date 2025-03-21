'use client'
export const Category = ({ onSelectCategory }) => {
    const categories = ['Drink', 'Vin', 'Öl', 'Cider', 'Shots', 'Alkoholfritt'];

    return(
        <section className="bg-[#F0F0F0] w-[80%] m-auto sm:w-[100%] sm:pb-5 rounded-lg md:rounded-none">
            <div className="text-[24px] text-[#5B3636] font-semibold font-primary flex flex-col items-center sm:flex sm:flex-row sm:justify-around">
                {categories.map((category) => (
                    <h2
                        key={category}
                        onClick={() => onSelectCategory(category)}
                        className="border-b-2 border-[#5B3636] sm:hover:border-b-2 sm:border-b-0  px-5 pt-4 cursor-pointer"
                    >
                        {category}
                    </h2>
                ))}
            </div>
        </section>
    )
}