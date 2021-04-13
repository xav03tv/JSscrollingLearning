
window.addEventListener("scroll",(e)=>{
    
    console.log(parseInt(window.scrollY));
    console.log("ok");
    let headerElt = document.getElementById("header");
    console.log(headerElt);
    if(window.scrollY>headerElt.clientTop){
        headerElt.classList.add("miniMenu");
    }else{
        headerElt.classList.remove("miniMenu");
    }
})


let subTitles = getSubTitle();
asideTitleUpdate(subTitles);


/* met a jour la section aside subtitle avec les sous titre 
*   en creant des liens vers le sous-titre
*/
function asideTitleUpdate(subTitles){
    let asideElt = document.getElementById("asideElt");
    //pour chaque subTitle, on cree un lien
    
    subTitles.map(subTitle => {
        let linkElt = document.createElement("a");
        //linkElt.setAttribute("id", subTitle.id)
        linkElt.setAttribute("href", "#"+subTitle.id)
        if(subTitle.tagName == "H1"){
            linkElt.setAttribute("class", "titleH1");
        }
        linkElt.innerHTML = subTitle.innerHTML;
        //On ajoute un event pour stopper le lien mais gerer mon propre scroll
        linkElt.addEventListener("click",(e) => scrollAsideManager(e));
        linkElt.scroolTo = subTitle.offsetTop;
        asideElt.appendChild(linkElt);
    })
   
}


//gere le scroll vers le titre adequat
function scrollAsideManager(e){
    e.preventDefault();
    window.scrollTo({
        top: e.target.scroolTo,
        left: 0,
        behavior: 'smooth'
      });
    
}

//recupere tous les sous-titres
function getSubTitle(){
    //Récupere la zone de contenu
    let contentElt = document.getElementById("content");
    //On récupere les éléments enfant du contenu (sous titres, paragraphes, ...)
    let allChild = contentElt.children;
    //On crée un tableau des elements du contenu afin de travailler facilement dessus
    let contentEltArr = [];
    for(let i=0; i<allChild.length;i++){
        contentEltArr.push(allChild[i]);
    }
    //On va filtrer tout les elements qui sont des sous titres
    letArrTitle = contentEltArr.filter(elt=>{

        return elt.tagName == "H2" || elt.tagName == "H1"
    })
    return letArrTitle;

}
