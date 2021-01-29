import React from 'react'
import {useParams, Link, Route} from 'react-router-dom'

function Form(props) {

    const onSubmit = evt => {
        evt.preventDefault()
        submit()
      }

    const {
        values,
        submit,
        change,
        disabled,
        errors,
      } = props
      const onChange = evt => {
        const { name, value, type, checked, } = evt.target;
        const valueToUse = type === 'checkbox' ? checked : value;
        change(name, valueToUse)
      }
    return (
        <div onSubmit ={onSubmit}>
            <Link to = "/">Home</Link>
            <Link to = "/order">See Your Order</Link>
            <form>
                <label>
                    <input
                    id = "nameBox"
                    onChange = {onChange}
                    name = "name"
                    type = "text"
                    value = {values.name}
                    placeholder = "Name..."
                    /> 
                </label>
                <div>
                    <h3>Choice of Size</h3>
                    <p>Required</p>
                </div>
                <label>
                <select
                onChange = {onChange}
                value = {values.size}
                name = "size">
                    <option value ="">-Select a size-</option>
                    <option value = "small">Small - 12in</option>
                    <option value = "medium">Medium - 16in</option>
                    <option value = "large">Large - 20in</option>
                </select>
                </label>
                <div>
                    <h3>Choice of Sauce</h3>
                    <p>Required</p>
                </div>
                <label>
                    <input 
                    type = "radio"
                    name = "sauce"
                    value = "Original Red"
                    onChange = {onChange}
                    checked = {values.sauce === "Original Red"}
                    >
                    </input>Original Red
                </label>
                <label>
                    <input 
                    type = "radio"
                    name = "sauce"
                    value = "Garlic Ranch"
                    onChange = {onChange}
                    checked = {values.sauce === "Garlic Ranch"}
                    >
                    </input>Garlic Ranch
                </label>
                <label>
                    <input 
                    type = "radio"
                    name = "sauce"
                    value =  "BBQ Sauce"
                    onChange = {onChange}
                    checked = {values.sauce === "BBQ Sauce"}
                    >
                    </input>BBQ Sauce
                </label>
                <label>
                    <input 
                    type = "radio"
                    name = "sauce"
                    value = "Spinach Alfredo"
                    onChange = {onChange}
                    checked = {values.sauce === "Spinach Alfredo"}
                    >
                    </input>Spinach Alfredo
                </label>
                <div>
                    <h3>Add Toppings</h3>
                    <p>Choose up to 10!</p>
                </div>
                <label>
                    <input 
                    type = "checkbox"
                    className = "check"
                    name = "pepperoni"
                    checked = {values.pepperoni}
                    value = "pepperoni"
                    onChange = {onChange}>
                    </input>Pepperoni
                </label>
                <label>
                    <input 
                    type = "checkbox"
                    className = "check"
                    name = "sausage"
                    checked = {values.sausage}
                    value = "sausage"
                    onChange = {onChange}>
                    </input> Sausage
                </label>
                <label>
                    <input 

                    type = "checkbox"
                    className = "check"
                    name = "canadianBacon"
                    checked = {values.canadianBacon}
                    value = "canadian bacon"
                    onChange = {onChange}>
                    </input> Canadian Bacon
                </label>
                <label>
                    <input 
                    type = "checkbox"
                    className = "check"
                    name = "italianSausage"
                    checked = {values.italianSausage}
                    value = "italian sausage"
                    onChange = {onChange}>
                    </input> Spicy Italian Sausage
                </label>
                <label>
                    <input 
                    type = "checkbox"
                    className = "check"
                    name = "grilledChicken"
                    checked = {values.grilledChicken}
                    value = "grilled chicken"
                    onChange = {onChange}>
                    </input> Grilled Chicken
                </label>
                <label>
                    <input 
                    type = "checkbox"
                    className = "check"
                    name = "onions"
                    checked = {values.onions}
                    value = "onions"
                    onChange = {onChange}>
                    </input> Onions
                </label>
                <label>
                    <input 
                    type = "checkbox"
                    className = "check"
                    name = "greenPepper"
                    checked = {values.greenPepper}
                    value = "green pepper"
                    onChange = {onChange}>
                    </input> Green Pepper
                </label>
                <label>
                    <input 
                    type = "checkbox"
                    className = "check"
                    name = "dicedTomatoes"
                    checked = {values.dicedTomatoes}
                    value = "diced tomatoes"
                    onChange = {onChange}>
                    </input> Diced Tomatoes
                </label>
                <label>
                    <input 
                    type = "checkbox"
                    className = "check"
                    name = "blackOlives"
                    checked = {values.blackOlives}
                    value = "black olives"
                    onChange = {onChange}>
                    </input> Black Olives
                </label>
                <label>
                    <input 
                    type = "checkbox"
                    className = "check"
                    name = "roastedGarlic"
                    checked = {values.roastedGarlic}
                    value = "roasted garlic"
                    onChange = {onChange}>
                    </input> Roasted Garlic
                </label>
                <label>
                    <input 
                    type = "checkbox"
                    className = "check"
                    name = "artichokeHearts"
                    checked = {values.artichokeHearts}
                    value = "artichoke hearts"
                    onChange = {onChange}>
                    </input> Artichoke Hearts
                </label>
                <label>
                    <input 
                    type = "checkbox"
                    className = "check"
                    name = "threeCheese"
                    checked = {values.threeCheese}
                    value = "three cheese"
                    onChange = {onChange}>
                    </input> Three Cheese
                </label>
                <label>
                    <input 
                    type = "checkbox"
                    className = "check"
                    name = "pineapple"
                    checked = {values.pineapple}
                    value = "pneapple"
                    onChange = {onChange}>
                    </input> Pineapple
                </label>
                <label>
                    <input 
                    type = "checkbox"
                    className = "check"
                    name = "extraCheese"
                    checked = {values.extraCheese}
                    value = "extra cheese"
                    onChange = {onChange}>
                    </input> Extra Cheese
                </label>
                <div>
                    <h3>Choice of Substitute</h3>
                    <p>$1.00</p>
                </div>
                <label>
                    <input 
                    type = "checkbox"
                    className = "check"
                    name = "glutenFree"
                    checked = {values.glutenFree}
                    value = "gluten free"
                    onChange = {onChange}>
                    </input> Gluten Free
                </label>

                <div>
                    <h3>Special Instruction</h3>
                </div>
                <label>
                    <input 
                    type = "text"
                    name = "other"
                    placeholder = "Anything else?"
                    
                    onChange = {onChange}/>
                    
                </label>
                <div>
                    <div>{errors.name}</div>
                    <div>{errors.size}</div>
                    <div>{errors.sauce}</div>
                </div>
                <button disabled = {disabled} id = "submitButton">Submit</button>
            </form>
        </div>
    )
}

export default Form
