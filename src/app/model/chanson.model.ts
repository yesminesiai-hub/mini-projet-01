import { Genre } from './genre.model';
export class Chanson {
  idChanson? : number;
  titre? : string;
  artiste? : string;
  duree? : number;        //en seconde ou en minute
  dateCreation? : Date;
  genre? : Genre;
}