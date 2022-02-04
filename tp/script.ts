// https://jsonplaceholder.typicode.com/users
// export {};
interface User {
    email : string ,
    contenu : string ,
    name : string
}

let data : any;

function render(data : any){
    let html = "<div class='row'>"

    data.forEach( user => {
        html += `
        <article class="col-4">
            <h2 class="text-primary">${user.name}</h2>
            <h6>${user.email}</h6>
            <h3 class="text-warning">Titre des articles rédigés : </h3>
            <p>${user.adress}</p>
        </article>
        `
    } )
    const content = document.querySelector(".content") as HTMLDivElement;
    html += "</div>";
    content.innerHTML = html
}

document.addEventListener("DOMContentLoaded", async () => {
    const reponse = await fetch("https://jsonplaceholder.typicode.com/users") 
    data = (await reponse.json()) as Array<Partial<User>>;

    console.log(data);
    
    render(data)
})

const form = document.querySelector("form") as HTMLFormElement;

form.addEventListener("submit" , (e : Event) => {
    e.preventDefault()
    const input = document.querySelector("#auteur") as HTMLInputElement ;

    if (input.value != ""){
        const filtre = data.filter( user =>  user.name.toLowerCase().includes(input.value.toLowerCase()) )
        render(filtre)
    }
})