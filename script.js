function trocarImagem(){
    const Imagem = documen.getElementByid("imagem");
    Imagem.style.animation = "rotatey 1s ease";
    const imagens = ("imagem1.jpg","imagem2.jpg","imagem3.jpg");
    const src = imagem.src.split('/').pop();
    let index = imagem.indexOf(src);
    index = (index + 1)% imagens.length;
    imagem.src = imagens(index); 

    setTimer( () => (
        imagem.style.animation = "";
    ), 1000);
}