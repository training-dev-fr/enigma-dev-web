async function getOneUser() {
    let result = await fetch("https://dummyjson.com/users/1");
    let data = await result.json();
    return data;
}

async function getUsers() {
    let result = await fetch("https://dummyjson.com/users?limit=5");
    let data = await result.json();
    return data;
}

async function showUser() {
    let user = await getOneUser();
    let userDom = `<div class="card">
        <div class="profile">
            <div class="picture">
                <img src="${user.image}" />
            </div>
            <div class="title">
                <h2 class="name">${user.firstName} ${user.lastName}</h2>
                <h3 class="job">${user.role}</h3>
            </div>
                    <hr>
            <div class="bio">${user.email}</div>
        </div>

        <div class="action">
            <button class="follow">Follow</button>
            <button class="message">Message</button>
        </div>
        <div class="user-stats">
            <div class="stat">
                <i class="fa-solid fa-user-group"></i>
                ${user.age} ans
            </div>
            <div class="stat">
                <i class="fa-solid fa-heart"></i>
                ${user.height} m
            </div>
            <div class="stat">
                <i class="fa-regular fa-calendar-days"></i>
                ${user.weight} kg
            </div>
        </div>
    </div>`

    let content = document.querySelector('.content');
    content.innerHTML = userDom;
}

showUser();