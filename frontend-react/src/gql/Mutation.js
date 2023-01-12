import { gql } from "@apollo/client";

export const SAVE_HERO = gql`
    mutation saveHero($heroName: String,$intelligence: String, $strength: String, $speed: String, $durability: String, $power: String, $combat: String, $image: String){
    saveHero(heroName: $heroName, intelligence: $intelligence, strength: $strength, speed: $speed, durability: $durability, power: $power, combat: $combat, image: $image ) {
        heroName,
        powerstats {
        intelligence,
        strength,
        speed,
        durability,
        power,
        combat,
        },
        image
    }
  }
`;