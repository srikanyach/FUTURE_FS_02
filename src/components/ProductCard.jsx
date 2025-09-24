import React from 'react'
import { useDispatch } from 'react-redux'
import { add } from '../store/slices/cartSlice'


export default function ProductCard({ product }) {
  const dispatch = useDispatch()

  return (
    <div className="card h-100 shadow-sm">
      {/* Product Image */}
      <img
        src={product.image}
        alt={product.title}
        className="card-img-top"
        style={{ height: '180px', objectFit: 'cover' }}
      />

      {/* Product Details */}
      <div className="card-body d-flex flex-column justify-content-between">
        <div>
          <h5 className="card-title">{product.title}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{product.category}</h6>
          <p className="card-text small">{product.desc}</p>
        </div>

        {/* Price + Add button */}
        <div className="d-flex justify-content-between align-items-center mt-3">
          <span className="fw-bold text-primary">₹{product.price.toFixed(2)}</span>
          <button
            onClick={() => dispatch(add(product))}
            className="btn btn-sm btn-outline-primary"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  )
}
