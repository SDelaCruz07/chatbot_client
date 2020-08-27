function Verificar(){
    var User=$('#inputUser').val();
    var Phone=$('#inputPhone').val();
    if (!$('#inputCheck').prop('checked')){
        $('#contenido').text("PORFAVOR ACEPTE TERMINOS Y CONDICIONES");
        $('#alertar').modal('show');
    } else{
        if(User.length==0 || Phone.length==0 ){
            $('#contenido').text("INGRESE TODOS LOS DATOS, PORFAVOR");
            $('#alertar').modal('show');
        }else{
            if(User.length>=100){
                $('#contenido').text("PORFAVOR, INGRESAR UN USUARIO MAS PEQUEÑO");
                $('#alertar').modal('show');
            }else{
                if(Phone.length!=9 || isNaN(Phone)){
                    $('#contenido').text("EN NUMERO INGRESAR SOLO 9 DIGITOS");
                    $('#alertar').modal('show');
                }
                else{
                        $.ajax({
                        data: $('#form_crear').serialize(), 
                        url: $('#form_crear').attr('action'),
                        type:$('#form_crear').attr('method'),
                       success: function(response){
                             var respuesta=response.mensaje
                             if (respuesta==1){
                                $('#logrado').modal('show'); 
                             }else{
                                $('#contenido').text("EL NUMERO INGRESADO YA ESTA REGISTRADO");
                                $('#alertar').modal('show');
                             }
                        },
                        error: function(error){
                            $('#contenido').text("LO SENTIMOS, HUBO UN ERROR EN EL SERVIDOR");
                            $('#alertar').modal('show');
                            console.log(error);
                       }
                   }); 
                }
            }

        }
    }
}