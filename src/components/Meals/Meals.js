import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Meal from '../Meal/Meal';
import './Meal.css';

const Meals = (props) => {
    const [meals, setMeals] = useState([]);
    const [selectItem, setSelectItem] = useState(null);
    const [url, setUrl] = useState(null)

    useEffect(()=>{
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
        .then(res => res.json())
        .then(data => setMeals(data.meals))
    },[])

    useEffect(()=>{
        if(props.dproducts){
            const url = 'https://www.themealdb.com/api/json/v1/1/search.php?s='+props.dproducts;
            fetch(url)
            .then(res => res.json())
            .then(data => setMeals(data.meals))
        }
    },[props.dproducts]);

    const handleClick = (id) =>{
        const item =  meals.find(elm => elm.idMeal === id.idMeal)
        setSelectItem(item);
    }

    return ( 
        <div>
           <div className="displaysec">
                <div className="right-side">
                    <Row xs={1} md={2} className="g-4 container mx-auto">
                          {
                              meals?.map(meal => <Meal 
                                  handleClick={handleClick}
                                      key={meal.idMeal}     
                                      meal={meal}
                                     ></Meal>)
                            }
                    </Row>
                </div>  
                <div className="left-side">
                {
                    selectItem && <Meal key={selectItem.idMeal}
                    meal={selectItem}
                    ></Meal>
                }
            </div> 
            </div>          
        </div>
        
    );
};

export default Meals;