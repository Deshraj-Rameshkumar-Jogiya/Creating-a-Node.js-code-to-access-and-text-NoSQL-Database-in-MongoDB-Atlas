//importing needed library
const express = require('express');
const loanController = require('../controllers/loanController');

const router = express.Router();

// defining routes and attaching api methods for apir
router 
  .route('/')
  .get(loanController.getAllLoan)
  .post(loanController.createLoan);

router
  .route('/:id')
  .get(loanController.getLoan)
  .patch(loanController.updateLoan)
  .delete(loanController.deleteLoan);

module.exports = router;