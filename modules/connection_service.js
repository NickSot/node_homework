var discography = require("../models/discography");
var user = require("../models/user");
var mongoose = require('mongoose');

exports.connectionDB = () => {
    return mongoose.connect("mongodb://localhost/discographyManager", { useNewUrlParser: true });
}
