import React from 'react'
import useFireStore from '../Hooks/useFireStore'
import styles from './ImageGrid.module.css'

const ImageGrid = () => {
  const { docs } = useFireStore('images')
  console.log(docs)
  return (
    <div className={styles['img-grid']}>
      {docs &&
        docs.map(doc => (
          <div className={styles['img-wrap']} key={doc.id}>
            <img src={doc.downloadUrl} alt="picture uploaded" />
          </div>
        ))}
    </div>
  )
}

export default ImageGrid
