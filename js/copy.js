const btnCopiar = document.querySelector(".btn-copiar");

btnCopiar.addEventListener("click", () => {
    const texto = resultado.textContent;
    
    navigator.clipboard.writeText(texto)
        .then(() => {
            inputTexto.value = "";
            inputTexto.focus();
            resultado.textContent = "";
            
            btnCopiar.classList.add("invisivel");
        })
        //tratamento caso de algum erro
        .catch(err => {
            console.error('Erro ao copiar texto: ', err);
        });
});
