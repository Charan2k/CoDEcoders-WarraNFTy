import React from 'react'
import Productcard from '../components/Productcard'
import Pagination from '../components/Pagination'
export default function Products() {
  return (
    <div   className="small-container">
        <div   className="row row-2">
          <h2>All Products</h2>
        </div>
        <div   className="row">
            <Productcard img="https://i.ibb.co/b7ZVzYr/product-2.jpg" name="Red Printed T-shirt" price="500.00" id={1234} />
            <Productcard img="https://i.ibb.co/b7ZVzYr/product-2.jpg" name="Red Printed T-shirt" price="500.00" id={1235} />
            <Productcard img="https://i.ibb.co/b7ZVzYr/product-2.jpg" name="Red Printed T-shirt" price="500.00" id={1236} />
            <Productcard img="https://i.ibb.co/b7ZVzYr/product-2.jpg" name="Red Printed T-shirt" price="500.00" id={1237} />
            <Productcard img="https://i.ibb.co/b7ZVzYr/product-2.jpg" name="Red Printed T-shirt" price="500.00" id={1238} />
            <Productcard img="https://i.ibb.co/b7ZVzYr/product-2.jpg" name="Red Printed T-shirt" price="500.00" id={1239} />
            <Productcard img="https://i.ibb.co/b7ZVzYr/product-2.jpg" name="Red Printed T-shirt" price="500.00" id={1241} />
            <Productcard img="https://i.ibb.co/b7ZVzYr/product-2.jpg" name="Red Printed T-shirt" price="500.00" id={1242} />
          <Pagination/>
        </div>
      </div>
  )
}
