const path = require('path');
const userRoutes = require('./users');

const appRouter = (app, fs) => {

    app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, "../views/index.html"));
    });

    userRoutes(app, fs);


};

module.exports = appRouter;