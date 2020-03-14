export interface IStanding {
    logo: string,
    team: string,
    pld: number,
    w: number,
    d: number,
    l: number,
    pts: number,
    nr: number

}

export interface IMatch {


    matchNo: number,
    team1: {
        id: number,
        name: string,
        innings: number,
        toss: boolean,
        score: number,
        overs: number,
        wickets: number
    },
    team2: {
        id: number,
        name: string,
        innings: number,
        toss: boolean,
        score: number,
        overs: number,
        wickets: number
    },
    win: {
        team: string,
        des: {
            wickets: number,
            runs: number
        }
    }




}
