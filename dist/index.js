"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const apollo_server_express_1 = require("apollo-server-express");
const typedefs_1 = require("./typedefs");
const resolver_1 = require("./resolver");
const app = express_1.default();
const server = new apollo_server_express_1.ApolloServer({
    typeDefs: typedefs_1.typeDefs,
    resolvers: resolver_1.resolvers,
});
server.applyMiddleware({ app });
app.use((__, res) => {
    res.status(200);
    res.send('Hello!');
    res.end();
});
app.listen({ port: 4000 }, () => console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`));
//# sourceMappingURL=index.js.map