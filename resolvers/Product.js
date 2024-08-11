exports.Product = {
    category: (parent, args, context) => {
        const { categories } = context;
        return categories.find(
        (categoryData) => categoryData.productId === parent.categoryId
      )
    },
    reviews: (parent, args, context) => {
        const { reviews } = context;
        const { id } = parent; 
        return reviews.filter((reviewData) => reviewData.productId === id)
    }
  };