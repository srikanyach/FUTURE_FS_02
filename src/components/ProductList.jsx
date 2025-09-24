import React, { useMemo, useState } from 'react'
import ProductCard from './ProductCard'
import { PRODUCTS } from '../data/products'

export default function ProductList() {
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('All')

  const cats = useMemo(() => ['All', ...new Set(PRODUCTS.map(p => p.category))], [])


  const filtered = PRODUCTS.filter(p =>
    (category === 'All' || p.category === category) &&
    (p.title.toLowerCase().includes(search.toLowerCase()) ||
     p.desc.toLowerCase().includes(search.toLowerCase()))
  )

  return (
    <div className="container py-4">
    
      <div className="row mb-3">
        <div className="col-md-6 mb-2">
          <input
            className="form-control"
            placeholder="Search products..."
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </div>
        <div className="col-md-3 mb-2">
          <select
            className="form-select"
            value={category}
            onChange={e => setCategory(e.target.value)}
          >
            {cats.map(c => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </div>
      </div>

     
      <div className="row g-3">
        {filtered.length > 0 ? (
          filtered.map(p => (
            <div className="col-12 col-sm-6 col-lg-4" key={p.id}>
              <ProductCard product={p} />
            </div>
          ))
        ) : (
          <p className="text-center text-muted">No products found.</p>
        )}
      </div>
    </div>
  )
}
