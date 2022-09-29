interface Usuarios{
    name: string
    role?: string
    id: number
}

function user(user: Usuarios): void{
    if(!user.role){
        return console.log(`Bem vindo, ${user.name}, você é um usuário normal.`)
    }

    return console.log(`Bem vindo, ${user.name}, privilégios de ${user.role} garantidos!`)
}

var usuario1: Usuarios = {
    name: "Ramon",
    role: "Sudo",
    id: 1
}

var usuario2: Usuarios = {
    name: "Emilly",
    id: 2
}

user(usuario1)
user(usuario2)