// fetch("https://google.com")
// .then((result) => result.text())
// .then(data => console.log(data))
// .catch((error) => console.log(error))

async function getGoogle(){
    let result = await fetch("https://google.com");
    let data = await result.text();
    console.log(data);
}

async function getOneUser(){
    let result = await fetch("https://dummyjson.com/users/1");
    let data = await result.json();
    console.log(data);

}

async function getUsers(){
    let result = await fetch("https://dummyjson.com/users?limit=5");
    let data = await result.json();
    console.log(data);

}

getUsers();