import React from "react";
import { useParams } from "react-router-dom";

const RecipeInfo = () => {
    const [item, setItem] = React.useState(null);
    const [loading, setLoading] = React.useState(true);
    const { Mealid } = useParams();

    React.useEffect(() => {
        if (Mealid) {
            setLoading(true);
            fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${Mealid}`)
                .then((res) => res.json())
                .then((data) => {
                    setItem(data.meals[0]);
                    setLoading(false);
                })
                .catch((error) => {
                    console.error("Error fetching recipe:", error);
                    setLoading(false);
                });
        }
    }, [Mealid]);

    if (loading) {
        return <box>
            {"Loading..."}
        </box>;
    }

    if (!item) {
        return <p>No recipe found.</p>;
    }

    return (
        <div className="container">
        <div className="content">
            <img src={item.strMealThumb} alt={item.strMeal} />
            <div className="word">

                <h1>{item.strMeal}</h1>
                <h3>{item.strCategory}</h3>
                <h3>{item.strArea}</h3>
                <h3>Ingredients</h3>
                {
                    Object.keys(item).map((key) => {
                        if (key.includes("Ingredient") && item[key]) {
                            const index = key.slice(13); // Gets the number after "strIngredient"
                            const measure = item[`strMeasure${index}`];
                            return (
                                <div key={key}>
                                    {item[key]} : {measure}
                                </div>
                                );
                            }
                        return null;
                    })
                }
                <h3>Instructions</h3>
                    <p>{item.strInstructions}</p>
                </div>
            </div>
        </div>
    );
};

export default RecipeInfo;
