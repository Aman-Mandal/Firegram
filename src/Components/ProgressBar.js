import React, { useEffect } from 'react'
import useStorage from '../Hooks/useStorage'
import styles from './ProgressBar.module.css'

const ProgressBar = ({ file, setFile }) => {
  const { progress, url } = useStorage(file)

  useEffect(() => {
    if (url) {
      setFile(null)
    }
  }, [url, setFile])

  return (
    <div
      className={styles['progress-bar']}
      style={{ width: progress + '%' }}
    ></div>
  )
}

export default ProgressBar
