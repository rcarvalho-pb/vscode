interface Usuarios{
    name: string
    role?: string
    id: number
}

function user(user: Usuarios){
    if(user.role){
        console.log(`Bem vindo, ${user.name}, você tem acessos de ${user.role}`)
    }
}