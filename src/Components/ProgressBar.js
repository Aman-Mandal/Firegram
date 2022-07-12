import React from 'react'
import useStorage from '../Hooks/useStorage'
import styles from './ProgressBar.module.css'

const ProgressBar = props => {
  const { progress, url } = useStorage(props.file)
  console.log(progress, url)

  return <div>Progress...</div>
}

export default ProgressBar
