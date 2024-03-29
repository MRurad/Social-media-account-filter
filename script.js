const users = [
  {
    name: { title: "Mr", first: "Nikolaj", last: "Hansen" },
    picture: "https://randomuser.me/api/portraits/men/1.jpg",
    location: {
      city: "Bykle",
      country: "Norway",
    },
  },
  {
    name: { title: "Mr", first: "Alexis", last: "Hale" },
    picture: "https://randomuser.me/api/portraits/men/2.jpg",
    location: {
      city: "Canberra",
      country: "Australia",
    },
  },
  {
    name: { title: "Mr", first: "Connor", last: "Bradford" },
    picture: "https://randomuser.me/api/portraits/men/3.jpg",
    location: {
      city: "Ottawa",
      country: "Canada",
    },
  },
  {
    name: { title: "Mr", first: "Sidney", last: "Poole" },
    picture: "https://randomuser.me/api/portraits/men/4.jpg",
    location: {
      city: "Copenhagen",
      country: "Denmark",
    },
  },
  {
    name: { title: "Ms", first: "Alexia", last: "Mills" },
    picture: "https://randomuser.me/api/portraits/women/4.jpg",
    location: {
      city: "Nassau",
      country: "Bahamas",
    },
  },
  {
    name: { title: "Ms", first: "Tiana", last: "Rivers" },
    picture: "https://randomuser.me/api/portraits/women/5.jpg",
    location: {
      city: "Washington D.C.",
      country: "United States",
    },
  },
  {
    name: { title: "Ms", first: "Haydn", last: "Hoffman" },
    picture: "https://randomuser.me/api/portraits/women/6.jpg",
    location: {
      city: "Dublin",
      country: "Ireland",
    },
  },
  {
    name: { title: "Ms", first: "Emmy", last: "Arroyo" },
    picture: "https://randomuser.me/api/portraits/women/7.jpg",
    location: {
      city: "Stockholm",
      country: "Sweden",
    },
  },
  {
    name: { title: "Ms", first: "Lyra", last: "Spencer" },
    picture: "https://randomuser.me/api/portraits/women/8.jpg",
    location: {
      city: "Madrid",
      country: "Spain",
    },
  },
  {
    name: { title: "Ms", first: "Delilah", last: "Dyer" },
    picture: "https://randomuser.me/api/portraits/women/9.jpg",
    location: {
      city: "Bern",
      country: "Switzerland",
    },
  },
];

const userlistEl = document.querySelector(".user-list");
const inputEl = document.querySelector("#filter");
let userList = [];

const displayUsers = () => {
  users.forEach((user) => {
    const li = document.createElement("li");
    li.innerHTML = ` <img src="${user.picture}" alt=""> 
    <div class="user-info">
    <h4>${user.name.first} ${user.name.last}</h4>
    <p>${user.location.city} ${user.location.country}</p>
  </div> `;

    userList.push(li);
    userlistEl.append(li);
  });
};
displayUsers();

inputEl.addEventListener("input", (e) => {
  userList.forEach((user) => {
    if (user.innerText.toLowerCase().includes(e.target.value.toLowerCase())) {
      user.classList.remove("hide");
    } else {
      user.classList.add("hide");
    }
  });
});
