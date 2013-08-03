
/*
FORM-HELPERS AND VALIDATORS
*/

//form helpers
var form_helpers = {


	add_helper: function(hname,fn){
		if(!form_helpers[hname]){
			form_helpers[hname] = fn;
		}
	}
}


//mobile localizations
form_helpers.mob_localization = {

	add: function(fname,fn){
		if(!form_helpers.mob_localization[fname]){
			form_helpers.mob_localization[fname] = fn;
		}
	}

}

//form helpers end here
//validate field details
//validate 


//form validators
var form_validators  = {

	//takes a form element as argument
	//checks for input and select tags having attribute req
	//returns true if all required inputs are set
	//returns false if atleast one input is invalid
	validate: function(formel){
		formel.submit(function(){
			var flag = true;
			$('[req]',formel).each(function(index,obj){
				var tg = obj.tagName;
				//If it is input tag
				//check if the value is valid
				if(tg == "INPUT"){

					//If field empty
					if(obj.value == ""){
						$(this).addClass('errinp');
						flag = false;	
					}
				
				}
				else if(tg == "SELECT"){
					//Empty value
					if($('option:selected',$(this)).val() == ""){
						$(this).addClass('errinp');
						flag = false;
					}
				}
			});
		
			return flag;		
		});

	},


	//used to add a custom validator `validate_fn` to the form `formel`
	custom_validate: function(formel,validate_fn){
		formel.submit(function(){
			return validate_fn(formel);
		});
	},



	//Add custom field validators
	//Takes the fieldname and function as arguments
	add_custom_field_validator:function(fname,fn){
		if(!form_validators.field_validators[fname]){
			form_validators.field_validators[fname] = fn;
		}
	}
}

//field validators
//default field validators: email, mobile
form_validators.field_validators = {

}


//called when there any input field value is invalid
function error(inpel){

}

//called when an required to warn to a particular input value
function inputwarn(inpel){
	
}

//form helper code for indian mobiles
form_helpers.mobile_localization.add('mob_ind',function(inpel){
	inpel.keydown(function(event){

			


			 // Allow: backspace, delete, tab, escape, and enter
        if ( event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9 || event.keyCode == 27 || event.keyCode == 13 || 
             // Allow: Ctrl+A
            (event.keyCode == 65 && event.ctrlKey === true) || 
             // Allow: home, end, left, right
            (event.keyCode >= 35 && event.keyCode <= 39)) {
                 // let it happen, don't do anything
                 return;
        }
        else {
            // Ensure that it is a number and stop the keypress
            if (event.shiftKey || (event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105 )) {

                event.preventDefault(); 

            }   
            else{
            	if($(this).val().length >= 10){
            		event.preventDefault();
            	}
            }
        }
		});
});

//date field validator
form_validators.add_custom_field_validator('date',function(d,format,separator){
	if(!isNaN(separator)){
		return false;
	}
	datearr = d.split(separator);
	var month = datearr[format.indexOf('m')];
	var day = datearr[format.indexOf('d')];
	var year = datearr[format.indexOf('y')];

	if(month < 0 || month > 12){
	return false;
	}
	if(month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12 ){
		if(day < 0 || day > 31){
			return false;
		}
	}
	else if(month == 2){
		if(day < 0 || day > 28){
			return false;
		}
	}
	else{
		if(day < 0 || day > 30){
			return false;
		}
	}
	return true;

});


//email validator
form_validators.add_custom_field_validator('email',function(email){
   var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;  
   return emailPattern.test(email);   
});

