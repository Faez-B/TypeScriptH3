interface Administrateur {
    nom : string,
    email : string ,
    ip : string ,
    dt_connexion : Date ,
    login : string,
    password : string
}

type UtilisateurAnonyme = Partial<Pick<Administrateur, "nom" | "ip">>;


// const user : UtilisateurAnonyme = {
//     nom : "bjhb",
//     ip : "kjckj"
// }
