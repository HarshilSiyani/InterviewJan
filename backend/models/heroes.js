const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const heroSchema = new Schema({
    heroName: {
        type: String,
        required: true
    },
    powerstats: {
        intelligence: {
            type: String,
            required: true
        },
        strength: {
            type: String,
            required: true
        },
        speed: {
            type: String,
            required: true
        },
        durability: {
            type: String,
            required: true
        },
        power: {
            type: String,
            required: true
        },
        combat: {
            type: String,
            required: true
        },
    },
    image: {
        type: String,
        required: true
    }
})


const heroes = mongoose.model('heroes', heroSchema);
module.exports = heroes