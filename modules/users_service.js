var User = require("../models/user");


exports.saveItem = function (req, res) {
    var user = toUser(req.body);
    user.save((error) => {
        if (!error) {
            user.save();
            res.writeHead(201, contentTypeJson);
            res.end(JSON.stringify(req.body));
        } else {
            User.findOne({ name: user.name }, (err, result) => {
                if (err) {
                    console.log(err);
                    res.writeHead(500, contentTypePlainText);
                    res.end('Internal Server Error');
                }
                if (!result) {
                    user.save();
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


function toUser(user) {
    return new User({
        name: user.name,
        image: user.image
    });
}