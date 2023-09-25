const Expense = require("../models/expenseModel");

exports.postExpense = (req, res) => {
  const expense = new Expense(
    req.body.date,
    req.body.account,
    req.body.category,
    req.body.amount,
    req.body.note
  );
};
