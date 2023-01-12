import { useMutation, useQuery } from '@apollo/client';
import { FETCH_SUPER_HEROES } from '../gql/Query';

function Heroes() {
    const { loading, error, data } = useQuery(FETCH_SUPER_HEROES);
    console.log('Printing data')
    console.log(data?.fetchMySuperHeroes)
    
    return (
        <div>
            
        {
            // heroes.map((hero) => {
            //     return (
            //         <div key={hero.name}>
            //         {/* <img src = {hero.image.url} className="hero-image"></img> */}
            //         <p>{hero.name}</p>
            //         {/* <button onClick={() => viewSuperHeroDetails(hero)}>View details</button> */}
            //     </div>
            //   )
            // })
        }
        </div>
    )
}

export default Heroes;