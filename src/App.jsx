import React from 'react'
import Weather from './components/Weather'

const App = () => {
  return (
    <div className='app'>

      {/* mounted weather comp to app component */}
      <Weather/>
    </div>
  )
}

export default App