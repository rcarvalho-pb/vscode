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

user: Usuarios = {
    
}