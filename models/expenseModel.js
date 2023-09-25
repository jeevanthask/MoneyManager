const db = require("../util/database");

class Expense {
  constructor(date, account, category, amount, note) {
    this.date = date;
    this.account = account;
    this.category = category;
    this.amount = amount;
    this.note = note;
  }

  saveExpense() {
    return db.execute(
      `INSERT INTO expenses(date,account,category,amount,note) VALUES('${this.date}',${this.account}',${this.category}',${this.amount}',${this.note}')`
    );
  }
}
