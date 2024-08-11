
# Node GraphQL CRUD

Welcome to the `node-graphql-crud` project! This repository is a demonstration of how to build a Node.js API using GraphQL. The project serves as a foundation for understanding the core concepts of GraphQL, including schema design, resolver implementation, and handling a static data source.

## Table of Contents

- [Introduction](#introduction)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [GraphQL Schema](#graphql-schema)
- [Resolvers](#resolvers)
- [Usage](#usage)
- [License](#license)

## Introduction

This project is a Node.js application that exposes a GraphQL API. It uses a static data source defined in `db.js` to simulate database interactions. The main goal is to provide a CRUD (Create, Read, Update, Delete) interface for managing different resources through GraphQL queries and mutations.

## Project Structure

The project is organized as follows:

node-graphql-crud/
│
├── db.js               # Static file acting as the data source
├── schema.js             # GraphQL schema definitions
├── resolvers/          # Resolver method logics for handling GraphQL operations
├── index.js            # Entry point of the application
├── package.json        # Project dependencies and scripts
└── README.md           # Project documentation


### Key Files

- **db.js**: This file contains static data that serves as the data source for the API. It includes predefined data structures that the GraphQL API interacts with.
- **schema/**: This file contains the GraphQL schema definitions, including type definitions and input types.
- **resolvers/**: This directory holds the resolver functions that map the GraphQL queries and mutations to the operations performed on the data source.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (version 20 or later)
- [npm](https://www.npmjs.com/) (Node package manager)

### Installation

Clone the repository and install the dependencies:

```bash
git clone https://github.com/your-username/node-graphql-crud.git
cd node-graphql-crud
npm install
```

### Running the Application

Start the server:

```bash
npm start
```

The server will start at `http://localhost:4000/`, and you can access the GraphQL Playground by navigating to this URL in your browser.

## GraphQL Schema

The GraphQL schema is defined in the `schema.js` file. It outlines the structure of the API, including the types, queries, and mutations available.

### Example Types

- **Product**: Represents an item in the inventory.
- **Category**: Represents a category to which products belong.

### Example Queries

- `products`: Fetches a list of products.
- `product(id: ID!)`: Fetches a single product by its ID.

### Example Mutations

- `addProduct(input: AddProductInput!)`: Adds a new product to the inventory.
- `updateProduct(id: ID!, input: UpdateProductInput!)`: Updates an existing product.
- `deleteProduct(id: ID!)`: Deletes a product from the inventory.

## Resolvers

Resolvers are functions that handle the logic for fetching and manipulating the data defined in `db.js`. Each query or mutation in the GraphQL schema has a corresponding resolver function.


## Usage

Once the server is running, you can use the Apollo GraphQL Playground to interact with the API. Here are some example queries you can run:

### Fetch All Products

```graphql
query {
  products {
    id
    name
    description
    price
  }
}
```

### Add a New Product

```graphql
mutation {
  addProduct(input: {
    name: "New Product"
    description: "A new product"
    quantity: 10
    price: 99.99
  }) {
    id
    name
    description
  }
}
```

### Update a Product

```graphql
mutation {
  updateProduct(id: "product-id", input: {
    name: "Updated Product"
  }) {
    id
    name
    description
  }
}
```

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.
