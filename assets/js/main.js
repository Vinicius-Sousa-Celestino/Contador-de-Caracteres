function contarTexto() {
    let texto = document.form_main.texto.value;
    document.getElementById('caracteres').innerText = texto.length;
    document.getElementById('palavras').innerText = texto.length == 0 ? 0 : texto.split(/\s+/).length;
    document.getElementById('linhas').innerText = texto.length == 0 ? 0 : texto.split(/\n/).length;
}