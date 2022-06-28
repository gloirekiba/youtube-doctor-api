const { ApolloServer, gql } = require("apollo-server");

const { typeDefs, resolvers } = require("./schema");

const server = new ApolloServer({
  typeDefs,
  resolvers,
  // csrfPrevention: true,
  // cache: "bounded",
});

server.listen({ port: 4001 }).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
