const entriesRoutes = (app, fs) => {

    const path = require('path');
    const dataPath = './data/entries.json';

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
                "alias": req.body.alias,
                "totalAmmount": 0,
                "id": newId
            };
            console.log(newEntry);
            entries.push(newEntry);

            // save new entry to entries data
            fs.writeFile(path.join(__dirname, "../data/entries.json"), JSON.stringify(entries, null, 3), function(err) {
                if (err) return console.log(err);
                console.log('Added new entry to database');
            });

            // reroute to the entries view
            res.sendFile(path.join(__dirname, "../views/entries.html"));
        });

    const loadTable = () => {
        let rawdata = fs.readFileSync('entries.json');
        let entries = JSON.parse(rawdata);
        console.log(entries + "entries.js");

        return entries;
    }
};

module.exports = entriesRoutes;