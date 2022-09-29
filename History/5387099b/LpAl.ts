class User{
    #name: string;
    #id: number;
    #email: string;

    constructor(name: string, id: number, email: string){
        this.#name = name;
        this.#id = id;
        this.#email = email;
    }

    getName(): string{
        return this.#name;
    }

}