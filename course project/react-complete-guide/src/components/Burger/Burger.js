import classes from './Burger.css';
import React from 'react'; 
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
    let transformedIngredients = Object.keys(props.ingredients) // Crée un array de key à partir de l'objet key value pair ingredients
    .map(igkey => {
        // console.log('array of key', Array(props.ingredients[igkey]));
        return [...Array(props.ingredients[igkey])] // [,] pour chaque key, il crée une structure d'array (si 2 salad => il créera un array avec 2 items)
        .map((_, i) => {
            // console.log('key', igkey+i);
            return <BurgerIngredient key={igkey + i} type={igkey} />; // return le composant Burger ingredient
        })
    })
    .reduce((arr, el) => {
        // console.log('arr', arr);
        // console.log('el', el);
        return arr.concat(el)
    }, []);

    if (transformedIngredients.length === 0) {
        transformedIngredients = <p>please start adding ingredients!</p>
    }
    // console.log(transformedIngredients);
     return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
                {transformedIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
     );
 }

 export default burger;