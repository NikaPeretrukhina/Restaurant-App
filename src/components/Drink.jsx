export default function Drink({ drink }){
    return (
        <div className=" w-full md:hidden flex flex-col gap-2">
            <div className="grid grid-cols-3 h-15 items-center bg-gray-100 border-b border-gray-300">
                <span className="ml-2">{"<Ahoi Drink!"}</span>
                <h1 className="text-lg font-medium justify-self-center-safe whitespace-nowrap">{drink.name}</h1>
            </div>

            <div className="w-[90%] flex flex-col gap-4 self-center-safe">
                <div className="w-full">
                    <img className="rounded-[2%] object-cover" 
                        src={drink.img} 
                        alt="Long island ice tea" 
                    />
                </div>
                
                <div className="flex flex-col items-left"> 
                    <span className="font-bold">{drink.price} USD</span>
                    <p className="text-xs text-gray-400 font-medium">Price</p>
                </div>
                    
                
                <div className="flex flex-col gap-3">
                    <hr className="text-gray-300"/>

                    <div className="text-sm">{drink.description}</div>
                    
                    <div >
                        <p className="text-xs text-gray-400 font-medium">Allergens</p>
                        <div className="bg-orange-100 pl-2 p-1 rounded-md text-sm font-normal">{drink.allergens ? drink.allergens?.join(", ") : "No allergens"}</div>
                    </div>
                </div>
            </div>
        </div>
    )

}