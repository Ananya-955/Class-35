var  database;
var form, game, player;
var gameState=0;
var playerCount=0;
var allPlayers;
var distance=0;

function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(500,500);




}

function draw(){
  background("white");
  
    
    drawSprites();
  
}

