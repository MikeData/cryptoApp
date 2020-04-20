const userRoutes = (app, fs) => {

    const path = require('path');
    const dataPath = './data/users.json';

    app.get('/users/list', (req, res) => {
        let rawdata = fs.readFileSync(path.join(__dirname, "../data/users.json"));
        let users = JSON.parse(rawdata);

        res.send(users);
    })

    app
        .get('/users', (req, res) => {
            //console.log(req.url);
            res.sendFile(path.join(__dirname, "../views/users.html"));
        })
        .post('/users', (req, res) => {
            // read users data
            let rawdata = fs.readFileSync(path.join(__dirname, "../data/users.json"));
            let users = JSON.parse(rawdata);

            // create new user
            let newId = users.length + 1;
            let newUser = {
                "alias": req.body.alias,
                "totalAmmount": 0,
                "id": newId
            };
            console.log(newUser);
            users.push(newUser);

            // save new user to users data
            fs.writeFile(path.join(__dirname, "../data/users.json"), JSON.stringify(users, null, 3), function(err) {
                if (err) return console.log(err);
                console.log('Added new user to database');
            });

            // reroute to the users view
            res.sendFile(path.join(__dirname, "../views/users.html"));
        });

};

module.exports = userRoutes;