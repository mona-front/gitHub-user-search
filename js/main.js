
// define variable
const state=document.querySelector(".state")
const body=document.querySelector("body")
const client_id = "Iv1.4ef43884abcd35a9";
const client_secret = "34979db0810d3be33c9b4e1a03505d82540b9e71";
const input_search=document.querySelector(".search")
const input_button=document.querySelector(".button")
const info_name=document.querySelector(".infoName")
const info_username=document.querySelector(".infoUserName")
const date_join=document.querySelector(".dateCreate")
const loc=document.querySelector("#location")
const social=document.querySelector("#social")
const adress_url=document.querySelector("#githubUrl")
const user_company=document.querySelector("#company")
const image_profile=document.querySelector(".imageProfile")
const desc_bio=document.querySelector(".desc_detail")
const count_repos=document.querySelector(".repo")
const count_follower=document.querySelector(".follower")
const count_following=document.querySelector(".following")
const search_result=document.querySelector(".result")
// **************************************************************

// change color state
state.onclick=function(){
    const changeState=body.classList.toggle("dark")
    // changeState.addEventListener("load" , ()=>{
      //  localStorage.setItem("mode",changeState);
        // console.log("hi")
      // })
      
        // localStorage.getItem("mode");
      
      // document.addEventListener("DOMContentLoaded",()=>{
        
      
      // })
   if(state.innerText=="Dark")
    state.innerText="LIGHT"
    else
        state.innerText="DARK"  

      
}


// **************************************************************

// make an API call
// use async await
const fetchUsers = async (user) => {
  // use fetch API
  const api_call = await fetch(`https://api.github.com/users/${user}?client_id=${client_id}&client_secret${client_secret}`);
  // convert the call into JSON
  const data = await api_call.json();
  // return an object with the key called data & setting its value to const data
  // if key & value pairs are the same, simply call data once
  return { data }
};

// calls fetchUsers function
const showData = () => {
  fetchUsers(input_search.value).then((response) => {
    // short Date
    const date=`${response.data.created_at}`;
    var convertedStartDate = new Date(date);
    var month = convertedStartDate.getMonth() + 1
    var day = convertedStartDate.getDay();
    var year = convertedStartDate.getFullYear();
    var shortStartDate = year + "/" + month + "/" + day;
   
  
    // validation Show Information
    if(input_search.value===response.data.login){
        info_name.innerHTML = `${response.data.name}`
        info_username.innerHTML = `${response.data.login}`
        adress_url.innerHTML = `<a href="${response.data.html_url}" id ="adressUrl">${response.data.html_url}</a>`
        desc_bio.innerHTML = `${response.data.bio}`
        count_repos.innerHTML = `${response.data.public_repos}`
        count_follower.innerHTML = `${response.data.followers}`
        count_following.innerHTML = `${response.data.following}`
        social.innerHTML = `${response.data.twitter_username}`
        user_company.innerHTML = `${response.data.company}`
        date_join.innerHTML =shortStartDate
        loc.innerHTML = `${response.data.location}`
        image_profile.innerHTML= `<img src=${response.data.avatar_url} alt="profile" class=profile/>`;
          console.log(response)
    }
    else
        search_result.innerHTML="no results";
  
  })
};

// event press Button Search
input_button.addEventListener("click", () => {
    showData();
})
// event press key Enter for Searching

 function keypreeEvent(event) {
  if (event.keyCode===13) 
    showData();
}