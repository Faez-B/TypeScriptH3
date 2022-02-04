interface Administrateur {
    nom : string,
    email : string ,
    ip : string ,
    dt_connexion : Date ,
    login : string,
    password : string
}

type TransitionType = Omit<Administrateur, "email" | "dt_connexion" | "login" | "password" >;

// const transition : TransitionType = {
//     nom : "syg" ,
//     ip : "cjkbdk"
// }

type TransitionNom = Pick<TransitionType, "nom">;
type TransitionNomFacultative = Partial<TransitionNom>;


interface UtilisateurAnonyme{
    nom ?:string,
    ip : string 
}
