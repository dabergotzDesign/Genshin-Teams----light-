let listOfTeams = document.getElementById("teams__list");
let maxTeams = 15;

let db = new Localbase('teams');

db.collection('teams').get().then(team => {
   
   if(team.length <= maxTeams){

      console.log(team.length);

      for (let i = 0; i < team.length; i++) {  
         
         let str1 = team[i].member_1,
            str2 = team[i].member_2,
            str3 = team[i].member_3
            str4 = team[i].member_4;

         let getName1 = str1.split('/'),
            getName2 = str2.split('/'),
            getName3 = str3.split('/'),
            getName4 = str4.split('/');

           
         let char_name1 = getName1[4],
            char_name2 = getName2[4],
            char_name3 = getName3[4],
            char_name4 = getName4[4];
         



                  
         listOfTeams.innerHTML += `
   
         <div class="team__front__container p-3">
            <h4 class="teams-name">${team[i].id}</h4>
            <div class="teams-characters">
            <figure>
            <img src="${team[i].member_1}" class="button team">
            <figcaption class="charName">${char_name1}</figcaption>
            </figure>

            <figure>
            <img src="${team[i].member_2}" class="button team">
            <figcaption class="charName">${char_name2}</figcaption>
            </figure>

            <figure>
            <img src="${team[i].member_3}" class="button team">
            <figcaption class="charName">${char_name3}</figcaption>
            </figure>

            <figure>
            <img src="${team[i].member_4}" class="button team">
            <figcaption class="charName">${char_name4}</figcaption>
            </figure>

            </div>
         </div>         
   
         `;
         
      }

   }
   else if(team.length >= maxTeams){
      document.querySelector(".add__team-btn").classList.add("disabled");
   }

})



//let TeamStore = JSON.parse(localStorage.getItem("Team"));

//loop length of localstorage (max 10), render teams (Team + ls-length)
//const maxL = 10;

/* if(localStorage != null){

   for (let i = 0; i < localStorage.length; i++) {

      listOfTeams.innerHTML += `
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
            
   }

       

}else{
   listOfTeams.innerHTML = 'No Team added';
} */







