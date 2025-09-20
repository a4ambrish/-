import { useState } from 'react'
import './App.css'

function App() {
  const [date, setDate] = useState('')
  const [minTemp, setMinTemp] = useState('')
  const [temperature, setTemperature] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleMinTempChange = (event) => {
    setMinTemp(event.target.value)
  }

  const handleDateChange = (event) => {
    setDate(event.target.value)
  }

  const handleSubmit = async (event) => {
    try {
      console.log(date, minTemp)
    } catch (erro) {
      console.error('Error')
    }
  }

  return (
    <div>
       <form>
        <input />
        <input />
        <button></button>
       </form> 
       <div>
        <p>Max Temperature:  F</p>
       </div>
    </div>
  )
}

export default App
