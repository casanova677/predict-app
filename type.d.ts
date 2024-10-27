type Standing = {
    league:League;
}

type League = {
    standings: any;
    id: number,
    name: string,
    country: string,
    logo: string,
    flag: string,
    season: number,
    standing: [
        Teams[]
    ]
}

type Team = {
    rank: number,
    team:{
        id: number,
        name: string,
        logo: string,
    },
    points: number,
    goalsdiff: number,
    group: string,
    form: string,
    status: string,
    description: string,
    all: Games,
    home: Games,
    away: Games,
    update: string,

}

type Game ={
    played: number,
    win: number,
    draw: number,
    loss: number,
    goals:{
        for: number,
        against: number
    }

}

// Fixtures

type FixtureInfo = {
    id: number,
    referee: string,
    timezone: string,
    date: string,
    timestamp: number,
    periods: {
        fisrt: number,
        second: number
    },
    venue: {
        id: number,
        name: string,
        city: string
    },
    status: {
        long: string,
        short: string,
        elapsed: number
    }
}

type LeagueFixtures = {
    id: number,
    name: string,
    country: string,
    logo: string,
    flag: string,
    season: number,
    round: string
}

type Teams = {
    home: {
        id: number,
        name: string,
        logo: string,
        winner: boolean
    },
    away: {
        id: number,
        name: string,
        logo: string,
        winner: boolean
    }
}

type Goals = {
    home: number,
    away: number
}
type Score = {
    halftime: Goals,
    fulltime: Goals,
    extratime: Goals,
    penalty: Goals
}

type Fixture = {
    fixture: FixtureInfo,
    league: LeagueFixtures,
    teams: Teams,
    goals: Goals,
    score: Score
}

type AllFixtures = {
    name: string,
    fixtures: Fixture[]
}



export { Standing, Team, AllFixtures, Fixture }