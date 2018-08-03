var Kastl=[];
//var Fach= [];
var canvas;
var knopf;

var schalter=1;
var deutschFeld;
var englischFeld;
var neueKarte;
var cur_karte;
//var Karte;
var id=0;
var knopf2;
var textFach1;
var text
class Fach {
	constructor( max)
	{
	this.max=max;
	this.inhalt=[];
	}
}
//Kommentar

class Karte{
	constructor(deutsch, englisch,id)
{
this.deutsch=deutsch;
this.englisch=englisch;
this.id=id;
}
}

function setup()
{
	createCanvas(200,200);
var Fach1= new Fach(10);
Kastl.push(Fach1);
var Fach2= new Fach(20);
Kastl.push(Fach2);
var Fach3= new Fach(30);
Kastl.push(Fach3);
var Fach4= new Fach(1000);
Kastl.push(Fach4);




//noCanvas();
createP("Deutsch: ");
deutschFeld= createInput("");
createP("Englisch: ");
englischFeld= createInput("");

knopf=createButton("Karte anlegen");
knopf.mousePressed(karteAnlegen);
createP("");

knopf2=createButton("Rüberschieben");
knopf2.mousePressed(rueber);
createElement("h1","Fach1" );
textFach1=createDiv("")


}

function draw()
{
	background(200);

}



function karteAnlegen() {

neueKarte=new Karte(deutschFeld.value(), englischFeld.value(),id);
id=id+1;

Kastl[0].inhalt.push(neueKarte);

for(var i=0; i<Kastl[0].inhalt.length;i++){
textFach1.html(Kastl[0].inhalt[i].deutsch,true);

}
}
function rueber()
{

	Kastl[1].inhalt.push(Kastl[0].inhalt.shift());

}
