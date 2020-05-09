const vaultsRoutes = (app, fs) => {

    const path = require('path');

    app.get('/vaults', (req, res) => {
        //console.log(req.url);
        res.sendFile(path.join(__dirname, "../views/vaults.html"));
    })

};

module.exports = vaultsRoutes;