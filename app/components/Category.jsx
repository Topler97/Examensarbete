
export const Category = () => {
    return(
        <section className="bg-[#F0F0F0] w-[80%] m-auto sm:w-[100%] sm:pb-5 rounded-lg md:rounded-none">
            <div className="text-[24px] text-[#5B3636] font-semibold font-primary flex flex-col items-center sm:flex sm:flex-row sm:justify-around">
                <h2 className="border-b-2 border-[#5B3636] sm:hover:border-b-2 sm:border-b-0  px-5 pt-4 cursor-pointer">Drinkar</h2>

                <h2 className="border-b-2 border-[#5B3636] sm:hover:border-b-2 sm:border-b-0  px-5 pt-4 cursor-pointer">Vin</h2>
                <h2 className="border-b-2 border-[#5B3636] sm:hover:border-b-2 sm:border-b-0  px-5 pt-4 cursor-pointer">Öl</h2>
                <h2 className="border-b-2 border-[#5B3636] sm:hover:border-b-2 sm:border-b-0  px-5 pt-4 cursor-pointer">Cider</h2>
                <h2 className="border-b-2 border-[#5B3636] sm:hover:border-b-2 sm:border-b-0  px-5 pt-4 cursor-pointer">Shots</h2>
                <h2 className="pt-4 pb-10 sm:pb-0 cursor-pointer sm:hover:border-b-2">Alkoholfritt</h2>
            </div>
        </section>
    )
}