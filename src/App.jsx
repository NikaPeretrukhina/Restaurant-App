import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import MainMenu from "./components/MainMenu";
import Burger from "./components/Burger";
import Drink from "./components/Drink";



export default function App() {

    // useState nutzen für das fetch
    const [restaurant, setRestaurant] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch("/restaurant.json")
        .then((res) => {
            if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
            }
            return res.json();
        })
        .then(setRestaurant)
        .catch((err) => setError(err.message));
    }, []);

  if (error) return <p className="p-4 text-red-500">Fehler: {error}</p>;
  if (!restaurant) return <p className="p-4">Loading...</p>;

    return (
        <Router>
            <Routes>

                <Route
                    path="/"
                    element={
                        <MainMenu
                            name={restaurant.name}
                            address={restaurant.address}
                            burgers={restaurant.offered_burgers}
                            drinks={restaurant.offered_drinks}
                        />
                    }
                />
                <Route
                    path="/burger/:name"
                    element={<Burger burgers={restaurant.offered_burgers} />}
                />

                <Route
                    path="/drink/:name"
                    element={<Drink drinks={restaurant.offered_drinks} />}
                />

            </Routes>
        </Router>

    );
}