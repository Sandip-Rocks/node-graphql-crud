exports.Category = {
  products: (parent, { filter }, { products, reviews }) => {
    let filteredProducts = products.filter(
      (productData) => productData.categoryId === parent.id
    );
    if (filter) {
      const { onSale, avgRating } = filter;
      if (onSale) {
        filteredProducts = filteredProducts.filter(
          (productData) => productData.onSale === filter.onSale
        );
      }
      if ([1, 2, 3, 4, 5].includes(avgRating)) {
        filteredProducts = filteredProducts.filter((productData) => {
          let sum = 0;
          let numberOfReviews = 0;
          reviews.forEach((reviewData) => {
            if (reviewData.productId === productData.id) {
              sum += reviewData.rating;
              numberOfReviews++;
            }
          });
          const avgProductRating = sum / numberOfReviews;
          return avgProductRating >= avgRating;
        });
      }
    }
    return filteredProducts;
  },
};
