import datos from '../data/datos.json' assert { type: 'json' }
import { collection, addDoc } from 'firebase/firestore'
import { db } from './config.js'

datos.forEach((el) => delete el.id)

const productosRef = collection(db, 'Productos')

datos.forEach((el) => {
    addDoc(productosRef, el)
})