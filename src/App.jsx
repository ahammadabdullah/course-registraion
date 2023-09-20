/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-target-blank */
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css'
import Cards from './Components/Cards/Cards'
import Cart from './Components/Cart/Cart'



function App() {
  const [selectedCourse, setSelectedCourse] = useState([])
  const [creditHour, setCreditHour] = useState(0)
  const [totalPrice, setTotalPrice] = useState(0)
  const [remaining, setRemaining] = useState(20)

  const HandleSelection = (course) => {
    const newListedCourse = [...selectedCourse, course]
    const isListed = selectedCourse.find(item => item.id == course.id)
    if(isListed){
      toast.error("Course Already Added")
      return 
    }
    let count = course.credit_hours
    let tPrice = course.price
    selectedCourse.forEach(item => {
      count += item.credit_hours
      tPrice += item.price
    })
    const creditLimit = 20
    const totalRemaining = creditLimit - count
    if(count> 20){
      toast.error("credit limit crossed")
      return 
    }
    setRemaining(totalRemaining)
    setCreditHour(count)
    setTotalPrice(tPrice)
    setSelectedCourse(newListedCourse)
    
  }

  return (
    <div className='mt-10 max-w-7xl mx-auto'>
      <ToastContainer /> 
      <h3 className='mb-8 text-center font-bold text-3xl'>Course Registration</h3>
      <div className='flex gap-6'>
      <Cards HandleSelection={HandleSelection}></Cards>
      <Cart selectedCourse={selectedCourse} creditHour={creditHour} totalPrice={totalPrice}remaining={remaining}></Cart>
      </div>
    </div>
  )
}

export default App
