interface Usuarios{
    name: string
    role?: string
    id: number

    getName?():string;

    setName?(newName: string): void;
}

const user: Usuarios = {
    name: "Ramon",
    id: 1,
    
}

console.log(user.getName())