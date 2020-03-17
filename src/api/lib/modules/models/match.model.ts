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
