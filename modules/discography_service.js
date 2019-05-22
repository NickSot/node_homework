var Discography = require("../models/discography");

const contentTypeJson = {
    'Content-Type': 'application/json'
};

const contentTypePlainText = {
    'Content-Type': 'text/plain'
};


exports.saveItem = function (req, res) {
    var mouse = toMouse(req.body);
    mouse.save((error) => {
        if (!error) {
            mouse.save();
            res.writeHead(201, contentTypeJson);
            res.end(JSON.stringify(req.body));
        } else {
            MouseModel.findOne({ name : mouse.name }, (err, result) => {
                if (err) {
                    console.log(err);
                    res.writeHead(500, contentTypePlainText);
                    res.end('Internal Server Error');
                }

                if (!result) {
                    mouse.save();
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