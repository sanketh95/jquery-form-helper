
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

					if(obj.value == ""){
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

function inputwarn(inpel){
}



