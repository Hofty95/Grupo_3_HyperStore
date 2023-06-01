module.exports = ({arrProducts, userInSession}) => {
  return arrProducts.map((product) => {
    const productMap = {
      ...product.dataValues,
      isFavorite: false,
    };
    if (
      product.usersFavorites.some(
        (user) => user.id === userInSession?.id
      )
    ) {
      productMap.isFavorite = true;
    }
    return productMap;
  });
};