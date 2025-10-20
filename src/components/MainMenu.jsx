import { Link } from "react-router-dom";

//TODO
// propertys von components Burger und Drink richtig übergeben.

export default function MainMenu({ name, address, burgers, drinks }) {
    return (
        <div>
            <h1>{name}</h1>
            <p>
                {address.street}, {address.city}, {address.country.name}
            </p>

            <h2>Burgers</h2>
            <div>
                {burgers.map((i) => (
                    <Link
                        key={i.name}
                        to={`/burger/${encodeURIComponent(i.name)}`}
                        className="p-1"
                    >
                        <img src={i.info.img} alt={i.name} className="p-1" />
                        <h3>{i.name}</h3>
                        <p>{i.weight_grams ? `${i.weight_grams} g` : ""}</p>
                        <span className="p-1">{i.price_usd} USD</span>
                    </Link>
                ))}
            </div>



            <h2>Drinks</h2>
            <div>
                {drinks.map((i) => (
                    <Link
                        key={i.name}
                        to={`/drink/${encodeURIComponent(i.name)}`}
                        className="p-1"
                    >
                        <img src={i.img} alt={i.name} className="p-1" />
                        <h3>{i.name}</h3>
                        <p>{i.volume_ml ? `${i.volume_ml} ml` : ""}</p>
                        <span className="p-1">{i.price_usd} USD</span>
                    </Link>
                ))}
            </div>





        </div>
    );
     //weiter eun css design erstellen
}