import datos from "../data/datos"

export const pedirDatos = () => {   return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(datos)
            
        }, 1000)
    })
}