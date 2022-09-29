interface Usuarios{
    name: string
    role?: string
    id: number

    getName():string;
}

const user: Usuarios = {
    name: "Ramon",
    id: 1,

    getName(){
        return this.name;
    }

    setName():void {}
}

console.log(user.getName())