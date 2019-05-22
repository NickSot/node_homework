var mongoose = require('mongoose');

const discographySchema = new mongoose.Schema(
    {
        name: {
            type: String
        },

        coverImage: Blob,

        songs: [String]
    }
);

const Discography = mongoose.model('Discography', discographySchema);

module.exports = Discography;