const path = require('path');
const express = require('express');
const app = express();

const userRouter = require('./routes/userRouter');
const { hostRouter } = require('./routes/hostRouter'); // Destructuring because two modules are exported
const rootDir = require('./utils/pathUtil');

// Set EJS as the templating engine
app.set('view engine', 'ejs');
app.set('views', 'views');

// Middleware to parse URL-encoded form data
app.use(express.urlencoded({ extended: true }));

// Serve static files from /public
app.use(express.static(path.join(rootDir, 'public')));

// Mount routers
app.use(userRouter);
app.use('/host', hostRouter);

// 404 Page
app.use((req, res, next) => {
  res.status(404).render('404', { pageTitle: 'Page Not Found' });
});

// Start server
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
