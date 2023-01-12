const { gql } = require("apollo-server-express")
const typeDefs = gql`
    type Query {
        getHero(name: String!): Heroes,
        fetchMySuperHeroes: [userSelectedHero]
    }

    type Mutation {
        saveHero(
            heroName: String,
            intelligence: String,
            strength: String,
            speed: String,
            durability: String,
            power: String,
            combat: String
            image: String
        ): userSelectedHero,
        updatePowerStat(
            id: String,
            intelligence: String,
            strength: String,
            speed: String,
            durability: String,
            power: String,
            combat: String
        ): userSelectedHero
    }

    type userSelectedHero {
        heroName: String,
        powerstats: PowerStat,
        image: String
    }

    type PowerStat {
        intelligence: String,
        strength: String,
        speed: String,
        durability: String,
        power: String,
        combat: String
    }

    type Image {
        url:  String
    }

    type Hero {
        name: String,
        powerstats: PowerStat
        image: Image
    }

    type Heroes {
        response: String,
        results: [Hero]
    }
`

module.exports = typeDefs;