interface Usuarios{
    name: string
    role?: string
    id: number

    getName?():string;

    setName?(newName: string): void;
}

class User implements Usuarios{
    
}