// Conexión
const ws = new WebSocket("ws://localhost:8080")

ws.addEventListener("open", (evt) => {
    console.log("estoy conectado!!!")
})

ws.addEventListener("close", (evt) => {
    console.log(`Desconectado por ${evt.code}, ${evt.reason}`)
})

ws.addEventListener("message", ( { data }) => {
    console.log(`Recibido del servidor:`)
    console.log(JSON.parse(data))
})

const btnSend = document.getElementById("btnSend")
btnSend.addEventListener("click", (evt) => {
    evt.preventDefault()
    const person = {
        name: "Alexys",
        company: "EDteam",
        isProfessor: true
    }

    ws.send(JSON.stringify(person))
})

const btnDisconnect = document.getElementById("btnDisconnect")
btnDisconnect.addEventListener("click", (evt) => {
    evt.preventDefault()
    ws.close()
})
