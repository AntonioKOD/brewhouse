



export default function sportData(sport:string, date: string){
        const url = `https://v1.${sport}.api-sports.io/games?date=${date}`;
        const options = {
            method: 'GET',
            headers: {
                'x-apisports-key': process.env.API_SPORT_KEY || '',
            }
        };
        return fetch(url, options)
}

