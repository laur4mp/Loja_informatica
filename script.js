//cria um objeto produto que futuramente irá receber valores dos inputs
class Produto{
    constructor(IDProduto,nomeProduto,precoProduto,linkImg,setorProduto){
        this.IDProduto = IDProduto;
        this.nomeProduto = nomeProduto;
        this.precoProduto = precoProduto;
        this.linkImg = linkImg;
        this.setorProduto = setorProduto;
    }
        getIDProduto(){
        let IDProduto = this.IDProduto;
        return IDProduto;
    }
        getnomeProduto(){
        let nomeProduto = this.nomeProduto;
        return nomeProduto;
    }
        getprecoProduto(){
        let precoProduto = this.precoProduto;
        return precoProduto;
    }
        getlinkImg(){
        let linkImg = this.linkImg;
        return linkImg;
    }
        getsetorProduto(){
        let setorProduto = this.setorProduto;
        return setorProduto
    }

}

class Usuario{
    constructor(nomeUsuario,senha){ 
        this.nomeUsuario = nomeUsuario;
        this.senha = senha;
       }
       getUsuario(){
       let usuario = this.nomeUsuario;
       return usuario
    }
        getSenha(){
        let senha = this.senha;
        return senha
    }

        setUsuario(newUsuario){
        this.nomeUsuario = newUsuario
        console.log('Usuario alterado')
    }
        setSenha(newSenha){
        this.senha = newSenha
        console.log('senha alterada')
    }
}

class Setor{
    constructor(nomeSetor, IDSetor){
        this.nomeSetor = nomeSetor;
        this.IDSetor = IDSetor;
    }
        getNomeSetor(){
        let nomeSetor = this.nomeSetor;
        return nomeSetor;
    }
        getIDSetor(){
        let IDSetor = this.IDSetor;
        return IDSetor;
    }

        setNomeSetor(NewNomeSetor){
        this.nomeSetor = NewNomeSetor;
        console.log('troca de nome bem sucedida');
    }
        setIDSetor(NewIDSetor){
        this.IDSetor = NewIDSetor;
        console.log('troca de ID bem sucedida');
    }
}

function salvar() {
    let setores = document.getElementById('setores').innerHTML;
    localStorage.setItem("setores", `${setores}`)
}
function carregar() {
    let setores = document.getElementById('setores');
    setores.innerHTML = '';
    setores.innerHTML = localStorage.getItem('setores');
    var produtos = document.getElementsByClassName('Produto');
}
document.addEventListener("DOMContentLoaded", function() {
    carregar()
})
let us1 = new Usuario('mateus', '2222')
let acessPagloginBtn = document.getElementById("acssPaglog-in");
let containerLogIn = document.getElementById("containerLog-in");
acessPagloginBtn.addEventListener('click', ()=>{containerLogIn.className="LoginAtivo"} );

let btnLogIn = document.getElementById("login-btn");
btnLogIn.addEventListener('click', verificarLogin);

 function sairBarraDeControle(){
    let barraDeControle = document.getElementById('barraDeControle');
    barraDeControle.style.display='none';
}


function verificarLogin(){
    containerLogIn.className = 'LoginInativo';
    let usuario = document.getElementById('usuario').value;
    let senha = document.getElementById('senha').value;
    let barraDeControle = document.getElementById('barraDeControle');
    if(us1.nomeUsuario==usuario&&us1.senha==senha){
        barraDeControle.style.display='block';
    }
    else{
        alert('informe os dados corretos');
    }
    
}


//FUNÇÕES DE SETORES

//sequencia de codigo referente ao botão criarSetor da barra de controle
let btnSairMenuCriarSetor = document.getElementById('btnSairCriarSetorMenu');
btnSairMenuCriarSetor.addEventListener('click', ()=>{
    let criarSetorMenu = document.getElementById('criarSetorMenu');
    criarSetorMenu.style.display='none';
})

//pega o botão que faz a janela de criação de setor aparecer e adiciona uma função que faz essa janela aparecer
let btnMostrarMenuCriarSetor = document.getElementById('criarSetor');
btnMostrarMenuCriarSetor.addEventListener('click', ()=>{
    let menuCriarSetor = document.getElementById('criarSetorMenu');
    menuCriarSetor.style.display='block';
})
let criarSetorBtn = document.getElementById('criarSetorBtn');
criarSetorBtn.addEventListener('click', criarNovoSetor );
//pega o botão que ativa as funcões de criação e mostragem do novo setor

function mostrarNovoSetor(SetorOBJ){
    let setores = document.getElementById('setores');
    let novoSetor = document.createElement('div');
    setores.appendChild(novoSetor);
    novoSetor.className = 'Setor';
    novoSetor.id = SetorOBJ.IDSetor;
    let novoSetorNome = document.createElement('h1');
    novoSetor.appendChild(novoSetorNome);
    novoSetorNome.className='NomeSetor';
    novoSetorNome.textContent = SetorOBJ.nomeSetor;
    let novoCarousel = document.createElement('div');
    novoCarousel.className = 'Carousel';
    novoCarousel.id = (SetorOBJ.IDSetor + 'Carousel');
    novoSetor.appendChild(novoCarousel);

}

function criarNovoSetor(){
    let nomeSetor = document.getElementById('nomeSetor').value;
    let IDSetor = document.getElementById('IDSetor').value;
    let novoSetor = new Setor(nomeSetor,IDSetor);
    let barraDeControle = document.getElementById('barraDeControle');
    if(nomeSetor!==null&&IDSetor!==null)
    mostrarNovoSetor(novoSetor);
    else{
        alert('insira informações validas')
    }
    salvar()
}



//sequencia de codigo referente ao botão excluirSetor da barra de controle
let excluirSetorBtn = document.getElementById('excluirSetorBtn');
excluirSetorBtn.addEventListener('click', excluirSetor);

let btnMostrarMenuExcluirSetor = document.getElementById('excluirSetor');
btnMostrarMenuExcluirSetor.addEventListener('click', ()=>{
    let menuExcluirSetor = document.getElementById('excluirSetorMenu');
    menuExcluirSetor.style.display='block';
})

let btnSairMenuexcluirSetor = document.getElementById('btnSairExcluirSetorMenu');
btnSairMenuexcluirSetor.addEventListener('click', ()=>{
    let excluirSetorMenu = document.getElementById('excluirSetorMenu');
    excluirSetorMenu.style.display='none';
})

function excluirSetor(){
    
    let IDSetorASerExcluido = document.getElementById('IDSetorASerExcluido').value;
    if(IDSetorASerExcluido!==null){
    let setorASerExcluido = document.getElementById(IDSetorASerExcluido);
    let paiSetor = document.getElementById('setores');
    let barraDeControle = document.getElementById('barraDeControle');
    paiSetor.removeChild(setorASerExcluido);
    }
    else(alert('insira informações validas'))
    salvar();
}



//sequencia de codigo referente ao botão editarSetor da barra de controle
let btnMostrarMenudEditarSetor = document.getElementById('editarSetor');
btnMostrarMenudEditarSetor.addEventListener('click', ()=>{
    let menudEditarSetor = document.getElementById('editarSetorMenu');
    menudEditarSetor.style.display='block';
})

let btnSairMenuEditarSetor = document.getElementById('btnSairEditarSetorMenu');
btnSairMenuEditarSetor.addEventListener('click', ()=>{
    let editarSetorMenu = document.getElementById('editarSetorMenu');
    editarSetorMenu.style.display='none';
})

let editarSetorBtn = document.getElementById('editarSetorBtn');
editarSetorBtn.addEventListener('click', editarSetor);

function editarSetor(){
    let IDSetorASerEditado = document.getElementById('IDSetorASerEditado').value;
    let novoIDSetor = document.getElementById('novoIDSetor').value;
    let novoNomeSetor = document.getElementById('novoNomeSetor').value;
    let setor = document.getElementById(IDSetorASerEditado);
    if(novoIDSetor!==undefined||novoIDSetor!==null||novoIDSetor!==""){
        let nomeAntigo = setor.querySelector('h1');
        nomeAntigo.textContent = novoNomeSetor;    
    }
    if(novoNomeSetor!==null){
        setor.id = novoIDSetor;   
    }
    salvar()
}



//FUNÇÕES DE PRODUTOS

/*Botões*/
let btnMostrarMenuCriarProduto = document.getElementById('criarProduto');
btnMostrarMenuCriarProduto.addEventListener('click', ()=>{
    let menuCriarProduto = document.getElementById('criarProdutoMenu');
    menuCriarProduto.style.display='block';
})

let btnSairMenuCriarProduto = document.getElementById('btnSairCriarProdutoMenu');
btnSairMenuCriarProduto.addEventListener('click', ()=>{
    let criarProdutoMenu = document.getElementById('criarProdutoMenu');
    criarProdutoMenu.style.display='none';
})

let criarProdutoBtn = document.getElementById('criarNovoProdutoBtn');
criarProdutoBtn.addEventListener('click', criarNovoProduto);

//funcões de criação e mostragem do novo produto
function MostrarNovoProduto(ProdutoObj){
    let setor = document.getElementById(ProdutoObj.setorProduto);
    let carouselSetor = document.getElementById(`${ProdutoObj.setorProduto}Carousel`);
    let produtoContainer = document.createElement('div');
    carouselSetor.appendChild(produtoContainer);
    produtoContainer.className='Produto';
    produtoContainer.id=ProdutoObj.IDProduto;
    let containerImg = document.createElement('div');
    containerImg.className='Imagem';
    let imgProduto = document.createElement('img');
    imgProduto.setAttribute('src', ProdutoObj.linkImg);
    imgProduto.setAttribute('class', 'ImagemProduto');
    containerImg.appendChild(imgProduto);
    produtoContainer.appendChild(containerImg);
    let containerNome = document.createElement('div');
    containerNome.setAttribute('class', 'Nome');
    produtoContainer.appendChild(containerNome);
    let pNome = document.createElement('p');
    pNome.className='PNome';
    pNome.id = 'pNome';
    pNome.textContent=ProdutoObj.nomeProduto;
    containerNome.appendChild(pNome);
    let containerPreco = document.createElement('div');
    containerPreco.className='Preco';
    let PPreco = document.createElement('p');
    PPreco.className='PPreco';
    PPreco.id ='pPreco';
    PPreco.textContent= 'R$:' + ProdutoObj.precoProduto;
    containerPreco.appendChild(PPreco);
    produtoContainer.appendChild(containerPreco);
    let containerComprar = document.createElement('div');
    let btnComprar = document.createElement('a');
    btnComprar.textContent='Falar com o vendedor';
    containerComprar.className='Comprar';
    btnComprar.setAttribute('href', 'https://wa.me/553398757763');
    containerComprar.appendChild(btnComprar);
    produtoContainer.appendChild(containerComprar);
    salvar();
}

function criarNovoProduto(){
    let IDProduto = document.getElementById('IDProduto').value;
    let nomeProduto = document.getElementById('nomeProduto').value;
    let precoProduto = document.getElementById('precoProduto').value;
    let linkImg = document.getElementById('linkImg').value;
    let IDSetorProduto = document.getElementById('IdSetorProduto').value; 
    
    if(IDProduto!==null&&nomeProduto!==null&&precoProduto!==null&&linkImg!==null&&IDSetorProduto){
    let produto = new Produto(IDProduto,nomeProduto,precoProduto,linkImg,IDSetorProduto);
    MostrarNovoProduto(produto);
    }
    else{
        alert('insira informações validas');
    }
    salvar();
}

/*Botões*/
let btnMostrarMenuExcluirProduto = document.getElementById('excluirProduto');
btnMostrarMenuExcluirProduto.addEventListener('click', ()=>{
    let menuExcluirProduto = document.getElementById('excluirProdutoMenu');
    menuExcluirProduto.style.display='block';
})

let btnSairMenuExcluirProduto = document.getElementById('btnSairExcluirProdutoMenu');
btnSairMenuExcluirProduto.addEventListener('click', ()=>{
    let excluirProdutoMenu = document.getElementById('excluirProdutoMenu');
    excluirProdutoMenu.style.display='none';
})

let excluirProdutoBtn = document.getElementById('excluirProdutoBtn');
excluirProdutoBtn.addEventListener('click', excluirProduto);

function excluirProduto(){
    let IDProdutoASerExcluido = document.getElementById('IDProdutoASerExcluido').value;
    if(IDProdutoASerExcluido!==null){
    let produtoASerExcluido = document.getElementById(IDProdutoASerExcluido);
    produtoASerExcluido.remove();
    }
    else{
        alert('insira informações validas')
    }
    salvar();
}

/*Botões*/
let btnMostrarMenuEditarProduto = document.getElementById('editarProduto');
btnMostrarMenuEditarProduto.addEventListener('click', ()=>{
    let menuEditarProduto = document.getElementById('editarProdutoMenu');
    menuEditarProduto.style.display='block';
})

let btnSairMenuEditarProduto = document.getElementById('btnSairEditarProdutoMenu');
btnSairMenuEditarProduto.addEventListener('click', ()=>{
    let editarProdutoMenu = document.getElementById('editarProdutoMenu');
    editarProdutoMenu.style.display='none';
})

let editarProdutoBtn = document.getElementById('editarProdutoBtn');
editarProdutoBtn.addEventListener('click', editarProduto);
function editarProduto(){
    let IdProdutoAEditar = document.getElementById('IDProdutoASerEditado').value;
    let produtoASerEditado = document.getElementById(IdProdutoAEditar);
    let sla = produtoASerEditado
    let novoNome = document.getElementById('novoNomeProduto').value;
    let novoID = document.getElementById('novoIDProduto').value;
    let novoPreco = document.getElementById('novoPrecoProduto').value;
    let novaImagem = document.getElementById('novoLinkImgProduto').value;
    if(novoNome!==null){
        let nomecontainer = produtoASerEditado.getElementById('pNome');
        nomecontainer.querySelector('p');
    }
    if(novoID!==null){
    produtoASerEditado.id = novoID;
    }
    if(novaImagem!==null){
       let imgASerEditada = produtoASerEditado.querySelector('img');
       imgASerEditada.setAttribute('src', novaImagem);
    }
    salvar();
}
