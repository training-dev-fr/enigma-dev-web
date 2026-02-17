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

/*
    <div class="profile">
        <div class="title">
            <h2 class="name">Alex Martin</h2>
            <h3 class="job">Web Developer</h3>
        </div>
    </div>
*/

let card = document.querySelector('.card');

// let profile = document.createElement("div");
// profile.classList.add("profile");

// let title = document.createElement("div");
// title.classList.add("title");

// let userName = document.createElement("h2");
// userName.classList.add("name");
// userName.innerHTML = user.name;
// title.appendChild(userName);

// let job = document.createElement("h3");
// job.classList.add("job");
// job.innerHTML = user.job;
// title.appendChild(job);

// profile.appendChild(title);
// card.appendChild(profile);

let profile = `<div class="profile">
        <div class="title">
            <h2 class="name">${user.name}</h2>
            <h3 class="job">${user.job}</h3>
        </div>
    </div>`;

card.innerHTML = profile;