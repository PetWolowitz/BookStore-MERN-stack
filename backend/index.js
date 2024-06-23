import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import { Book } from "./models/bookModel.js";
import bookRoute from "./routes/booksRoute.js";
import cors from "cors";

const app = express();
// Middleware for parsing request body
app.use(express.json());

// middleware for cors
// app.use(cors());
app.use(
    cors({
        origin: "http://localhost:5555",
        methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
        allowedHeaders: ["Content-Type"]
        
    })
)


app.get("/", (request, response) => {
    console.log("request")
    return response.status(234).send('Welcome to my APP')
})

app.use('/books', bookRoute);

        mongoose
        .connect(mongoDBURL)
        .then(() => {
            console.log("connected to mongoDB");
            app.listen(PORT, () => {
                console.log(`listening on port ${PORT}`);
            })
        })
        .catch((error) => {
            console.log(error);
        })