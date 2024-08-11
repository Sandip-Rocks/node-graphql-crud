const { ApolloServer } = require("apollo-server");
const { typeDefs } = require('./schema');
const { Product } = require('./resolvers/Product');
const { Category } = require('./resolvers/Category');
const { Mutation } = require('./resolvers/Mutation');
const { Query } = require('./resolvers/Query');
const { products, reviews, categories } = require('./db');

const resolvers = {
    Product,
    Category,
    Query,
    Mutation,
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: {
    products, reviews, categories 
  }
});

server.listen().then(({ url }) => {
  console.log("Server is running at", url);
});
