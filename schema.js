const { gql } = require("apollo-server");
exports.typeDefs = gql`
  type Query {
    products(filter: ProductsFilterInput): [Product!]!
    product(id: ID!): Product
    categories: [Category]
    category(id: ID!): Category
  }

  type Product {
    id: ID!
    name: String!
    description: String!
    quantity: Int!
    price: Float!
    image: String!
    onSale: Boolean!
    category: Category
    reviews: [Review]
  }

  type Category {
    id: ID!
    name: String!
    products(filter: ProductsFilterInput): [Product!]
  }

  type Review {
    id: ID!
    date: String!
    title: String!
    comment: String!
    rating: Int!
    productId: String!
  }

  type Mutation {
    addCategory(input: AddCategoryInput): Category!
    addReview(input: AddReviewInput): Review!
    addProduct(input: AddProductInput): Product!
    deleteCategoryById(input: DeleteCategoryByIdInput): Boolean!
    deleteReviewById(input: DeleteReviewByIdInput): Boolean!
    deleteProductById(input: DeleteProductByIdInput): Boolean!
    updateProductById(id: ID!, input: UpdateProductByIdInput): Product!
    updateCategoryById(id: ID!, input: UpdateCategoryByIdInput): Category!
    updateReviewById(id: ID!, input: UpdateReviewByIdInput): Review!
  }

  input ProductsFilterInput {
    onSale: Boolean
    avgRating: Int
  }

  input AddCategoryInput {
    name: String!
  }

  input AddReviewInput {
    date: String!
    title: String!
    comment: String!
    rating: Int!
    productId: String!
  }

  input AddProductInput {
    name: String!
    description: String!
    quantity: Int!
    price: Float!
    image: String!
    onSale: Boolean!
    categoryId: String!
  }

  input DeleteProductByIdInput {
    id: ID!
  }
  input DeleteReviewByIdInput {
    id: ID!
  }
  input DeleteCategoryByIdInput {
    id: ID!
  }

  input UpdateProductByIdInput {
    name: String
    description: String
    quantity: Int
    price: Float
    image: String
    onSale: Boolean
    categoryId: String
  }

  input UpdateCategoryByIdInput {
    name: String!
  }

  input UpdateReviewByIdInput {
    date: String
    title: String
    comment: String
    rating: Int
    productId: String
  }
`;
