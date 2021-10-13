// import Button from '@restart/ui/esm/Button';
import React, { useEffect, useState } from 'react';
import { FormControl, InputGroup, Button, Row } from 'react-bootstrap';
import Meals from '../Meals/Meals';
//
import './SearchResturant.css'

const SearchResturant = () => {
    //useState korbo data load jonno
    const [searchText, setSearchText] = useState('');
    // for meal
    const [meals, setMeals] = useState([])

    useEffect(() => {
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;

        fetch(url)
            .then(res => res.json())
            .then(data => setMeals(data.meals))
    }, [searchText]);

    //search field er jonno
    const handleSearchField = event => {
        const searchTextValue = event.target.value;
        setSearchText(searchTextValue)
    }

    return (
        <div>
            <div className="container mt-5 mx-auto w-50">
                <InputGroup className="mb-3">
                    <FormControl
                        onChange={handleSearchField}
                        placeholder="Search Your Meal here"
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                    />
                    <Button variant="danger" id="button-addon2">
                        Button
                    </Button>
                </InputGroup>
            </div>

            {/* <div className="resturant-container mt-5 container">
               
            </div> */}
            <div className="container mt-5">
                <Row className=" resturant-container h-100">
                    {
                        meals.map(meal => <Meals
                            key={meal.idMeal}
                            meal={meal}
                        ></Meals>)
                    }

                </Row>
            </div>
        </div>

    );
};

export default SearchResturant;