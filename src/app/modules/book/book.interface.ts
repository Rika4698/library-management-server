
export type LGenre = 'FICTION' | 'NON_FICTION' | 'SCIENCE' | 'HISTORY' | 'BIOGRAPHY' | 'FANTASY';

export interface LBook {
    title: string;
    author: string;
    genre: string;
    isbn: string;
    description?: string;
    copies: number;
    available?: boolean;
    photoUrl: string;


}


export interface IBookFilter {
  filter?: string;
  sortBy?: string;
  sort?: 'asc' | 'desc';
  limit?: string | number;
}