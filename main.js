"use strict";

const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];

/*-----------------------
    MY CODE - FUNCTIONS
-----------------------*/
// Funzione che converte il formato data yyyy/mm/dd in dd/mm/yyyy
function formatDate (input) {
    const datePart = input.match(/\d+/g),
    year = datePart[0],
    month = datePart[1], 
    day = datePart[2];

    return day+'-'+month+'-'+year;
}

/*-----------------
    MY CODE
-------------------*/
// Seleziono il container in cui andranno stampati i post
const container = document.getElementById("container");

for(let i=0; i<posts.length; i++){
    //Mi seleziono il template HTML del post statico
    const postTemplate = document.getElementById("post-template").content.cloneNode(true);
    const likeButton = postTemplate.querySelector(".like-button");
    const likesCounter = postTemplate.querySelector(".likes__counter strong");

    if(posts[i].author.image === null){
        // Seleziono il tag img
        const imgTag = postTemplate.querySelector('.profile-pic')
        
        // Creo un nuovo elemento DIV e gli assegno una classe
        const newItem = document.createElement('div');
        newItem.classList.add("profile-no-img");

        // Tramite questo codice prendo la prima lettera di ogni parola
        const stringName = posts[i].author.name;
        const matches = stringName.match(/\b(\w)/g);
        const acronym = matches.join('');
        newItem.innerHTML = acronym;

        // Sostituisco il tag img con il div
        imgTag.parentNode.replaceChild(newItem, imgTag);
    } else {
        postTemplate.querySelector('.profile-pic').setAttribute('src', posts[i].author.image);
    }

    postTemplate.querySelector('.post-meta__author').innerHTML = posts[i].author.name;

    postTemplate.querySelector(".post-meta__time").innerHTML = formatDate(posts[i].created);

    postTemplate.querySelector(".post__text").innerHTML = posts[i].content;

    postTemplate.querySelector(".post__image img").setAttribute('src', posts[i].media);

    likesCounter.innerHTML = posts[i].likes;

    likeButton.addEventListener("click", function(){
        if (!likeButton.classList.contains("like-button--liked")){
            likeButton.classList.add("like-button--liked");
            likesCounter.innerHTML = posts[i].likes + 1;
        } else {
            likeButton.classList.remove("like-button--liked");
            likesCounter.innerHTML = posts[i].likes;
        }
    });
    
    //Stampo il template nell'HTML
    container.append(postTemplate);
}