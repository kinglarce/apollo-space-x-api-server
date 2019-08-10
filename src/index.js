const { ApolloServer } = require("apollo-server");
const typeDefs = require("./schema");

const server = new ApolloServer({
  typeDefs,
  engine: {
    apiKey: "service:kinglarce-8458:lgJfx-yhUzvkEzlMvIvLAw"
  }
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
