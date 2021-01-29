import * as yup from "yup";
import { boolean } from "yup/lib/locale";

export default yup.object().shape({
    name: yup.string().required("Please enter a name for your order").min(2, "Name must be at least 2 characters long"),
    size: yup.string().required().oneOf(["small", "medium", "large"], "Please pick a size for your pizza"),
    sauce: yup.string().oneOf( ["Original Red", "Garlic Ranch", "BBQ Sauce", "Spinach Alfredo"],"Sauce is required"),
    pepperoni: yup.boolean(),
    sausage: yup.boolean(),
    canadianBacon: yup.boolean(),
    italianSausage: yup.boolean(),
    grilledChicken: yup.boolean(),
    onions: yup.boolean(),
    greenPepper: yup.boolean(),
    dicedTomatoes: yup.boolean(),
    blackOlives: yup.boolean(),
    roastedGarlic: yup.boolean(),
    artichokeHearts: yup.boolean(),
    threeCheese: yup.boolean(),
    pineapple: yup.boolean(),
    extraCheese: yup.boolean(),
    glutenFree: yup.boolean(),
    other: yup.string()
});