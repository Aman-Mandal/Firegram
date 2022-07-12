import { useEffect, useState } from 'react'
import { projectStorage } from '../Firebase/config'

const useStorage = file => {
  const [progress, setProgress] = useState(0)
  const [error, setError] = useState(null)
  const [url, setUrl] = useState(null)

  useEffect(() => {
    // references (where the file must save)
    const storageRef = projectStorage.ref(file.name)

    storageRef.put(file).on(
      'state_changed',
      snap => {
        let percentage = (snap.bytesTransferred / snap.totalBytes) * 100
        setProgress(percentage)
      },
      err => {
        setError(err)
      },
      async () => {
        const url = await storageRef.getDownloadURL()
        setUrl(url)
      }
    )
  }, [file])

  return { progress, error, url }
}

export default useStorage
