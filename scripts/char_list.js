

//fetch characters
const url_base = `https://genshin.jmp.blue/`; //base fetch

//Character list
fetch(url_base + "characters/")
.then(characters => characters.json())
.then(characters => {

    for (const char of characters) {
        //create list elements
        let char_list_item = document.createElement("li");
        char_list_item.className = "character__item";
        const char_list = document.getElementById("characters__list");
      
        
        //create list image icons
        let char_list_icon = document.createElement("img");
        char_list_icon.setAttribute("src", url_base + `characters/${char}/icon-big`);

    
        fetch(`https://genshin.jmp.blue/characters/${char}`)
        .then(visions => visions.json())
        .then(visions =>{
            //console.log(visions.vision);
            char_list_icon.classList.add(visions.vision);
            
        });

        //if image is not loaded, change image
        let retries = 0;

        char_list_icon.onerror = () =>{
               if(retries < 1){
                retries++;
                load();
               }
               else{
                char_list_icon.setAttribute("src", '../style/images/placeholder_char.png');
               }
        }

        function load() {
            char_list_icon.setAttribute("src", url_base + `characters/${char}/icon`);
        }

        char_list_icon.setAttribute("alt", char + " icon");
        char_list_icon.className = "character__icon";
        char_list_item.appendChild(char_list_icon);

        //create list element name tags
        let char_list_name = document.createElement("p");
        char_list_name.textContent = char;
        char_list_name.className = "character__name";
        char_list_item.appendChild(char_list_name);

        //create link to single characters
        /*
        let char_link = document.createElement("a");
        char_link.setAttribute("href", `./characters/${char}.pg.html`);
        char_list_item.appendChild(char_link);
        */

        char_list.appendChild(char_list_item);
    }
});



