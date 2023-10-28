import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from '@apollo/server/standalone';

//Types
import { typeDefs } from "./schema";

// server setup
const server = new ApolloServer({
    // Type Defination 
    typeDefs,

    // Resolvers
});

const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 }
});

console.log('Server is ready at port: ', 4000);