
let cadastros =  [ 

    {nome:"Diego",sobrenome:"Goes",email:"diegogoessg@gmail.com",senha:"papel123",Rg:"752845090138",cep:27253123,bairro:"Monte Castelo",rua:"Ghandi",cidade:"Volta Redonda",estado:"RJ",perguntaDeSeguranca:"pizza"},
    {nome:"Isac",sobrenome:"silva",email:"isac@gmail.com",senha:"isac123",Rg:"176106764034",cep:83604514,bairro:"Batel",rua:"Rua Mário do Nascimento Camargo",cidade:"Campo Largo",estado:"PR",perguntaDeSeguranca:"pizza"},
    {nome:"Camila",sobrenome:"Trizoto",email:"camilag@gmail.com",senha:"camila123",Rg:"45406313061",cep:38410302,bairro:"Laranjeiras",rua:"Rua do Adolescente",cidade:"Uberlândia",estado:"MG",perguntaDeSeguranca:"pizza"},
    {nome:"Kituxi",sobrenome:"carvalho",email:"kituxi@gmail.com",senha:"kituxi123",Rg:"19130868017",cep:45600363,bairro:"Mangabinha",rua:"Quadra M",cidade:"Itabuna",estado:"BA",perguntaDeSeguranca:"pizza",},
    {nome:"Verginia",sobrenome:"nascimento",email:"verginia@gmail.com",senha:"verginia123",Rg:"13867675066",cep:41710650,bairro:"Boca do Rio",rua:"Rua da Baixa Fria",cidade:"Salvador",estado:"BA",perguntaDeSeguranca:"pizza"},
    {nome:"LuizCurintias",sobrenome:"Henrique",email:"LuizH@gmail.com",senha:"pizzanopote",Rg:"13867675066",cep:78135661,bairro:"Santa Inês",rua:"Rua General Ciro Sodré",cidade:"Várzea Grander",estado:"MT",perguntaDeSeguranca:"pizza"},
    {nome:"Anafada",sobrenome:"Beatriz",email:"AnaB@gmail.com",senha:"euacreditoemfadas",Rg:"13867675058",cep:41710650,bairro:"Vila Nova",rua:"Rua da Baixa Fria",cidade:"Salvador",estado:"BA",perguntaDeSeguranca:"pizza"},
    {nome:"Usuariomaster",sobrenome:"Obama",email:"eusouocara@gmail.com",senha:"vemquetem",Rg:"13867675066",cep:29147326,bairro:"Glória",rua:"Rua São Pedro",cidade:"Cariacica",estado:"ES",perguntaDeSeguranca:"pizza"},
  
] 
 
 
 ////////////função para verificar usuários/////////////
function verificaUsuarios(){

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
        alert("conta não cadastrada")
    }

  }
 
$('#botaoEntrar').click(()=>{
    
    verificaUsuarios()
})


$('a:first').click(()=>{
    
    verificaUsuarios()
})  

$('input').keyup((e)=>{
    if(e.keyCode === 13){
        verificaUsuarios()
    }
})









 