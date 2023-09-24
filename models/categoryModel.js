const db = require("../util/database");

class Category {
  constructor(name) {
    this.name = name;
  }

  saveCategory() {
    return db.execute(`INSERT INTO categories(name) VALUES('${this.name}')`);
  }
}

module.exports = Category;
