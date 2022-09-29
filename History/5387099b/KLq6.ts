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

    getId(): number{
        return this.#id;
    }

    getEmail(): string{
        return this.#email;
    }

    setName(name: string): void{
        this.#name = name;
    }

    setId(id: number): void{
        this.#id = id;
    }

    setName(name: string): void{
        this.#name = name;
    

}