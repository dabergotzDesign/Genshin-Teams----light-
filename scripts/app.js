let listOfTeams = document.getElementById("teams__list");

let teamsName = localStorage.getItem("Team_Name");
//let teamMembersIcons = localStorage.getItem("Team_Members");
let Icon_01 = localStorage.getItem("Team_Member_1");
let Icon_02 = localStorage.getItem("Team_Member_2");
let Icon_03 = localStorage.getItem("Team_Member_3");
let Icon_04 = localStorage.getItem("Team_Member_4");

let testTeam = document.getElementById("testTeams");
let testTeamStore = localStorage.getItem("Team");


if(localStorage != null){
   listOfTeams.innerHTML = `
<div class="team__container p-3 grid col">
   <h4 class="teams-name">${teamsName}</h4>
   <div class="teams-characters">
   <img src="${Icon_01}" alt="${teamsName} Member" class="button team">
   <img src="${Icon_02}" alt="${teamsName} Member" class="button team">
   <img src="${Icon_03}" alt="${teamsName} Member" class="button team">
   <img src="${Icon_04}" alt="${teamsName} Member" class="button team">
   </div>
</div>
`;
}else{
   listOfTeams.innerHTML = 'No Team added';
}

testTeam.innerHTML = `<div>${testTeamStore}</div>`


