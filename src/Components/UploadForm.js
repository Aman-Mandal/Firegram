import React from 'react'
import { useState } from 'react'

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
      <input type="file" onChange={fileUploadHandler} />
      <div>
        {error && <div>{error}</div>}
        {file && <div>{file.name}</div>}
      </div>
    </form>
  )
}

export default UploadForm
