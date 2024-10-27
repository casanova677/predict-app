import { AllFixtures, Standing } from "@/type";
import getStandings from "./util/getStandings";
import StandingsAndFixtures from "./components/home/StandingsAndFixtures";
import getFituresForFiveLeagues from "./util/getFixturesForfiveLeagues";

export default async function Home() {

  const standingsData: Standing[] = await getStandings();
  const filteredFixtures: AllFixtures[] = await getFituresForFiveLeagues();


  return (
   <div className='flex flex-col w-full justify-center items-center md:p-10'>
      <StandingsAndFixtures standingsData = {standingsData} filteredFixtures = {filteredFixtures} />
   </div>
  );
}
