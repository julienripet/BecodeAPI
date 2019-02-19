let section = "";
let request = new XMLHttpRequest();


window.onload = function(){
    section = document.getElementsByTagName("section")[0]


    let requestURL = "https://project-622bb.firebaseio.com/BeCode.json";
    request.open("GET", requestURL, false);
    request.send();

    let data = JSON.parse( request.response);
        let containers = [] 
        let rows = document.createElement("div");
        rows.className = "row masonry";
        section.appendChild(rows);

    for(i=0;i<data.length;i++){        


        //Création des objets représentant les balises HTML
        let sectionName = document.createElement("h2");
        let history = document.createElement("p");
        let picture = document.createElement("img");
        let lienWiki = document.createElement("a");
        containers[i] = document.createElement("div");
        let marginer = document.createElement("div");
        let images = document.createElement("div");

        //Assignement aux objets des valeurs obtenues depuis l'API
        marginer.className = "marginer";
        containers[i].className = "myContainer col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-3"
        sectionName.textContent = data[i].profile.firstname + " " + data[i].profile.lastname;
        history.textContent = data[i].history;
        picture.src = data[i].image;
        picture.alt = " L'image de " + data[i].profile.firstname + " " + data[i].profile.lastname + " n'est pas actuellement disponnible. "
        lienWiki.href = data[i].wiki;
        lienWiki.textContent = data[i].profile.firstname + " " + data[i].profile.lastname;
        

        //Création des objets dans l'HTML
        rows.appendChild(containers[i]);
        containers[i].appendChild(marginer);
        marginer.appendChild(sectionName);
        marginer.appendChild(history);
        marginer.appendChild(images);
        images.appendChild(picture);
        marginer.appendChild(lienWiki);
 }   
}