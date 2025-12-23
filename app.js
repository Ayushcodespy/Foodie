import "dotenv/config"
import fastify from "fastify"
import { connectDB } from "./src/config/connect.js"
import { PORT } from "./src/config/config.js"
import fastifySocketIO from "fastify-socket.io"
import { registerRoutes } from "./src/routes/index.js"

const start = async() => {
    await connectDB(process.env.MONGO_URI)
    const app = fastify()

    app.register(fastifySocketIO, {
        cors: {
            origin: "*"
        },
        pingInterval: 10000,
        pingTimeout:  5000,
        transports: ['websocket']
    })

    await registerRoutes(app)

    app.listen({port:PORT, host:'0.0.0.0'},(err,addr) => {
        if(err) {
            console.log(err)
        } else {
            console.log(`Grocery App Running on http://localhost:${PORT}`)
        }
    })

    app.ready().then(()=>{
        app.io.on('connection', (socket)=> {
            console.log("a user connected ✅")

            socket.on("joinRoom", (orderID) => {
                socket.join(orderID);
                console.log(`🔴 User joined room ${orderID}`)
            })

            socket.on('disconnec', ()=> {
                console.log("User disconnected ❌")
            })
        })
    })

}

start()
