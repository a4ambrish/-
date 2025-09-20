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
    event.preventDefault()
    setLoading(true)
    try {
      console.log(date, minTemp)
    } catch (error) {
      console.error('Error fetching temperature:', error)
      setTemperature(null)
    }
    setLoading(false)
  }

  return (
    <div className='weather-container'>
       <form onSubmit={handleSubmit} className='weather-form'>
        <input 
          type='text'
          value={date}
          onChange={handleDateChange}
          placeholder='Enter date (e.g., 2027-01-25)'
          className='weather-input'
        />
        <input 
          type='number'
          value={minTemp}
          onChange={handleMinTempChange}
          placeholder='Enter min temperature (F)'
          className='weather-input'
        />
        <button type='submit' className='weather-submit' disabled={loading}>
          {loading ? 'Loadin...' : 'Get Temperature'}
        </button>
       </form> 
          <div className='weather-response-card'>
            <p>Max Temperature: F</p>
          </div>
    </div>
  )
}

export default App
