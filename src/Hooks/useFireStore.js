import { useEffect, useState } from 'react'
import { projectFireStore } from '../Firebase/config'
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore'

const useFireStore = collection1 => {
  const [docs, setDocs] = useState([])
  useEffect(() => {
    async function getAllDocs() {
      const collRef = collection(projectFireStore, collection1) //the name of the input in line 5 was changed not to collicde with the actual "collection" function in this line
      const q = query(collRef, orderBy('createdAt', 'desc'))
      const unsub = onSnapshot(q, snap => {
        let documents = []
        snap.forEach(doc => {
          documents.push({ ...doc.data(), id: doc.id })
        })
        setDocs(documents)
      })
    }
    getAllDocs()
  }, [collection1]) //this is buggy becasue it should update also on file added, but i did not change it yet
  return { docs }
}
export default useFireStore
