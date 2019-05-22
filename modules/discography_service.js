var Discography = require("../models/discography");

const contentTypeJson = {
    'Content-Type': 'application/json'
};

const contentTypePlainText = {
    'Content-Type': 'text/plain'
};


exports.saveItem = function (req, res) {
    var disc = toDisc(req.body);
    disc.save((error) => {
        if (!error) {
            disc.save();
            res.writeHead(201, contentTypeJson);
            res.end(JSON.stringify(req.body));
        } else {
            Discography.findOne({ name : disc.name }, (err, result) => {
                if (err) {
                    console.log(err);
                    res.writeHead(500, contentTypePlainText);
                    res.end('Internal Server Error');
                }
                if (!result) {
                    disc.save();
                    res.writeHead(201, contentTypeJson);
                    res.end(JSON.stringify(req.body));
                } else {
                    item.save();
                    res.json(JSON.stringify(item));
                }
            });

            res.writeHead(500, contentTypePlainText);
            res.end('Internal Server Error');
        }
    })
}


function toDisc(disc) {
    return new Discography({
        name: disc.name,
        image: disc.image
    });
}