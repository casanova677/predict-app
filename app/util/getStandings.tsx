
import { Standing } from "@/type";
import moment from "moment"
import next from "next";
import { revalidatePath } from "next/cache";
import { json } from "stream/consumers";
import { USE_SAMPLE } from "../sampleData/useSample";
import getStandingsSample from "../sampleData/getStandingsSample";

export default async function getStandings(): Promise<Standing[]> {

    if (USE_SAMPLE) {
        return getStandingsSample ();
        
    }
    const currentTime = moment();
    const month = currentTime.month();
    let year;

    if (month <= 6) {
        year = currentTime.year() - 1;
    } else {
        year = currentTime.year();
    }

    const API_KEY: string = process.env.API_KEY as string;
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '51aab16abdmshb9add073dd66e54p1f7ba4jsn2ea19d3fcc44',
            'x-rapidapi-host': 'api-football-v1.p.rapidapi.com'
        },
        next:{
            revalidate: 60* 60 *24
        }
    };

    const standings: Standing[] = [];

    const leagues = [
        {name: 'EPL' , id:39},
        {name: 'La Liga', id: 140 },
        {name: 'BundesLiga', id: 78},
        {name: 'Seria A' , id: 135},
        {name: 'ligue1' , id: 61}
    ]

    for (const league of leagues){
        let url = `https://api-football-v1.p.rapidapi.com/v3/standings?season=${year}&league=${league.id}`
       
        await fetch(url,options)
            .then (response => response.json())
            .then(data =>{
                const standing = data.response[0];
                if (standing) {
                    standings.push(standing);
                    
                }
            })
            .catch(err => {
                console.log(`Error fetching ${league.name} standings $(err)`);
            })

            

    } 
    return standings;
}