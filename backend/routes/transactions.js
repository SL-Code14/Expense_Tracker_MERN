const { addExpense, getExpense, deleteExpense } = require('../controllers/expense');
const { addIncome, getIncomes, deleteIncome } = require('../controllers/income');

const router = require('express').Router();


router.post('/add-income', addIncome)
.get('/get-income', getIncomes)
.delete('/delete-income/:id', deleteIncome)
.post('/add-expense', addExpense)
.get('/get-expense', getExpense)
.delete('/delete-expense/:id', deleteExpense)

// router.get('/', (req, res) => {
//     res.send('hello world')
//     })



module.exports = router