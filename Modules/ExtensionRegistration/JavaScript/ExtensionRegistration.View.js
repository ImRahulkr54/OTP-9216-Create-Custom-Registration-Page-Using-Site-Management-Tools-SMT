// @module JJ.JJ_Extension_Registration.ExtensionRegistration
define('JJ.JJ_Extension_Registration.ExtensionRegistration.View'
,	[
	'jj_jj_extension_registration_extensionregistration.tpl'
	
	,	'JJ.JJ_Extension_Registration.ExtensionRegistration.SS2Model'
	
	,	'Backbone'
    ]
, function (
	jj_jj_extension_registration_extensionregistration_tpl
	
	,	ExtensionRegistrationSS2Model
	
	,	Backbone
)
{
    'use strict';

	// @class JJ.JJ_Extension_Registration.ExtensionRegistration.View @extends Backbone.View
	return Backbone.View.extend({

		template: jj_jj_extension_registration_extensionregistration_tpl

	,	initialize: function (options) {

			/*  Uncomment to test backend communication with an example service
				(you'll need to deploy and activate the extension first)
			*/

			// this.model = new ExtensionRegistrationModel();
			// var self = this;
         	// this.model.fetch().done(function(result) {
			// 	self.message = result.message;
			// 	self.render();
      		// });
		}

	,	events: {
		}

	,	bindings: {
		}

	, 	childViews: {

		}

		//@method getContext @return JJ.JJ_Extension_Registration.ExtensionRegistration.View.Context
	,	getContext: function getContext()
		{
			//@class JJ.JJ_Extension_Registration.ExtensionRegistration.View.Context
			this.message = this.message || 'Hello World!!'
			return {
				message: this.message
			};
		}
	});
});
