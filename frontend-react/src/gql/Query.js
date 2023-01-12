import { gql } from "@apollo/client";

export const GET_HERO = gql`
    query($name: String!){
        getHero(name: $name) {
            response,
            results {
                name,
                powerstats {
                    intelligence,
                    strength,
                    speed,
                    durability,
                    power,
                    combat,
                }
                image {
                    url
                }
            }
        }        
    }
`;

export const FETCH_SUPER_HEROES = gql`
    query{
        fetchMySuperHeroes {
        heroName,
        image,
        powerstats {
            intelligence,
            strength,
            speed,
            durability,
            power,
            combat,
        }
        }
    }
`