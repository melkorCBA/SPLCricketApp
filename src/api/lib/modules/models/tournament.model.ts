
import mongoose from 'mongoose'

import { ITeam } from './team.model';
import { IMatch } from './match.model';
import { IStanding } from './standing.model';

export interface ITournament {
    name:string,
    matches?:IMatch[],
    teams?:ITeam[],
    standings?:IStanding

}