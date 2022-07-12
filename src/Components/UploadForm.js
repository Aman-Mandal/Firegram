import React from 'react'
import { useState } from 'react'
import ProgressBar from './ProgressBar'
import classes from './UploadForm.module.css'

const UploadForm = () => {
  const [file, setFile] = useState(null)
  const [error, setError] = useState(null)

  const fileTypes = ['image/png', 'image/jpeg', 'image/jpg']

  const fileUploadHandler = event => {
    // selecting the first file
    let selectedFile = event.target.files[0]

    // validations
    if (selectedFile && fileTypes.includes(selectedFile.type)) {
      setFile(selectedFile)
      setError('')
    } else {
      setFile(null)
      setError('Please select an image file (png or jpeg)')
    }
  }

  return (
    <form>
      <label>
        <input type="file" onChange={fileUploadHandler} />
        <span>+</span>
      </label>
      <div className={classes.output}>
        {error && <div className={classes.error}>{error}</div>}
        {file && <div>{file.name}</div>}
        {file && <ProgressBar file={file} setFile={setFile} />}
      </div>
    </form>
  )
}

export default UploadForm
