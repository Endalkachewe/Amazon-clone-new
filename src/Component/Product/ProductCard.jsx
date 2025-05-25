import React from 'react'
import Rating from '@mui/material/Rating'
import CurrencyFormat from '../CurrencyFormat/CurrencyFormat'
import classes from './product.module.css'
import { Link } from 'react-router-dom'
function ProductCard({ products }) {
    const {image,title,id,rating,price}=products
  return (
    <div className={`${classes.card_container}`}>
      <Link to={`/products/${id}`}>
              <img src={image} alt="" />
          </Link>
          <div>
              <h3>{ title}</h3>
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
              <button className={classes.button}>
                  add cart
              </button>
          </div>
    </div>
  )
}

export default ProductCard
