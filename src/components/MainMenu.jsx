import { Link } from "react-router-dom";

//TODO
// propertys von components Burger und Drink richtig übergeben.

export default function MainMenu({ name, address, burgers, drinks }) {
    return (
        <div className="flex flex-col gap-2">


            <div className="flex flex-col w-[90%]  md:w-[80%] lg:w-[60%]  gap-4 self-center-safe">
                <div>
                    <h1 className="font-bold text-2xl">{name}</h1>
                    <p className="pt-1">
                        {address.street}, {address.city}, {address.country.name}
                    </p>
                </div>


                <h2 className="font-bold text-xl">Burgers</h2>

                {burgers.map((i) => (
                    <Link
                        key={i.name}
                        to={`/burger/${encodeURIComponent(i.name)}`}
                        className="block rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300"
                    >
                        <div className="relative w-full ">
                            <img src={i.info.img} alt={i.name} className="rounded-[2%] object-cover w-full h-56" />

                            <div className="absolute bottom-2 right-2 bg-sky-400 bg-opacity-70 text-white text-sm font-semibold px-2 py-1 rounded-lg">
                                <span className="p-1">{i.price_usd} USD</span>
                            </div>
                        </div>
                        <div className=" flex flex-row items-center justify-between p-2">
                            <h3 className="font-semibold text-base">{i.name}</h3>
                            {i.weight_grams && (<p className="text-gray-500 text-sm">{i.weight_grams} g</p>
                            )}
                        </div>
                    </Link>
                ))}
            </div>

            <div className="flex flex-col  w-[90%]  md:w-[80%] lg:w-[60%]  gap-4 self-center-safe mt-8 m-10">

                <h2 className="font-bold text-xl">Drinks</h2>

                <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
                    {drinks.map((i) => (
                        <Link
                            key={i.name}
                            to={`/drink/${encodeURIComponent(i.name)}`}
                            className="flex-shrink-0 w-32">

                            <div className="w-full max-w-md"><img
                                className="rounded-xl object-cover w-full h-28"
                                src={i.img} alt={i.name} />
                                <h3 className="pt-2">{i.name}</h3>
                            </div>
                        </Link>

                    ))}
                </div>


            </div>





        </div>
    );

}