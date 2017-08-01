$(document).ready(function(){
	//votre code
var count = 0 ;
var array = [ "coucou", "pourquoi tu reviens", "au revoir"];

$(".cake-is-a-lie").click(function(){
	count++;
	$(".counter").text(count);

	var random= Math.random() * array.length;
	var random= parseInt(random);

	if(count%20===0){
		alert(array[random]);
}



  })

});