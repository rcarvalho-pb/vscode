interface Usuarios{
    name: string
    role?: string
    id: number

    getName():string;

    setName(newName: string): void;
}

const user: Usuarios = {
    name: "Ramon",
    id: 1,

    getName(){
        return this.name;
    },
    
    
}

console.log(user.getName())