const fs = require('node:fs');

let charData = '{"characters": { "name":"albedo", "vision":"geo" }}';

const obj = JSON.parse(charData);


const content = 
            `<!DOCTYPE html>
            <html lang="en">
            <head>
              <meta charset="UTF-8">
              <meta http-equiv="X-UA-Compatible" content="IE=edge">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <link rel="stylesheet" href="../../style/style.css">
              <link rel="preconnect" href="https://fonts.googleapis.com">
              <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
              <link href="https://fonts.googleapis.com/css2?family=Alegreya&display=swap" rel="stylesheet">
              <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
              <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous"></script>
              <script src="../../scripts/char_list.js" defer></script>
              <script src="../../scripts/char_page_creation.js" defer></script>
              <title>Genshin Teams (Light) - Experimental</title>
            </head>
            <body>
                <header>
                  <nav class="navbar navbar-expand-lg">
                      <div class="container-fluid">
                        <h1 class="navbar-brand">Genshin Teams - Character List</h1>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                          <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                          <div class="navbar-nav">
                            <a class="nav-link" href="../../index.html">Home</a>
                            <a class="nav-link text-muted" aria-current="characters" href="../characters.cnt.html">List of Characters</a>
                          </div>
                        </div>
                      </div>
                    </nav>
              </header>
                <main class="char__main ${obj.characters.vision}">
                    <div class="char__container">
                    <div class="char__data">
                    <h1>${obj.characters.name}</h1>                    
                    <img class="char__vision" src="https://genshin.jmp.blue/elements/${obj.characters.vision}/icon" alt="${obj.characters.name} Element Icon">
                    </div>
                    <img class="char__portrait" src="https://genshin.jmp.blue/characters/${obj.characters.name}/gacha-splash" alt="${obj.characters.name} Character">
                    </div>
                </main>
            </body>
            </html>`;

try {
  fs.writeFileSync('./content/characters/albedo.html', content);
  // file written successfully
} catch (err) {
  console.error(err);
}


