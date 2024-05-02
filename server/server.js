import express from 'express';
import cors from 'cors';
import http from 'http'
import dotenv from 'dotenv';
import { Server } from 'socket.io';
import mongoDbConnection from './Connection/mongoDbConnection.js';
import Document from './Schema/documentSchema.js';

dotenv.config();

const app = express();

app.use(cors({
    origin: '*',
    credentials: true,
}));

const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"]
    }
});

const socketPort = 5000;
const defaultValue = ""

mongoDbConnection()
    .then(() => {
        server.listen(socketPort, () => {
            console.log(`Server running at ${socketPort}`);
        })

        io.on("connection", socket => {
            socket.on("get-document", async documentId => {

                const document = await findOrCreateDocument(documentId)

                socket.join(documentId)

                socket.emit("load-document", document.data)

                socket.on("send-document", delta => {
                    socket.broadcast.to(documentId).emit("receive-changes", delta)
                })

                socket.on("save-document", async data => {
                    await Document.findByIdAndUpdate(documentId, { data })
                })
            })
        })
    })
    .catch((error) => {
        console.error('Failed to connect to MongoDB. Exiting...', error);
        process.exit(1);
    });

async function findOrCreateDocument(id) {
    if (id == null) return

    const document = await Document.findById(id);
    if (document) return document
    return await Document.create({ _id: id, data: defaultValue })
};   
