const url = 'https://api.genshin.dev/';

fetch(url + "characters/")
.then(data => data.json())
.then(data => {

//console.log(data);

/* /// MANAGE PAGE /// */
for (const icon of data) {
    //create list elements
let char_roster_item = document.createElement("li");
char_roster_item.className = "character__item";

const char_roster = document.getElementById("roster");

//create list image icons
let char_roster_icon = document.createElement("img");
char_roster_icon.setAttribute("src", `https://api.genshin.dev/characters/${icon}/icon`);

//Element background
fetch(`https://api.genshin.dev/characters/${icon}/`)
        .then(visions => visions.json())
        .then(visions =>{
            //console.log(visions.vision);
            char_roster_icon.classList.add(visions.vision);
            
        });

//if image is not loaded, change image
char_roster_icon.onerror = () =>{
   char_roster_icon.setAttribute("src", `https://api.genshin.dev/characters/${icon}/icon-big`);
}

char_roster_icon.setAttribute("alt", icon + " icon");
char_roster_icon.className = "character__icon";
char_roster_item.appendChild(char_roster_icon);

//create list element name tags
let char_roster_name = document.createElement("p");
char_roster_name.textContent = icon;
char_roster_name.className = "character__name";
char_roster_item.appendChild(char_roster_name);

//render roster
char_roster.appendChild(char_roster_item);

}

//add team member team event

window.addEventListener('click', addTeamMember);


function addTeamMember(e) {
    if(e.target.className.indexOf("character__item")){
        let char_team_icon = e.target.parentNode.firstChild.src;

        const teamMember01 = document.querySelector(".member01"); //start
        const teamMember02 = document.querySelector(".member02"); //start
        const teamMember03 = document.querySelector(".member03"); //start
        const teamMember04 = document.querySelector(".member04"); //start
        const team_char = document.getElementsByClassName("character__item"); //confirm

        const promise01 = new Promise((resolve, reject)=>{
            teamMember01.addEventListener('click', resolve);
        });

        const promise02 = new Promise((resolve, reject)=>{
            teamMember02.addEventListener('click', resolve);
        });

        const promise03 = new Promise((resolve, reject)=>{
            teamMember03.addEventListener('click', resolve);
        });

        const promise04 = new Promise((resolve, reject)=>{
            teamMember04.addEventListener('click', resolve);
        });
        
        function onChoose(){
            console.log("choose your fighter")
        }

        //First Team Member
        async function wait_01(){
            return await promise01
            .then(()=>{
                teamMember01.addEventListener('click', ()=>{
                    team_char
                });
            })
            .catch((err)=> console.log(err));
        }

        wait_01()
        .then(() => {
            onChoose();
            teamMember01.innerHTML = `<img src="${char_team_icon}">`
        })

        //Second Team Member
        async function wait_02(){
            return await promise02
            .then(()=>{
                teamMember02.addEventListener('click', ()=>{
                    team_char
                });
            })
            .catch((err)=> console.log(err));
        }

        wait_02()
        .then(() => {
            onChoose();
            teamMember02.innerHTML = `<img src="${char_team_icon}">`
        })

        //Third Team Member
        async function wait_03(){
            return await promise03
            .then(()=>{
                teamMember03.addEventListener('click', ()=>{
                    team_char
                });
            })
            .catch((err)=> console.log(err));
        }

        wait_03()
        .then(() => {
            onChoose();
            teamMember03.innerHTML = `<img src="${char_team_icon}">`
        })

        //Fourth Team Member
        async function wait_04(){
            return await promise04
            .then(()=>{
                teamMember04.addEventListener('click', ()=>{
                    team_char
                });
            })
            .catch((err)=> console.log(err));
        }

        wait_04()
        .then(() => {
            onChoose();
            teamMember04.innerHTML = `<img src="${char_team_icon}">`
        })
    }
}


///SAVE EVENT
const saveBtn = document.querySelector(".save");

 saveBtn.addEventListener("click", saveTeam);

 function saveTeam(e) {
    const team_members = document.querySelectorAll(".team");
    let team_name = document.querySelector("#team__name").value;
    let temp_team_name = document.querySelector(".teams-name");

    teamArr = [];

    const teamObj = {
        teamName: team_name,
        team: [
            teamArr
        ]
    }

    for (let i = 0; i < team_members.length; i++) {
            let teamIcons = team_members[i].firstChild.src;
            teamArr.push(teamIcons);              
        }

    //test obj
    console.log(JSON.stringify(teamObj));
    //localStorage.setItem("Team", JSON.stringify(teamObj));

    //localStorage & Validation
    /*
    localStorage.setItem("Team_Member_1", teamArr[0]);
    localStorage.setItem("Team_Member_2", teamArr[1]);
    localStorage.setItem("Team_Member_3", teamArr[2]);
    localStorage.setItem("Team_Member_4", teamArr[3]); 
    */

    const errorName = document.querySelector(".error__name"); //Error display

    if(team_name == null || team_name == ''){
        e.preventDefault();
        document.querySelector("#team__name").style.borderColor = "red";
        //error text        
        errorName.style.display = "block";
    }else{
        if(errorName.style.display == "block"){
            errorName.style.display = "none";
        }
        temp_team_name = team_name;
        //localStorage.setItem("Team_Name", temp_team_name);  
    }

    
}

});

//Roster menu, scroll
const buttonR = document.querySelector(".slide__r");
const buttonL = document.querySelector(".slide__l");
const roster = document.getElementById("roster");

buttonR.addEventListener('click', ()=>{
    roster.scrollLeft += 80;
});

buttonL.addEventListener('click', ()=>{
    roster.scrollLeft -= 80;
});
