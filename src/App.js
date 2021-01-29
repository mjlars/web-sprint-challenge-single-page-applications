import React, {useEffect, useState} from "react";
import Form from "./components/Form"
import Home from "./components/Home"
import * as yup from "yup"
import schema from "./Schema/formSchema"
import axios from "axios"
import {Switch, Link, Route} from 'react-router-dom'
import Order from "./components/Order"


const initialFormValues = {
  name: '',
  size: '',
  sauce: '',
  pepperoni: false,
  sausage: false,
  canadianBacon: false,
  italianSausage: false,
  grilledChicken: false,
  onions: false,
  greenPepper: false,
  dicedTomatoes: false,
  blackOlives: false,
  roastedGarlic: false,
  artichokeHearts: false,
  threeCheese: false,
  pineapple: false,
  extraCheese: false,
  glutenFree: false,
  other: ''
}

const initialFormErrors = {
  size: '',
}

const initialPizza = []
const initialDisabled = true

const App = () => {
  const [pizza, setPizza] = useState(initialPizza)
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(initialDisabled)


  const inputChange = (piz, value) => {
    yup.reach(schema, piz).validate(value)
    .then(() => {
      setFormErrors({
        ...formErrors,
        [piz]: "",
      })
    })
    .catch((err) => {
      setFormErrors({
        ...formValues,
        [piz]: err.errors[0]
      })
    })
    setFormValues({
      ...formValues,
      [piz]: value
    })
  }

  const postNewPizza = newPizza=> {
    axios
      .post("https://reqres.in/api/users", newPizza)
      .then((res) => {
        setPizza([newPizza, ...pizza]);
        setFormValues(initialFormValues);
      })
      .catch((err) => {
      console.log(err)
    });
  }


  const formSubmit = () => {
    const newPizza = {
      name: formValues.name.trim(),
      size: formValues.size.trim(),
      sauce:formValues.sauce.trim(),
      other:formValues.other.trim(),
      toppings:["pepperoni", "sausage", "canadianBacon", "italianSausage", "grilledChicken", "onnions", "greenPepper", "dicedTomatos", "blackOlives", "roastedGarlic", "artichokeHearts", "threeCheese", "pineapple", "extraCheese"].filter((toppings) => formValues[toppings]),
    }

    postNewPizza(newPizza);
  }

  // setPizza(pizza.concat(newPizza));
  // setFormValues(initialFormValues);

    
  useEffect(() => {
    schema.isValid(formValues).then((valid) => {
      setDisabled(!valid)
    })
  }, [formValues])

  return (

    <div>
      <Switch>
        
        <Route path = "/pizza">
          <Form 
          change = {inputChange}
          values = {formValues}
          submit = {formSubmit}
          disabled = {disabled}
          errors = {formErrors}
          
          />
          {pizza.map(orders => {
            return <Order key = {orders.id} details = {orders}/>
          })}
    
        </Route>
        

        <Route path = "/">
          <Home />
        </Route>
    </Switch>
    </div>
  );
};
export default App;
