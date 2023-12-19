//your JS code here. If required.

function enterMetavese() {
	const element=document.getElementById("status");
	element.outerHTML=element.outerHTML.replace(/p/g,"h1");
	element.innerText="Entered Metaverse";
}