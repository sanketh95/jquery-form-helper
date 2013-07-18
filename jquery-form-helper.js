
/*
FORM-HELPERS AND VALIDATORS

*/

//form helpers
var form_helpers = {


	add_helper: function(hname,fn){
		if(!form_helpers.custom_helpers[hname]){
			form_helpers.custom_helpers[hname] = fn;
		}
	}
}

form_helpers.custom_helpers = {}

//mobile localizations
form_helpers.mob_localization = {

	mob_ind: function(inpel){

		//source : http://stackoverflow.com/questions/995183/how-to-allow-only-numeric-0-9-in-html-inputbox-using-jquery
		//allows only 10 numbers according to indian mobile standard
		//mobile helper for indian mobile numbers
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
	},	

	//default mobile helper
	//set to india
	//to change the default replace this.mob_ind(inpel) with other mobile helpers
	mob: function(inpel){
		this.mob_ind(inpel);
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
		var flag = true;
		$('[req]',formel).each(function(index,obj){
			var tg = obj.tagName;

			//If it is input tag
			//check if the value is valid
			if(tg == "INPUT"){
				if(obj.value == ""){
					flag = false;	
				}
				
			}
		});
		
		return flag;
	},


	//used to add a custom validator `validate_fn` to the form `formel`
	custom_validate: function(formel,validate_fn){
		formel.submit(function(){
			return validate_fn();
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

	//Validate email field
	//return true if valid else false
	email: function(email){

	}

}

//mobile regexes
//for different countries
form_validators.field_validators.mobile_validator = {
	//mobile validation for indian mobile numbers
	mob_ind: function(){

	}
}

//called when there any input field value is invalid
function error(inpel){

}



