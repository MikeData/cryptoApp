const path = require('path');
const userRoutes = require('./users');
const entriesRoutes = require('./entries');
const dashboardRoutes = require('./dashboard');
const setupRoutes = require('./setup');

const appRouter = (app, fs) => {

    app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, "../views/index.html"));
    });

    userRoutes(app, fs);
    entriesRoutes(app, fs);
    dashboardRoutes(app, fs);
    setupRoutes(app, fs);

};

module.exports = appRouter;