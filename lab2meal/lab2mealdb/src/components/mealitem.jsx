import React from "react";
const MealItem=({data})=>{
    console.log(data);
    return(
        <>
            {
                (!data)?"not found":data.map(item=>{
                    return(
                        <div className="card" >
                            <img src={item.strMealThumb} alt="" />
                            <h1>{item.idMeal}</h1>
                            <h3>{item.strMeal}</h3>
                        </div>
                    )
                })
            }
            
        </>
    )
}
export default MealItem;