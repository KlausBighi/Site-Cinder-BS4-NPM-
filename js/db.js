var db = openDatabase('Comentarios', '2.0', 'Mybase', 2 * 1024 * 1024);

db.transaction(function(tx){
    tx.executeSql("CREATE TABLE IF NOT EXISTS coments (id INTERGER PRIMARY KEY, nome TEXT, telefone TEXT, email TEXT, comentario TEXT)");
});



    function salvar(){
        var nome = document.getElementById('inputNome').value;
        var telefone = document.getElementById('inputCel').value;
        var email = document.getElementById('inputEmail').value;
        var comentario = document.getElementById('inputComent').value;
    
            db.transaction(function(tx){
            tx.executeSql("INSERT INTO coments(nome,telefone,email,comentario) VALUES (?,?,?,?)",[nome, telefone, email, comentario]);
        });
    }