const url = 'https://genshin.jmp.blue/';

fetch(url + "characters/")
.then(data => data.json())
.then(data => {

//console.log(data);

/* /// MANAGE PAGE /// */
for (const icon of data) {
    //create list elements
let char_roster_item = document.createElement("li");
char_roster_item.className = "character__item";
//add onclick - <li class="character__item" onclick=setSlot(this)>...</li>
char_roster_item.setAttribute("onclick", "setSlot(this)");

//add character to team
let slot = document.querySelectorAll(".slot");


    slot.forEach(el => {
        
        el.addEventListener("click", ()=>{

            el.classList.add("active");

            if(el.classList.contains("active")){
                
                char_roster_item.onclick = setSlot;
                //console.log("slot ready");
                
            }
        })

    });



function setSlot(imgParent) {

    //console.log(imgParent.currentTarget.firstChild.src);

   let active = document.querySelector(".active");                        
        active.innerHTML = `<img src=${imgParent.currentTarget.firstChild.src} alt="team member icon" >`;

    document.querySelector(".active").classList.remove("active");

}



const char_roster = document.getElementById("roster");

//create list image icons
let char_roster_icon = document.createElement("img");
char_roster_icon.setAttribute("src", url + `characters/${icon}/icon-big`);

//Element background
fetch(`https://genshin.jmp.blue/characters/${icon}/`)
        .then(visions => visions.json())
        .then(visions =>{
            //console.log(visions.vision);
            char_roster_icon.classList.add(visions.vision);
            
        });

//if image is not loaded, change image or use placeholder
let retries = 0;

char_roster_icon.onerror = () =>{
    if(retries < 1){
        retries++;
        load();        
    }
    else{
        char_roster_icon.setAttribute("src", '../style/images/placeholder_char.png');
    }
    
}

function load() {
    char_roster_icon.setAttribute("src", url + `characters/${icon}/icon`);   
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



///SAVE EVENT
let saveButton = document.querySelector(".save"),
    teamName = document.getElementById("team__name"),
    member1 = document.querySelector(".member01"),
    member2 = document.querySelector(".member02"),
    member3 = document.querySelector(".member03"),
    member4 = document.querySelector(".member04"),
    db = new Localbase('teams');

    
saveButton.addEventListener("click", saveTeamCollection);


function saveTeamCollection() {

    if(teamName.value != ''){

        db.collection('teams').add({
            id: teamName.value,
            member_1: member1.firstChild.src,
            member_2: member2.firstChild.src,
            member_3: member3.firstChild.src,
            member_4: member4.firstChild.src      
        })


    } else if(teamName.value == ''){
        let error = document.querySelector(".error__name");
        error.style.display = "block";
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

//redirect to home page
const saveTeam = document.querySelector(".save");

saveTeam.addEventListener("click", ()=>{
    location.href = "../index.html";
})
