import { useState, useEffect } from 'react'
import { projectStorage } from '../Firebase/config'
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage'

const useStorage = file => {
  const [progress, setProgress] = useState(0)
  const [error, setError] = useState(null)
  const [url, setUrl] = useState(null)

  useEffect(() => {
    // references
    const storageRef = ref(projectStorage, file.name)
    const uploadImage = uploadBytesResumable(storageRef, file)

    uploadImage.on(
      'state_changed',
      snap => {
        let percentage = (snap.bytesTransferred / snap.totalBytes) * 100
        setProgress(percentage)
      },
      err => {
        setError(err)
      },
      async () => {
        getDownloadURL(uploadImage.snapshot.ref).then(async downloadUrl =>
          setUrl(downloadUrl)
        )
      }
    )
  }, [file])

  return { progress, url, error }
}

export default useStorage
