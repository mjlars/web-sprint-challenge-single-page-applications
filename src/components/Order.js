import React from 'react'
import {Route, Link, Switch} from "react-router-dom"


function Order(props) {
    const {details} = props;
    return (
        <div>
            <Link to = "/">Home</Link>
            <h2>{details.name}</h2>
            <h4>Size: {details.size}</h4>
            <h4>Sauce: {details.sauce}</h4>
            {
                !!details.toppings && !!details.toppings.length &&
                <div>Toppings: 
                    <ul>
                        {details.toppings.map((tops) => <li>{tops}</li>)}
                    </ul>
                </div>
            }
            
        </div>
    )
}

export default Order
