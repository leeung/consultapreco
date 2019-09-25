
    function getQuantidade(preco){
        quantidade = 12;
        preco  = preco.replace(',','.');
        var nPreco = parseFloat(preco.substr(2,5));
        console.log('Preco convertido: '+ nPreco);

        if(nPreco > 5 &&  nPreco <= 9.99){
            quantidade = 8;
        }  else if(nPreco > 10 &&  nPreco <= 19.99){
            quantidade = 6
        }else if(nPreco > 20 &&  nPreco <= 79.99){
            quantidade = 4
        }else if(nPreco > 80 &&  nPreco <= 99.99){
            quantidade = 3
        }else if(nPreco > 100){
            quantidade = 2
        }
        

        return quantidade;
    }

    function zeraRegistros(){
        $('#imgProduto').attr('src','');
        $('#barra').html('');
        $('#codigo').html('');
        $('#descricao').html('');
        $('#varejo').html('');
        $('#atacado').html('');
        $('#quantidade').html('');
    }
                function consultaProduto(codBar){
                        console.log("Consultando produto " + codBar);
                        $.ajax({
                        url: "http://192.168.0.200/SrvBuscaPreco/index.php",
                        //url: "http://192.168.0.125/projetos/casafreitas/srvbuscapreco/index.php",
                        type: "get",
                        data: {ean: codBar},
                        dataType: "json"

                        }).done(function(resposta) {
                            
                            //console.log(resposta);
                            //var obj = JSON.parse(resposta);
                            console.log(JSON.stringify(resposta));
                            
                            zeraRegistros();
                            console.log('Error: '+resposta.error);
                            console.log('Message: '+resposta.message);
                            if(resposta.error == false){
                                console.log(resposta.id_result[0].EAN);
                                $('#imgProduto').attr('src','http://192.168.0.200/SrvBuscaPreco/imagens/'+ resposta.CODIGO +'.jpg');
                                $('#barra').html(resposta.id_result[0].EAN);
                                $('#codigo').html(resposta.id_result[0].CODIGO);
                                $('#descricao').html(resposta.id_result[0].DESCRICAO);
                                $('#varejo').html(resposta.id_result[0].VAREJO);

                                if(resposta.id_result[0].ATACADO != ''){
                                    $('#atacado').html(resposta.id_result[0].ATACADO);
                                    $('#quantidade').html('Atacarejo partir de '+getQuantidade(resposta.id_result[0].ATACADO)+' unidades' );
                                }
                                $('.modal').modal('open');
                            }else if(resposta.error == true){
                                codBar = "";
                                $('#ean').val(resposta.message);
                            }
                            
                        }).fail(function(jqXHR, textStatus ) {
                            console.log("Falhou na requisição: " + textStatus);
                            $('#ean').val("ERRO DE CONEXAO");

                        }).always(function() {
                            console.log("Concluido");
                        });

                        codBar = "";

                        $('#ean').val(codBar);
                    }
                
           