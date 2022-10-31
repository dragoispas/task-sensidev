export type Character = {
    id: number;
    name: string;
    gender: string;
    status: string;
    image: string;
    location: {
        name: string;
    };
    species: string;
    origin: {
        name: string;
    };
    episode: string[];
};

export type Episode = {
    id: number;
    name: string;
    episode: string;
}
