
import { useParams, Link } from "react-router-dom";

export default function Burger({ burgers }) {

    const { name } = useParams();
    const burger = burgers.find((i) => i.name === decodeURIComponent(name));

    if (!burger) return <p>Burger not found.</p>

    return (
        <div className="w-full  flex flex-col gap-2 ">
            <div className="grid grid-cols-3 h-12 items-center bg-gray-100 border-b border-gray-300 ">
                <Link to="/" className="text-blue-500 hover:underline ml-3">
                    ← Back to menu
                </Link>

                <h1 className="text-lg font-medium justify-self-center whitespace-nowrap">{burger.name}</h1>

            </div>
            <div className="w-[90%] md:w-[80%] lg:w-[60%] flex flex-col gap-4 self-center-safe">
                <div className="w-full">
                    <img className="rounded-[2%] object-cover"
                        src={burger.info.img}
                        alt="Big Burger"
                    />
                </div>

                <div className="w-full max-w-xl flex justify-between gap-4 ">
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
                <div className="flex flex-col gap-3  w-150">
                    <hr className="text-gray-300" />

                    <div className="text-sm">
                        {burger.description}
                    </div>

                    {burger.tags && burger.tags.length > 0 && (
                        <div>
                            <p className="text-xs text-gray-400 font-medium">Special ingredients</p>
                            <span className="text-sm">
                                {burger.tags
                                    .map((item) => item.charAt(0).toUpperCase() + item.slice(1))
                                    .join(", ")}
                            </span>
                        </div>
                    )}

                    <div className="mb-5">
                        <p className="text-xs text-gray-400 font-medium mb-1">Allergens</p>
                        <div className="bg-orange-100 pl-2 p-1 rounded-md text-sm font-normal">
                            {burger.info.allergens_contained_in && burger.info.allergens_contained_in.length > 0 ? burger.info.allergens_contained_in.join(", ") : "Has no allergens"}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}