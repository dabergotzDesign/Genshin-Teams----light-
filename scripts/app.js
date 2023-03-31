let listOfTeams = document.getElementById("teams__list");

let TeamStore = JSON.parse(localStorage.getItem("Team"));

//loop length of localstorage (max 10), render teams (Team + ls-length)
const maxL = 10;



if(localStorage != null){
   listOfTeams.innerHTML = `
<div class="team__front__container p-3">
   <h4 class="teams-name">${TeamStore.teamName}</h4>
   <div class="teams-characters">
   <img src="${TeamStore.team[0]}" alt="${TeamStore.teamName} Member" class="button team">
   <img src="${TeamStore.team[1]}" alt="${TeamStore.teamName} Member" class="button team">
   <img src="${TeamStore.team[2]}" alt="${TeamStore.teamName} Member" class="button team">
   <img src="${TeamStore.team[3]}" alt="${TeamStore.teamName} Member" class="button team">
   </div>
</div>
`;
}else{
   listOfTeams.innerHTML = 'No Team added';
}







