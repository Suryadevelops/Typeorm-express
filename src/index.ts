import { createConnection } from 'typeorm';
import { ApolloServer } from "apollo-server-express";
import express from 'express'
import session from "express-session";


import { typeDefs } from './typeDefs'
import { resolvers } from './resolver'



const startServer = async () => {
    const server = new ApolloServer({
        typeDefs,
        resolvers,
        context: ({ req }: any) => ({ req })
    });

    await createConnection();

    const app = express();
    app.use(
        session({
            secret: "asdjlfkaasdfkjlads",
            resave: false,
            saveUninitialized: false
        })
    );
    server.applyMiddleware({ app });

    app.listen({ port: 4000 }, () => console.log(`server ready at http://localhost:4000${server.graphqlPath}`)
    );
}

startServer()
