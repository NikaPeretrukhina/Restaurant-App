import { useParams, Link } from "react-router-dom";

export default function Drink({drinks}){
   
    const {name} = useParams();
    const drink = drinks.find((i)=>i.name === decodeURIComponent(name));

    if(!drink) return <p>Drink not found.</p>

    return (
        <div className=" w-full  flex flex-col gap-2">
            <div className="grid grid-cols-3 h-12  items-center bg-gray-100 border-b border-gray-300">
                <Link to="/" className="text-blue-500 hover:underline ml-3">
                    ← Back to menu
                </Link>

                <h1 className="text-lg font-medium justify-self-center whitespace-nowrap">{drink.name}</h1>
            </div>

            <div className="w-[90%]  md:w-[80%] lg:w-[60%] flex flex-col gap-4 self-center-safe">
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
                        <p className="text-xs text-gray-400 font-medium mb-1">Allergens</p>
                        <div className="bg-orange-100 pl-2 p-1 rounded-md text-sm font-normal">{drink. allergens && drink.allergens.length > 0 ? drink.allergens.join(", ") : "Has no allergens"}</div>
                    </div>
                </div>
            </div>
        </div>
    )

}