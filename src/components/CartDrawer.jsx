import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { updateQty, remove, clear } from '../store/slices/cartSlice'

export default function CartDrawer(){
  const items = useSelector(s => Object.values(s.cart.items))
  const total = items.reduce((s,i)=> s + i.qty * i.price, 0)
  const dispatch = useDispatch()

  if (!items.length) return (
    <div className="card p-3"> <small className="text-muted">Cart is empty</small> </div>
  )

  return (
    <div className="card p-3">
      <h6>Cart</h6>
      {items.map(it => (
        <div key={it.id} className="d-flex justify-content-between align-items-center mb-2">
          <div>
            <div>{it.title}</div>
            <small className="text-muted">₹{it.price.toFixed(2)}</small>
          </div>
          <div className="d-flex align-items-center gap-2">
            <button className="btn btn-sm btn-outline-secondary" onClick={() => dispatch(updateQty({ id: it.id, qty: it.qty - 1 }))}>-</button>
            <span>{it.qty}</span>
            <button className="btn btn-sm btn-outline-secondary" onClick={() => dispatch(updateQty({ id: it.id, qty: it.qty + 1 }))}>+</button>
            <button className="btn btn-sm btn-outline-danger ms-2" onClick={() => dispatch(remove(it.id))}>x</button>
          </div>
        </div>
      ))}

      <hr />
      <div className="d-flex justify-content-between fw-bold"> <div>Total</div> <div>₹{total.toFixed(2)}</div> </div>
      <div className="d-flex gap-2 mt-3">
        <a href="/checkout" className="btn btn-success flex-fill">Checkout</a>
        <button className="btn btn-outline-danger" onClick={() => dispatch(clear())}>Clear</button>
      </div>
    </div>
  )
}
