
export default function Burger({ burger }) {
    return (
        <div className="w-full md:hidden flex flex-col gap-2">
            <div className="grid grid-cols-3 h-12 items-center bg-gray-100 border-b border-gray-300">
                <span className="ml-2">{"<Ahoi Burger!"}</span>
                <h1 className="text-lg font-medium justify-self-center-safe">{burger.name}</h1>
                <span></span>
            </div>
            <div className="w-[90%] flex flex-col gap-4 self-center-safe">
                <div className="w-full">
                    <img className="rounded-[2%] object-cover"
                        src={burger.info.img}
                        alt="Big Burger"
                    />
                </div>
                <div className="flex justify-between">
                    <div className="flex flex-col items-center">
                        <span className="font-bold">{burger.price_usd} USD</span>
                        <p className="text-xs text-gray-400 font-medium">Price</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <span className="font-bold"> {burger.weight_grams} g</span>
                        <p className="text-xs text-gray-400 font-medium">Weight</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <span className="font-bold">{burger.info.vegetarian ? "YES" : "NO"}</span>
                        <p className="text-xs text-gray-400 font-medium">Vegetarian</p>
                    </div>
                </div>
                <div className="flex flex-col gap-3">
                    <hr className="text-gray-300" />

                    <div className="text-sm">
                        {burger.description}
                    </div>

                    <div>
                        <p className="text-xs text-gray-400 font-medium">Special ingredients</p>
                        <span className="text-sm">
                            {burger.tags && burger.tags.length > 0 ? burger.tags.map((item) => item.charAt(0).toUpperCase() + item.slice(1)).join(", ") : "No tags"}
                        </span>
                    </div>

                    <div>
                        <p className="text-xs text-gray-400 font-medium">Allergens</p>
                        <div className="bg-orange-100 pl-2 p-1 rounded-md text-sm font-normal">
                            {burger.info ? (burger.info.allergens_contained_in || []).join(", ") : "No allergens"}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}