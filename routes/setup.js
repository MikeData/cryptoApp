const setupRoutes = (app, fs) => {

    const path = require('path');

    app.get('/setup', (req, res) => {
        //console.log(req.url);
        res.sendFile(path.join(__dirname, "../views/setup.html"));
    })

};

module.exports = setupRoutes;