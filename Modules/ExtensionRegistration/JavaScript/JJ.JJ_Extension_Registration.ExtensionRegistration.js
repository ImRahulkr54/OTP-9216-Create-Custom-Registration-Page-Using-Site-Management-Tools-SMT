
define(
	'JJ.JJ_Extension_Registration.ExtensionRegistration'
,   [
		'JJ.JJ_Extension_Registration.ExtensionRegistration.View' ,

		'jj_jj_extension_registration_extensionregistration.tpl'
	]
,   function (
		ExtensionRegistrationView ,

		ExtensionRegistrationTemplate
	)
{
	'use strict';

	return  {
		mountToApp: function mountToApp (container)
		{
			// using the 'Layout' component we add a new child view inside the 'Header' existing view 
			// (there will be a DOM element with the HTML attribute data-view="Header.Logo")
			// more documentation of the Extensibility API in
			// https://system.netsuite.com/help/helpcenter/en_US/APIs/SuiteCommerce/Extensibility/Frontend/index.html
			
			/** @type {LayoutComponent} */
			var layout = container.getComponent('Layout');
			var pageTypeComponent = container.getComponent("PageType");
			
			/* if(layout)
			{
				layout.addChildView('Header.Logo', function() { 
					return new ExtensionRegistrationView({ container: container });
				});
			} */

			if (pageTypeComponent) {

				var pageType = {
          name: "Registration Page",
          view: ExtensionRegistrationView,
          routes: ["registration-page"],
          defaultTemplate: {
            name: ExtensionRegistrationTemplate,
            displayName: "Registration Page"
          },
        };

		pageTypeComponent.registerPageType(pageType);

      		}

		}
	};
});
