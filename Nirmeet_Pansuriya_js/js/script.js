//Author : Nirmeet Pansuriya

$( document ).ready(function() {
    getData();
});

function getData(){
    loading();
    var script="";
        $.getJSON("team.json",function(result){
            $.each(result, function(i,data){
                 script+=`<h2>${data.name}</h2>
                   <h5></h5>${data.position}</h5>
                   <p>${data.bio}</p>
               `
            });
            $('#team').html(script);
       });
      
    }
   
function loading(){

    $("#team").html("Loading...");

}