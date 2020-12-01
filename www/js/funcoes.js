
//FECHA TELA DE CONSULTA
function fecharModal(){
  clearTimeout(objTimeOutModal);
  objTimeOutModal = setTimeout(function(){ $('.modal').modal('close'); }, timeOutModal);
  $('#ean').val("");
}

//PEGA IP DO CLIENT
var getIp = function() {
  var ip = '';
  var jqxhr = $.getJSON( getIpCliente, function() {
  }).done(function(data) {
      ip = data.ip
    })
    .fail(function() {
      ip = ''
    })
    .always(function() {
      setInfoIp(ip);
    });
}

//SETA IP NA TELA
var setInfoIp = function(ip){
  if(ip == ''){
    log("desconectado "+ip);
		$('#ip').text('IP: sem conexao');
		$('#ip').addClass('red-text text-lighten-3');
  }else{
    	log("conectado ip "+ip);
    	$('#ip').text('IP:'+ip);
    	$('#ip').removeClass('red-text text-lighten-3');
  }
}

//CAPTURA AS TECLAS
function capturaTecla(event){
  $('.modal').modal('close');       

  var numeros = [1,2,3,4,5,6,7,8,9,0];
  var tecla = event.keyCode - 48;
  
  if (numeros.indexOf(tecla) != -1 || ean.length == 13){
    
    if(ean.length != 13){
      ean = ean + String(tecla);
      $('#ean').val(ean);
    }

    if(event.keyCode == 13){
      log('Solicitando consulta, enter: '+ean);
      consultaProduto(ean);
      ean = '';
    }else if(ean.length == 13){
      log('Solicitando consulta, 13digitos: '+ean);
      consultaProduto(ean);
      ean = '';
    }
  }   
}

//EXIB LOGS
function log(msg){
  console.log(msg);
  if(gravaLog)
    $('#telaLog').append('<p class="lime-text text-darken-1">'+msg+'</p>');
}

  function consultaProduto(codBar){
    log("Consultando produto: " + codBar);
    $.ajax({
    url: getConsulta+codBar+"/null/"+versao,
    type: "get",
    dataType: "json"
    }).done(function(resposta) {
      log('4');
        console.log(JSON.stringify(resposta));
        log('return : '+ JSON.stringify(resposta));

        if(resposta.error == false){
            $('#imgProduto').attr('src','');
            $('#barra').html('');
            $('#codigo').html('');
            $('#descricao').html('');
            $('#varejo').html('');
            $('#atacado').html('');
            $('#quantidade').html('');
            $('.modal').modal('close');

            $('#imgProduto').attr('src',urlFoto+resposta.result.IMG);
            $('#barra').html(resposta.result.EAN);
            $('#codigo').html(resposta.result.CODIGO);
            $('#descricao').html(resposta.result.DESCRICAO);
            $('#varejo').html(resposta.result.VAREJO);
            $('#atacado').html(resposta.result.ATACADO);
            $('#quantidade').html(resposta.result.MENSAGEM);
            $('.modal').modal('open');
            
        }else if(resposta.error == true){
            $('#ean').val(resposta.message);
        }
        
    }).fail(function(jqXHR, textStatus ) {
      log('5');
        log("Falhou na requisição: " + textStatus);
        $('#ean').val("ERRO DE CONEXAO");
    }).always(function() {
        log("Concluido");
        log('6');
    });
    //$('#ean').val(codBar);
}