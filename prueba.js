import express from "express"
 
const PORT=3000
const app=express()
 
 
app.get('/ruta', (req, res)=>{
    res.send("Hola Mundo...")
})
 
app.listen(PORT, ()=>{
    console.log(`Servidor inicializado en: http://127.0.0.1:${PORT}`)
})