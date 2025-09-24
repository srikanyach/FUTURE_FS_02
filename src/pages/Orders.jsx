import React from 'react'
import { useSelector } from 'react-redux'

export default function Orders(){
  const orders = useSelector(s => s.orders)

  if (!orders.length) return (<div><h4>Orders</h4><p className="text-muted">No orders yet.</p></div>)

  return (
    <div>
      <h4>Orders</h4>
      <div className="list-group mt-3">
        {orders.map(o => (
          <div key={o.id} className="list-group-item">
            <div className="d-flex justify-content-between">
              <div>
                <div className="fw-bold">Order {o.id}</div>
                <div className="text-muted small">{new Date(o.date).toLocaleString()}</div>
              </div>
              <div className="text-end">
                <div className="fw-bold">₹{o.total.toFixed(2)}</div>
                <div className="small text-muted">{Object.values(o.items).reduce((s,i)=> s + i.qty, 0)} items</div>
              </div>
            </div>
            <div className="mt-2">
              <details>
                <summary>Items</summary>
                <ul>
                  {Object.values(o.items).map(it => (
                    <li key={it.id}>{it.qty} × {it.title} — ₹{(it.price*it.qty).toFixed(2)}</li>
                  ))}
                </ul>
              </details>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
