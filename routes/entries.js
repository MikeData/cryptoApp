const entriesRoutes = (app, fs) => {

    const path = require('path');

    // HELPER METHODS
    const addEntryAmount = (userName, amount) => {
        // read users data
        let rawdata = fs.readFileSync(path.join(__dirname, "../data/users.json"));
        let users = JSON.parse(rawdata);
        let userAlias = userName;
        // add amount to user totalAmount
        users.forEach(user => {
            if(user.alias == userAlias){
                user.totalAmount += parseFloat(amount);
            
            }else{
                console.log("User not found. No amount added");
            }
        });

        // save users data
        fs.writeFile(path.join(__dirname, "../data/users.json"), JSON.stringify(users, null, 3), function(err) {
            if (err) return console.log(err);
            console.log('Added new user to database');
        });
    };

    // ROUTES
    app.get('/entries/list', (req, res) => {
        let rawdata = fs.readFileSync(path.join(__dirname, "../data/entries.json"));
        let entries = JSON.parse(rawdata);

        res.send(entries);
    });

    app
        .get('/entries', (req, res) => {
            //console.log(req.url);
            res.sendFile(path.join(__dirname, "../views/entries.html"));
        })
        .post('/entries', (req, res) => {
            // read entries data
            let rawdata = fs.readFileSync(path.join(__dirname, "../data/entries.json"));
            let entries = JSON.parse(rawdata);

            // create new entry
            let newId = entries.length + 1;
            let newEntry = {
                "user": req.body.user,
                "amount": parseFloat(req.body.amount),
                "id": newId
            };
            console.log(newEntry);
            entries.push(newEntry);

            // add amount to user totalAmount
            addEntryAmount(req.body.user, req.body.amount);

            // save new entry to entries data
            fs.writeFile(path.join(__dirname, "../data/entries.json"), JSON.stringify(entries, null, 3), function(err) {
                if (err) return console.log(err);
                console.log('Added new entry to database');
            });

            // reroute to the entries view
            res.sendFile(path.join(__dirname, "../views/entries.html"));
        });

};

module.exports = entriesRoutes;