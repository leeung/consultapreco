 //funções especificas 
//var endSrvIp = 'http://192.168.0.200/buscapreco2/index.php/Consulta/getipCliente';
//var endSrvIp = 'http://192.168.0.125/projetos/casafreitas/buscapreco2/index.php/Consulta/getipCliente';

 var getIp = function() {

 	var ip = '';
    $.getJSON(getIpCliente,
      function(json) {
      	ip = json.ip;
        setInfoIp(ip);
      }
    );  
    setInfoIp(ip);  
  }

  var setInfoIp = function(ip){
	if(ip == ''){
    	console.log("desconectado "+ip);
		$('#ip').text('IP: sem conexao');
		$('#ip').addClass('red-text text-lighten-3');
    }else{
    	console.log("conectado ip "+ip);
    	$('#ip').text('IP:'+ip);
    	$('#ip').removeClass('red-text text-lighten-3');
    }
  }