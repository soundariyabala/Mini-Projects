const input=document.getElementById("username");
const button=document.getElementById("getdetails")
const profile=document.getElementById("profileinfo")
const repoinfo = document.getElementById("repoinfo");

//using async function to get the user input
button.addEventListener("click",async()=>{
    const result=input.value;
    // console.log(result);

//using the github api to fetch the data from server
const res=await fetch(`https://api.github.com/users/${result}`)
const data=await res.json();
// console.log(data);
getprofile(data)
getrepo(result)
})

//get profile function it is used to get the user details from the server
function getprofile(data){
    console.log(data);
    profileinfo.innerHTML=`<div class="card">
    <div class="card-img">
    <img src=${data.avatar_url}alt=${data.name}>
    </div>
    <div class="card-body">
    <div class="card-title">${data.name}</div>
    <div class="card-subheading">${data.login}</div>
    <div class="card-text">
    <p>${data.bio}</p>
    <p><i class="fa-solid fa-user-group"></i> ${data.followers} Followers ${data.following} Following</p>
    <p><i class="fa-solid fa-location-dot"></i> ${data.location}</p>
    <button>
    <a href=${data.html_url} target="_blank">Visit Profile</a>
    </button>
    </div>
    </div>
    </div>`
}

//get repositories based on the username and passing another api to get that 
async function getrepo(result) {
    const res = await fetch(`https://api.github.com/users/${result}/repos`);
    const projects = await res.json();
    for (let i = 0; i < projects.length; i++) {
      repoinfo.innerHTML += `<div class="card">
          <div class="card-body">
          <div class="card-title">${projects[i].name}</div>
          <div class="card-subHeading">${projects[i].language}</div>
          <div class="card-text">
          <button>
     <a href=${projects[i].html_url} target="_blank">Visit Repo</a>
     </button>
     </div>
     </div>
     </div>`;
    }
  }
  