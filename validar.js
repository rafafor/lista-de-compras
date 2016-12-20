$(document).ready(function() {
	$('#frmcontactar').validate(
		{
			rules: {
    
    			nombre: {
    						required : true
    							},
    			email: {
      				required: true
    							},
    comentarios : {
    		required :true
    }

     },
     	
  		messages: {
    		nombre: "Por favor especifica tu nombre",
    		email: {
      required: "Necesitamos tu correo para contactar contigo",
      email: "Tu email debe ser de la forma name@domain.com"
      },
      comentarios : "Dinos algo"
    
  }

		});
		
});