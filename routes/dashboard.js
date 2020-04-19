const dashboardRoutes = (app, fs) => {

    const path = require('path');

    app.get('/dashboard', (req, res) => {
        //console.log(req.url);
        res.sendFile(path.join(__dirname, "../views/dashboard.html"));
    })

};

module.exports = dashboardRoutes;