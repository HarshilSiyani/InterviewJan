const express = require('express');
const cors = require('cors');
const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');
const { ApolloServer, gql } = require("apollo-server-express");
const dotenv = require('dotenv');
dotenv.config();
const mongoose = require('mongoose');

const corsOptions = {
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
    optionsSuccessStatus: 204
}

async function initServer() {
    const app = express();
    const apolloServer = new ApolloServer({
        typeDefs, resolvers
    })
    await apolloServer.start();
    apolloServer.applyMiddleware({ app });
    app.use((req, res) => {
        res.send("Server started")
    })
    app.use(cors(corsOptions))
    const PORT = process.env.PORT;

    try {
        await mongoose.set('strictQuery', true);
        await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
        console.log(`Database connected sucessfully`)
    } catch (err) {
        console.log(err)
    }

    app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))
}
initServer();