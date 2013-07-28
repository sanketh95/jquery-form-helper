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