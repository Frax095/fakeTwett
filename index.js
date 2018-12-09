var twetts = [];
counter = 0;

exports.getTwetts = function() {

    return twetts;

}

exports.reset = function() {

    twetts = [];
    counter = 0;
    return twetts;

}

exports.addTwett = function(author, date, post){

    var twett = {
        id : counter++,
        author : author,
        date : date,
        post : post
    }
    twetts.push(twett);
    return twetts;

}

exports.deleteTwettById = function(id){

    for (var i=0; i< twetts.length; i++) {
        if (twetts[i].id === id) {
            twetts.splice(i ,1);
            return twetts;
        }
    }

}

exports.putPostById = function(id, putPost){

    for(var twett of twetts) {
        if(twett.id === id) {
            twett.text = putPost;
            return twett;
        }
    }

}

exports.findTweetByAuthor = function(author){

    var filteredArray = [];
    for(var twett of twetts){
        if (twett.author === author) {
            filteredArray.push(twett);
        }
    }
    return filteredArray;

}

exports.findTwettByPost = function(findWord){
    
    var filteredArrayByPost = [];
    /* la funzione split serve per dividere una frase stringa in
    un array stringe che vengono separate in base ad un separatore
    a nostra scelta che in questo caso è uno spazio (' ') */
    for(var twett of twetts) {
        for(i=0; i<twett.post.split(' ').length; i++){
            if(twett.post.split(' ')[i] === findWord){
            filteredArrayByPost.push(twett);
            }  
        } 
    }
    return filteredArrayByPost;

}

/*
            Prove delle funzioni
addTwett("Ciccio", "06/03/1995", "ciao belli");
addTwett("Ciccio", "06/03/1995", "ciao belli");
addTwett("Ciccio", "06/03/1995", "ciao brutti");
addTwett("Ciccio", "06/03/1995", "ciao ricchi");
addTwett("Affiu", "06/03/1995", "ciao poveri");
console.log(twetts);  **funziona**
console.log(findTwettByPost("belli"));  **funziona**
console.log(findTweetByAuthor("Ciccio"));  **funziona**
hhhhhhoooooou ciao!!
*/
