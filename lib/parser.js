const parse = document => {
  const books = document.querySelectorAll('product_pod');

  return [...books].map(book => ({
    title: book.querySelector('h3').textContent,
    coveImage: book.querySelector('img').src,
    rating: book.querySelector('.star-rating'),
    price: book.querySelector('.price_color').textContent,
    inStock: !book.querySelector('.instock')
  }));
};

module.exports = parse;
