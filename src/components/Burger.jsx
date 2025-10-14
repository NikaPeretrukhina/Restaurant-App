
export default function Burger({ burger }) {
    
    // // mock burger
    // burger = {
    //     name: "Big Burger",
    //     description: "This is a very tasty burger",
    //     weight_grams: 180,
    //     price_usd: 9.99,
    //     info: {
    //         in_stock: true,
    //         vegetarian: false,
    //         allergens_contained_in: ["rr", "xx", "mm", "bb"],
    //         availableSince: 1605394800000,
    //         available_until: "2021-12-12T00:00:00Z",
    //         img: "https://ahoi-production-bucket-public.s3.eu-central-1.amazonaws.com/challenge/assets/burger_big_burger.png"
    //     },
    //     tags: ["bacon", "tomatoes"]
    // }

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
                    <hr className="text-gray-300"/>

                    <div className="text-sm">{burger.description}</div>
                    <div>
                        <p className="text-xs text-gray-400 font-medium">Special ingrediants</p>
                        <span className="text-sm">{burger.tags.map((item) => item.charAt(0).toUpperCase() + item.slice(1)).join(", ")}</span>
                    </div>
                    <div >
                        <p className="text-xs text-gray-400 font-medium">Allergens</p>
                        <div className="bg-orange-100 pl-2 p-1 rounded-md text-sm font-normal">{burger.info.allergens_contained_in.join(", ")}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}