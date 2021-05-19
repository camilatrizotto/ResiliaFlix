$('input').keyup(()=>{
   
    let input = $('input').val()
   

    let url = "http://www.omdbapi.com/?i=tt3896198&apikey=db49b5dd";

    axios.get(url+"&t="+input)

    .then(function(response){

        console.log(response.data);
        
        let img = $('#divApi').html(`<h2>${response.data.Title}<h2><img src= ${response.data.Poster}><p>${response.data.Plot}<p>`);
       
    })
   .catch(function(e){
       console.log("deu ruim")
   })


})