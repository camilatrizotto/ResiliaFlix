$('input').keyup((e)=>{
    console.log(e.keyCode)
    if(e.keyCode === 13){
        //window.location.href = 'file:///C:/Users/PC/Desktop/ResiliaFlix/ProjetoFinalFlix/html/pagina2login.html'
        window.location.href = "../html/pagina2login.html"
    }
})


$('span').click(()=>{
    window.location.href= "../html/pagina2login.html"
})
