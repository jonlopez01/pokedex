$(document).ready(function(){
    var id;
    var tipo;
    for (let i = 1; i < 151; i++) {
    //    $('#pokemon').prepend("<img id='" + i + "' src='http://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/" + i + ".png'>"); 
       $('#pokemon').append("<img id='" + i + "' src='http://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + i + ".png'>"); 
       
    }

    $('img').click(function(){
        id = $(this).attr('id');
        call(id);

        
        
    })

    function call(numId) {
        $.get("https://pokeapi.co/api/v2/pokemon/"+numId, function(poke) {
            
            $('#namePoke').html(poke.name);


            poke.types.forEach(element => {
                tipo += element.type.name + " ";
            });

            // if(poke.types.length > 1){
            //     for(var i = 0; i < poke.types.length; i++) {
            //         tipo += poke.types[i].type.name + " ";
            //     }
            //     $('#typePoke').html(tipo);
            //  }else{
            //     $('#typePoke').html(poke.types[0].type.name);
            // }
            $('#typePoke').html(tipo);
            $('#imgPoke').html("<img src='http://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/" + id + ".png'>"); 
            $('#heightPoke').html(poke.height);
            $('#weightPoke').html(poke.weight);
        }, "json");

        tipo=''; // limpiar variabble que guarda el tipo de pokemon
    }
        


}); //fin .ready