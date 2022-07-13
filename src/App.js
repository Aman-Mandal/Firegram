import Title from './Components/Title'
import React from 'react'
import classes from './App.module.css'
import UploadForm from './Components/UploadForm'
import ImageGrid from './Components/ImageGrid'

function App() {
  return (
    <div className={classes.app}>
      <Title />
      <UploadForm />
      <ImageGrid />
    </div>
  )
}

export default App
