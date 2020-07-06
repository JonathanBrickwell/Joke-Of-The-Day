export class JokesModel {
    constructor(
        public category: string,
        public type: string,
        public joke: string,
        public flags: Flags,
        public id: number,
        public error: boolean
    ){}
}

export class Flags {
    constructor(
        public nsfw: boolean,
        public religious: boolean,
        public racist: boolean,
        public sexist: boolean,
        public political: boolean
    ) {}
}
