import { Link, useLoaderData } from 'react-router-dom'
import './App.css'
import { useState } from 'react'
import CoffeeCard from './components/CoffeeCard'

function App() {
  const loadedCoffee = useLoaderData()
  console.log(loadedCoffee)
  const [coffees, setCoffees] = useState(loadedCoffee)

  return (
    <div className='m-20'>
      <div className='text-center text-2xl text-white font-semibold mb-10  bg-neutral-400'>
        <Link className='' to='/coffees'>Add coffee</Link>
        <Link className='ml-6' to='/'>Home page</Link>
      </div>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
        {
          coffees.map(coffee => <CoffeeCard key={coffee._id} coffees={coffees} setCoffees={setCoffees} coffee={coffee}></CoffeeCard>)
        }
      </div>
    </div>
  )
}

export default App
