const path = require('path');
const express = require('express');
const hostRouter = express.Router();
const quotes = [];

hostRouter.get('/add-quote', (req, res, next) => {
    res.render('addQuote', { pageTitle: 'Add a New Quote' });
});


hostRouter.post('/add-quote', (req, res, next) => {
    const quote = req.body.quote;
    const author = req.body.author;
    quotes.push({ quote, author });
    res.render('quoteAdded',{ pageTitle: 'Quote Added Successfully' })
});

exports.hostRouter = hostRouter;
exports.quotes = quotes;
