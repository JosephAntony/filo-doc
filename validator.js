(function(name, module, context) {
	
	if(window.define)
		define(name, [], module);	
    else
        context.validator =  module();
 
})("validator", function(){

   var validator = {};

   validator = {
 

     "Empty" : function(ele, message){
     			var msg = message || "field cannot be empty";
          var flag =  true;
     			(function(element){
            var value = element.value.trim();
            if(!element.errors)
                element.errors = [];       			
     				if(!value.length){
              if(ele.className.indexOf("borderRed") == -1)
                   ele.className += "  borderRed";
     					var errors = element.errors;
     					errors.push(message?message:element.getAttribute("name") + " " +  msg);
     					//element.setAttribute("errors");
     					flag = false;
     				}else{
              ele.className =  ele.className.replace("borderRed", "");
            }
     			})(ele);

     			return flag;
     }

   	,"Email" : function(ele, message){
               var msg = message || "invalid email format";
               var flag =  true;
               (function(element){
               		var value = element.value.trim();
                  if(!element.errors)
                      element.errors = []; 
               		var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                  if(!re.test(value)){
                        var errors = element.errors;
                        errors.push(message?message:element.getAttribute("name") + " " +  msg);
                        flag = false;

                  }
                  //return true;



               })(ele);

               //return true;
               return flag;
   	}

    ,"IsNumeric": function(event){
        var specialKeys = new Array();
        specialKeys.push(8); //Backspace
        var keyCode = event.which ? event.which : event.keyCode
        var ret = ((keyCode >= 48 && keyCode <= 57) || specialKeys.indexOf(keyCode) != -1);  
        return ret;
    }  

   }	

   return validator;

}, filo);