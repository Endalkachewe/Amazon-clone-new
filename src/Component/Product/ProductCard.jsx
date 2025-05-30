import React, { useContext } from 'react'
import Rating from '@mui/material/Rating'
import CurrencyFormat from '../CurrencyFormat/CurrencyFormat'
import classes from './product.module.css'
import { Link } from 'react-router-dom'
import { Type } from '../../Utility/action.type'
import { DataContext } from '../DataProvider/DataProvider'


function ProductCard({ product, flex,renderDescription,renderAdd }) {
  const { image, title, id, rating, price, description } = product
  const [state, dispatch] = useContext(DataContext)
  

  console.log(state);
  const addToCart = () => {
    dispatch({
      type: Type.ADD_TO_BASKET,
      item: { image, title, id, rating, price, description } 
    });
  };

  return (
    <div className={`${classes.card_container} ${flex?classes.product_flexed:''}`}>
      <Link to={`/products/${id}`}>
              <img src={image} alt="" />
          </Link>
          <div>
        <h3>{title}</h3>
      {renderDescription && <div style={{maxWidth:'750px'}}>{description}</div> }
              <div className={classes.rating}>
                  {/* rating */}
                  <Rating value={rating.rate} precision={0.1} />
                  {/* count */}
                  <small>{rating.count}</small>

                  {/* price */}
              </div>
              <div>
                  {/* pricing */}
                  <CurrencyFormat amount={price}/>
              </div>
              {renderAdd &&<button className={classes.button} onClick={addToCart}>
                  Add to cart
              </button> }
              
          </div>
    </div>
  )
}

export default ProductCard
