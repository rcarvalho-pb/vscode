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

    setEmail(email: string): void{
        this.#email = email;
    }   

}

const ramon = new User("Ramon", 1, "ramon.dcarvalhoo@gmail.com")

console.log(ramon.getId())