$('input').keyup(()=>{
   
    let input = $('input').val()
   

    let url = "http://www.omdbapi.com/?i=tt3896198&apikey=db49b5dd";

    axios.get(url+"&t="+input)

    .then(function(response){
        $('#boxApiContainer').css('display','flex')
        console.log(response.data);
        //////pegando tags para importar os dados da api////////
        let api = $('#divApiInfos')
        let img = $('#poster');
        let titulo = $('#apiTitulo');
        let genero = $('#apiGenero');
        let tempo = $('#apiTempo');
        let sinopse = $('#apiSinopse');
        ////////////importando os dados para suas devidas tags////////
        api.addClass('divApiInfos')
        img.attr('src',response.data.Poster).addClass('poster')
        titulo.html(response.data.Title).addClass('apiTitulo')
        genero.html(response.data.Genre).addClass('apiGenero')
        tempo.html(response.data.Runtime).addClass('apiTempo')
        sinopse.html(response.data.Plot).addClass('apiSinopse')
    })
   .catch(function(e){
       console.log("deu ruim")
   })


})

$(window).scroll(()=>{
    $('#boxApiContainer').css('display','none')
})


