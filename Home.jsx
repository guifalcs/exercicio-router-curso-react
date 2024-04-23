import React from 'react'
import { useFetch } from '../hooks/useFetch'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import './Home.css'
import SearchForm from '../components/SearchForm'

const url = 'http://localhost:3001/products'


const Home = () => {

  const {data: items, loading, error} = useFetch(url)

  return (
    <div>
        <h1>Home</h1>
        <Navbar />
        <SearchForm />
        {error && <p>{error}</p>}
        <ul className="products">
          {items && items.map(item=>(
            <li key={item.id}>
              <h2>{item.name}</h2>
              <p>R$: {item.price}</p>
              <Link to={`/products/${item.id}/info`}>Mais informações</Link>
            </li>
          ))}
        </ul>
    </div>
  )
}

export default Home