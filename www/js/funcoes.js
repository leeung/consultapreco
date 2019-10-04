 //funções especificas 
 var getip = function() {

 	var ip = '';
    $.getJSON("http://192.168.0.200/api/getip.php",
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