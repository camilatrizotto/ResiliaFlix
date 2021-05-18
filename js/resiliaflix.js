$('input').keyup(()=>{

    let input = $('input').val()
   

    let url = "http://www.omdbapi.com/?i=tt3896198&apikey=db49b5dd";

    axios.get(url+"&t="+input)

    .then(function(response){

        console.log(response.data)
        
        
       
    })



})