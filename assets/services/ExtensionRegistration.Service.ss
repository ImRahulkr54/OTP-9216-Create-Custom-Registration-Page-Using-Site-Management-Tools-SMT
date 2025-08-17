
function service(request, response)
{
	'use strict';
	try 
	{
		require('JJ.JJ_Extension_Registration.ExtensionRegistration.ServiceController').handle(request, response);
	} 
	catch(ex)
	{
		console.log('JJ.JJ_Extension_Registration.ExtensionRegistration.ServiceController ', ex);
		var controller = require('ServiceController');
		controller.response = response;
		controller.request = request;
		controller.sendError(ex);
	}
}