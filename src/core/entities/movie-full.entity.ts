import {MovieEntity} from './movie.entity';

export interface MovieFullEntity extends MovieEntity {
  genres: string[];
  duration: number;
  budget: number;
  originalTitle: string;
  productionCompanies: string[];
}
