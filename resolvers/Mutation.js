const { v4: uuid } = require("uuid");
const { categories } = require("../db");

exports.Mutation = {
  addCategory: (parent, { input }, { categories }) => {
    const { name } = input;
    const newCategory = {
      id: uuid(),
      name,
    };
    categories.push(newCategory);
    return newCategory;
  },

  addReview: (parent, { input }, { reviews, products }) => {
    const { date, title, comment, rating, productId } = input;
    const productIdExist = products.findIndex(
      (productData) => productData.id === productId
    );
    if (productIdExist < 0) {
      throw new Error("Product does not exist");
    }
    const newReview = {
      id: uuid(),
      date,
      title,
      comment,
      rating,
      productId,
    };
    reviews.push(newReview);
    return newReview;
  },

  addProduct: (parent, { input }, { products, categories }) => {
    const { name, description, quantity, price, image, onSale, categoryId } =
      products;

    const isCategoryExist = categories.findIndex(
      (categoryData) => categoryData.id === categoryId
    );

    if (isCategoryExist < 0) {
      throw new Error("Category does not exist");
    }

    const newProduct = {
      id: uuid(),
      name,
      description,
      quantity,
      price,
      image,
      onSale,
      categoryId,
    };

    products.push(newProduct);
    return newProduct;
  },

  deleteCategoryById: (parent, { input }, { categories, products }) => {
    const { id } = input;

    const findCategoryIndex = categories.findIndex(
      (categoriesData) => categoriesData.id === id
    );

    if (findCategoryIndex < 0) {
      throw new Error("Category not found");
    }
    const filteredCategories = categories.filter(
      (categoriesData) => categoriesData.id !== id
    );
    categories = filteredCategories;
    products = products.map((productData) => {
      if (productData.categoryId === id) {
        return {
          ...productData,
          categoryId: null,
        };
      } else {
        return productData;
      }
    });
    return true;
  },
  deleteReviewById: (parent, { input }, { reviews }) => {
    const { id } = input;
    const findReviewsIndex = reviews.findIndex((review) => review.id === id);
    if (findReviewsIndex < 0) {
      throw new Error("Review doesnt exist");
    }
    reviews = reviews.filter((review) => review.id !== id);
    return true;
  },
  deleteProductById: (parent, { input }, { products, reviews }) => {
    const { id } = input;
    const findProductIndex = products.findIndex((product) => product.id === id);
    if (findProductIndex < 0) {
      throw new Error("Review doesnt exist");
    }
    products = products.filter((product) => product.id !== id);
    reviews = reviews.map((review) => {
      if (review.productId === id) {
        return {
          ...review,
          productId: null,
        };
      } else {
        return review;
      }
    });
    return true;
  },

  updateProductById: (parent, { id, input }, { products, categories }) => {
    const index = products.findIndex((product) => product.id === id);

    if (input.categoryId) {
      const findCategoryIndex = categories.findIndex(
        (category) => category.id === input.categoryId
      );
      if (findCategoryIndex < 0) {
        throw new Error("Category does not exist");
      }
    }

    products[index] = {
      ...products[index],
      ...input,
    };

    return products[index];
  },
  updateReviewById: (parent, { id, input }, { products, reviews }) => {
    const index = reviews.findIndex((review) => review.id === id);

    if(index < 0) {
        throw new Error("Review does not exist");
    }
    if (input.productId) {
      const findProductIndex = products.findIndex(
        (product) => product.id === input.productId
      );
      if (findProductIndex < 0) {
        throw new Error("Product does not exist");
      }
    }

    reviews[index] = {
      ...reviews[index],
      ...input,
    };

    return reviews[index];
  },

  updateCategoryById: (parent, { id, input }, { categories }) => {
    const index = categories.findIndex((category) => category.id === id);

    if (index < 0) {
      throw new Error("Category does not exist");
    }
    categories[index] = {
      ...categories[index],
      ...input,
    };

    return categories[index];
  },
};
