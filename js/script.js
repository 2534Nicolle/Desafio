function adicionar() { // Está dando uma função para o botão
    inputNome = document.getElementById("nome"); // Obtém o elemento de input do nome
    inputUrl = document.getElementById("url-img"); // Obtém o elemento de input da URL da imagem
    itemGroup = document.getElementById("item-group"); // Obtém o elemento onde os itens serão adicionados

    const item = document.createElement('div'); // Cria um novo elemento <div>
    item.classList.add('item'); // Adiciona a classe 'item' no <div>
    itemGroup.appendChild(item); // Adiciona o <div> dentro de itemGroup

    const imagem = document.createElement("img"); // Cria um elemento <img>
    imagem.setAttribute('src', inputUrl); // Define o atributo 'src' da imagem
    imagem.appendChild(imagem); // Está adicionando a imagem na classe imagem

    const h3 = document.createElement("h3"); // Cria um elemento <h3>
    h3.textContent = inputNome; // Define o conteúdo do <h3> como o nome inserido 
    item.appendChild(h3); // Adiciona o <h3> dentro do <div> item
}
