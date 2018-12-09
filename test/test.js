const assert = require('assert');
const fakeTwett = require('../index');

it('function getTwetts', function(){
    fakeTwett.getTwetts().length, 5;
})

it('function addTwett', function(){
    fakeTwett.addTwett("Ciccio", "03/12/2018", "ciao belli"); 
    fakeTwett.addTwett("Turi", "04/12/2018", "ciao brutti");
    fakeTwett.addTwett("Alfio", "03/12/2018", "ciao poveri");
    fakeTwett.addTwett("Ciccio", "05/12/2018", "ciao ricchi");
    fakeTwett.addTwett("Turi", "04/12/2018", "ciao belli");
     
})

it('function deleteTwettById', function(){
    fakeTwett.deleteTwettById(3);
})

it('function findTwettByAuthor', function(){
    fakeTwett.findTweetByAuthor("Ciccio");
    assert.equal(fakeTwett.findTweetByAuthor("Ciccio").length, 1);
})

it('function putPostById', function(){
    fakeTwett.putPostById(1, "ciao simpaticoni");
    //asserisco che il post è stato cambiato
})

it('function findTwettByPost', function(){
    fakeTwett.findTwettByPost("belli");
    assert.equal(fakeTwett.findTwettByPost("belli").length, 2);
})

