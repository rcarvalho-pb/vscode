interface Usuarios{
    name: string
    role?: string
    id: number

    getName?():string;

    setName?(newName: string): void;
}

class User implements Usuarios{
    name: string;
    role?: string | undefined;
    id: number;

    if(role){
        constructor(name: String, id: Number, role: string){
            this.name = name;
            this.id = id;
            this.role = role;
        }

    }

    constructor(nome: string, id: number){
        this.name = nome;
        this.id = id;
    }

    getName?(): string {
        throw new Error("Method not implemented.");
    }
    setName?(newName: string): void {
        throw new Error("Method not implemented.");
    }
    
}