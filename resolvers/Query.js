exports.Query = {
  products: (parent, { filter }, { products }) => {
    
    let filteredProducts = products;
    if (filter) {
      if (filter.hasOwnProperty("onSale")) {
        return products.filter(
          (productData) => productData.onSale === filter.onSale
        );
      }
    }
    return filteredProducts;
  },
  product: (parent, args, context) => {
    const { id } = args;
    const { products } = context;
    const product = products.find((product) => product.id === id);
    if (!product) return null;
    return product;
  },
  categories: (parent, args, {categories}) => categories,
  category: (parent, args, context) => {
    const { id } = args;
    const { categories } = context;
    const category = categories.find((categoryData) => categoryData.id === id);
    if (!category) return null;
    return category;
  },
};
