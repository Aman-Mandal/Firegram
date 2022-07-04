import Title from './Components/Title'
import React from 'react'
import classes from './App.module.css'
import UploadForm from './Components/UploadForm'

function App() {
  return (
    <div className={classes.app}>
      <Title />
      <UploadForm />
    </div>
  )
}

export default App
