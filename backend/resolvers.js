const fetch = require("node-fetch")
const heroes = require('./models/heroes');
const resolvers = {
    // Hero: {
    //     powerstats: async parent => {
    //         const response = await fetch(parent.powerstats);
    //         return response.json();
    //     }
    // },
    
    Query: {
        getHero: async (root,{name}) => {
            const response = await fetch(`https://superheroapi.com/api/5992222327487555/search/${name}`);
            return response.json();
        },
        fetchMySuperHeroes: async () => {
            const allHeroes = await heroes.find({});
            return allHeroes;
        }
    },
    Mutation: {
        saveHero: async (root, {heroName,intelligence,strength,speed,durability,power,combat,image}) => {
            const newHero = new heroes({
                heroName,
                powerstats: {
                    intelligence,strength,speed,durability,power,combat
                },
                image
            })
            await newHero.save();
            return newHero;
        },
        updatePowerStat: async (root, {id, intelligence,strength,speed,durability,power,combat}) => {
            const superHero = await heroes.findByIdAndUpdate({_id: id}, 
                {$set: {
                    powerstats: {
                        intelligence,strength,speed,durability,power,combat
                    }
                }}, {new: true})
            //console.log("data", superHero)
            return superHero;
        }   
    }
};

module.exports = resolvers;