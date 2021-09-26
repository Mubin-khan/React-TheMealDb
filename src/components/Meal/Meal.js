import React from 'react';
import { Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import './Meal.css';

const Meal = (props) => {
    const {idMeal,strMeal, strInstructions,strMealThumb} = props.meal;
    return (
        <div>
                <Col>
                    <Card>
                        <Card.Img variant="top" src={strMealThumb} />
                        <Card.Body>
                        <Card.Title>{strMeal}</Card.Title>
                        <Card.Text>
                           {strInstructions.slice(0,250)}
                        </Card.Text>
                        <button style={{color:"white", padding:"3px 18px", backgroundColor:"blue", border:"0px", borderRadius:"5px"}}
                        onClick={()=> props.handleClick({idMeal})}
                        >Order</button>
                        </Card.Body>
                    </Card>
                </Col>
        </div>
    );
};

export default Meal;