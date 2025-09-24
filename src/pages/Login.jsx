import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { login } from '../store/slices/userSlice'

export default function Login(){
  const [name, setName] = useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const submit = (e) => {
    e.preventDefault()
    if (!name.trim()) return
    dispatch(login(name.trim()))
    navigate('/')
  }

  return (
    <div className="row justify-content-center">
      <div className="col-md-6">
        <h3>Login (mock)</h3>
        <form onSubmit={submit} className="mt-3">
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input className="form-control" value={name} onChange={e=>setName(e.target.value)} />
          </div>
          <button className="btn btn-primary">Login</button>
        </form>
      </div>
    </div>
  )
}
