(function(name, module, context){
	
	if(window.define)
		define([], module);
	else
		context.router = module();

})('router', function(){


	var router={};
	router ={
		routes:{
			 "":"updatePatient"
			,"updatePatient": "updatePatient"
			,"medicalDetails":"updatePatientMedicalDetails"
		}
	   ,handleEvent: function(event){
	   		var parent =  filo.router;
	   		var route = location.hash.replace("#", "").trim()
	   		parent[ parent.routes[route] ]();	
	   		//alert('inside the rouer');
	   		//alert(location.hash);		
	   }
	   ,updatePatient: function(){
	   		var scriptTag =  document.createElement('script');

	   		var callBackFunction = function(event){
	   			var patientUpdateHTML = filo.template.patientUpdate.patientUpdate;
	   			var formContainerEle =  document.getElementsByClassName("formContainer")[0];
	   			formContainerEle.innerHTML = patientUpdateHTML;

	   			var eleIDArr=[
 							{eleId:"update", event:"click"},
 							{eleId:"cancel", event:"click"}
 				];
 				filo.updatePatient.init(eleIDArr);
	   		};	

	   		scriptTag.onload = callBackFunction;
	   		scriptTag.type="text/javascript";
	   		scriptTag.src = "./updatePatient.js";

	   		
	   		document.getElementsByTagName("head")[0].appendChild(scriptTag);

	   		
	   		//alert('call the updatepatient function');
	   }
	   ,updatePatientMedicalDetails: function(){
	   				var scriptTag =  document.createElement('script');

	   		var callBackFunction = function(event){
	   			var patientMedicalDetailsHTML = filo.template.patientDetails.patiendMedicalDetails;
	   			var formContainerEle =  document.getElementsByClassName("formContainer")[0];
	   			formContainerEle.innerHTML = patientMedicalDetailsHTML;

	   			var eleIDArr=[
 							{eleId:"update", event:"click"},
							{eleId:"cancel", event:"click"},
							{eleId:"addMedicines", event:"click"},
							{eleId:"addAppliances", event:"click"}
 				];
 				filo.patientDetails.init(eleIDArr); 
	   		};	

	   		scriptTag.onload = callBackFunction;
	   		scriptTag.type="text/javascript";
	   		scriptTag.src = "./patientMedicalDetails.js";

	   		
	   		document.getElementsByTagName("head")[0].appendChild(scriptTag);
	   } 	
	   ,init: function(){
	   		window.addEventListener('hashchange', this, false);
		}
	};


	return router;

}, filo);