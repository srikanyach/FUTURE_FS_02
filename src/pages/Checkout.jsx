import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addOrder } from '../store/slices/ordersSlice'
import { clear } from '../store/slices/cartSlice'
import { useNavigate } from 'react-router-dom'

export default function Checkout(){
  const items = useSelector(s => Object.values(s.cart.items))
  const total = items.reduce((s,i)=> s + i.qty * i.price, 0)
  const user = useSelector(s => s.user.name)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [form, setForm] = useState({ name: user || '', email: '', address: '' })
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(null)

  const submit = (e) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.address) return setError('Please complete all fields')
    if (!items.length) return setError('Cart is empty')

    const order = { id: 'ord_' + Date.now(), items: Object.fromEntries(items.map(i=>[i.id,i])), total, date: new Date().toISOString(), info: form }
    dispatch(addOrder(order))
    dispatch(clear())
    setSuccess(order.id)
    setError('')
    setTimeout(() => navigate('/orders'), 1000)
  }

  if (success) return (
    <div className="container mt-5">
      <h4>Order placed</h4>
      <p>Your order <strong>{success}</strong> was simulated. Redirecting to Orders...</p>
    </div>
  )

  return (
    <div className="row">
      <div className="col-md-7">
        <h3>Checkout</h3>
        {error && <div className="alert alert-danger">{error}</div>}
        <form onSubmit={submit} className="mt-3">
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input className="form-control" value={form.name} onChange={e=>setForm({...form, name: e.target.value})} />
          </div>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input type="email" className="form-control" value={form.email} onChange={e=>setForm({...form, email: e.target.value})} />
          </div>
          <div className="mb-3">
            <label className="form-label">Address</label>
            <textarea className="form-control" value={form.address} onChange={e=>setForm({...form, address: e.target.value})} />
          </div>
          <button className="btn btn-primary">Place Order</button>
        </form>
      </div>

      <div className="col-md-5">
        <div className="card p-3">
          <h5>Summary</h5>
          <div className="d-flex justify-content-between"><small>Items</small><strong>{items.length}</strong></div>
          <div className="d-flex justify-content-between"><small>Total</small><strong>₹{total.toFixed(2)}</strong></div>
        </div>
      </div>
    </div>
  )
}
