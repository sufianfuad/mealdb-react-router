import React from 'react';
import { Card, Col } from 'react-bootstrap';
// import { Card, Col, Row } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import './Meals.css'

const Meals = (props) => {
    const { mealId } = useParams()

    console.log(props.meal)
    const { strMeal, strInstructions, strMealThumb } = props.meal;

    return (
        <div>
            <Col>
                <Card className="container meal shadow-sm">
                    <div className="meal-info">
                        <Card.Img variant="top" src={strMealThumb} />
                    </div>
                    <Card.Body>
                        <Card.Title>{strMeal}</Card.Title>
                        <Card.Text>
                            {strInstructions.slice(0, 100)}
                        </Card.Text>
                    </Card.Body>

                    <div className="meal-buttons mt-3 mb-3">
                        <Link to={`/meals/${mealId}`}>Visit Me</Link>
                        <br />
                        <button
                            className="btn btn-danger mt-2"
                        >Show Details</button>
                    </div>

                </Card>
            </Col>
        </div>
    );
};

export default Meals;