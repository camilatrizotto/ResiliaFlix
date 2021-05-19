
let cadastros =  [ 

    {nome:"Diego",sobrenome:"Goes",email:"diegogoessg@gmail.com",senha:"papel123",Rg:"16054986708",cep:27253123,bairro:"Monte Castelo",rua:"Ghandi",cidade:"Volta Redonda",estado:"RJ"},
    {nome:"Isac",sobrenome:"silva",email:"isac@gmail.com",senha:"isac123",Rg:"16054986708",cep:27253123,bairro:"Monte Castelo",rua:"Ghandi",cidade:"Volta Redonda",estado:"RJ"},
    {nome:"Camila",sobrenome:"Trizoto",email:"camilag@gmail.com",senha:"camila123",Rg:"16054986708",cep:27253123,bairro:"Monte Castelo",rua:"Ghandi",cidade:"Volta Redonda",estado:"RJ"},
    {nome:"Kituxi",sobrenome:"carvalho",email:"kituxi@gmail.com",senha:"kituxi123",Rg:"16054986708",cep:27253123,bairro:"Monte Castelo",rua:"Ghandi",cidade:"Volta Redonda",estado:"RJ"},
    {nome:"Verginia",sobrenome:"nascimento",email:"verginia@gmail.com",senha:"verginia123",Rg:"16054986708",cep:27253123,bairro:"Monte Castelo",rua:"Ghandi",cidade:"Volta Redonda",estado:"RJ"},
  
] 
 
 
 ////////////função para verificar usuários/////////////
  $('button').click(()=>{

    let usuario = $('input:first').val();
    let senha = $('input:odd').val();
    let confirma = []
    cadastros.forEach((item)=>{

        if(item.email === usuario && item.senha === senha){
          
            let achou = 1;
            confirma.push(achou)
        }
        else{
           let nachou = 0;
           confirma.push(nachou)
        }
     
    })

   let cadastrado = confirma.reduce((x,y)=>{return x+y})

    if(cadastrado > 0){
        window.location.href="../html/resiliaflix.html"
         }
    else{
        alert("faça o cadastro")
    }


  })
 
 /////////////////função para verificar usuário btn cima/////////

 $('a:first').click(()=>{

    let usuario = $('input:first').val();
    let senha = $('input:odd').val();
    let confirma = []
    cadastros.forEach((item)=>{

        if(item.email == usuario && item.senha === senha){
          
            let achou = 1;
            confirma.push(achou)
        }
        else{
           let nachou = 0;
           confirma.push(nachou)
        }
     
    })

   let cadastrado = confirma.reduce((x,y)=>{return x+y})

    if(cadastrado > 0){
        //window.location.href="file:///C:/Users/PC/Desktop/ResiliaFlix/ProjetoFinalFlix/html/resiliaflix.html"
        window.location.href="../html/resiliaflix.html"
         }
    else{
        alert("faça o cadastro")
    }

  })
 /////////////////////
 