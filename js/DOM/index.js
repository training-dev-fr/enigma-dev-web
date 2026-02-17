let user = {
    name: "Alex Martin",
    job: "Web Developer",
    bio: "Passionate about coding and creating user-friendly websites. Loves coffee and travel.",
    data: {
        follower: "2.5k",
        like: 350,
        joined: 2020 
    }
};

let element = document.querySelector('.card');

let price = document.createElement('div');
price.innerHTML = "13.95€";

element.appendChild(price);
