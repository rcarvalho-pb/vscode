interface Usuarios{
    name: string
    role?: string
    id: number
}

function user(user: Usuarios): string{
    if(!user.role){
        return `Bem vindo, ${user.name}, você é um usuário normal.`
    }

    return `Bem vindo, ${user.name}, privilégios de ${user.role} garantidos!`
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

console.log(user(usuario1), "\n" + user(usuario2))