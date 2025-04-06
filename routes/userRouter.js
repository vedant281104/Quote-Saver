const express = require('express');
const path = require('path');
const userRouter = express.Router();
const { quotes } = require('./hostRouter'); // ✅ imported

userRouter.get('/', (req, res, next) => {
    res.render('quotes', { pageTitle: 'Saved Quotes', quotes }); // ✅ rendering correct view
});

module.exports = userRouter;
