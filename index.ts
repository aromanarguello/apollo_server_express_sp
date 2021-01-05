import express from "express";
import { ApolloServer, gql } from "apollo-server-express";

const typeDefs = gql`
  type Query {
    hola: String!
  }
`;

const resolvers = {
  Query: {
    hola: () => "!Hola Mundo!",
  },
};

const servidor = new ApolloServer({
  typeDefs,
  resolvers,
  playground: true,
  introspection: true,
});

const app = express();

servidor.applyMiddleware({ app, path: "/graphql" });

app.listen({ port: 4000 }, () =>
  console.log(
    `El servidor esta listo en http://localhost:4000${servidor.graphqlPath}`
  )
);
