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

    constructor(){}


    getName?(): string {
        throw new Error("Method not implemented.");
    }
    setName?(newName: string): void {
        throw new Error("Method not implemented.");
    }
    
}