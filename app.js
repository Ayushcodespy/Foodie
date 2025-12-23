import "dotenv/config"
import fastify from "fastify"
import { connectDB } from "./src/config/connect.js"
import { PORT } from "./src/config/config.js"
import { registerRoutes } from "./src/routes/index.js"
import { buildAdminRouter } from "./src/config/setup.js"
import { Server } from "socket.io"

const start = async () => {

    await connectDB(process.env.MONGO_URI)
    console.log("DB Connected ✅✅")

    const app = fastify()

    await registerRoutes(app)
    await buildAdminRouter(app)

    // ✅ CREATE SOCKET.IO BEFORE LISTEN
    const io = new Server(app.server, {
        cors: { origin: "*" },
        transports: ["websocket"],
        pingInterval: 10000,
        pingTimeout: 5000,
    })

    // ✅ DECORATE BEFORE SERVER START
    app.decorate("io", io)

    io.on("connection", (socket) => {
        console.log("🟢 Client connected:", socket.id)

        socket.on("joinRoom", (orderId) => {
            socket.join(orderId)
            console.log(`📦 Joined room: ${orderId}`)
        })

        socket.on("disconnect", () => {
            console.log("🔴 Client disconnected:", socket.id)
        })
    })

    // ✅ START SERVER (LAST STEP)
    await app.listen({
        port: PORT,
        host: "0.0.0.0"
    })

    console.log(`🚀 Server running at http://localhost:${PORT}`)
}

start()







// import "dotenv/config"
// import fastify from "fastify"
// import { connectDB } from "./src/config/connect.js"
// import { PORT } from "./src/config/config.js"
// import fastifySocketIO from "fastify-socket.io"
// import { registerRoutes } from "./src/routes/index.js"
// import { buildAdminRouter } from "./src/config/setup.js"

// const start = async() => {
//     await connectDB(process.env.MONGO_URI)
//     const app = fastify()

//     app.register(fastifySocketIO, {
//         cors: {
//             origin: "*"
//         },
//         pingInterval: 10000,
//         pingTimeout:  5000,
//         transports: ['websocket']
//     })

//     await registerRoutes(app)

//     await buildAdminRouter(app)

//     app.listen({port:PORT, host:'0.0.0.0'},(err,addr) => {
//         if(err) {
//             console.log(err)
//         } else {
//             console.log(`Grocery App Running on http://localhost:${PORT}`)
//         }
//     })

//     app.ready().then(()=>{
//         app.io.on('connection', (socket)=> {
//             console.log("a user connected ✅")

//             socket.on("joinRoom", (orderID) => {
//                 socket.join(orderID);
//                 console.log(`🔴 User joined room ${orderID}`)
//             })

//             socket.on('disconnec', ()=> {
//                 console.log("User disconnected ❌")
//             })
//         })
//     })

// }

// start()
