const { Pool } = require("pg");



module.exports = class Book {
  id;
  title;
  coverImage;
  rating;
  price;
  inStock;

  constructor(row) {
    this.id = String(row.id);
    this.title = row.title;
    this.coverImage = row.cover_image;
    this.rating = row.rating;
    this.price = row.price;
    this.inStock = row.in_stock;
  }


};
