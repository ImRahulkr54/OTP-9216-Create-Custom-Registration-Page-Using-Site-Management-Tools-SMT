// Model.js
// -----------------------
// @module Case
define("JJ.JJ_Extension_Registration.ExtensionRegistration.Model", ["Backbone", "Utils"], function(
    Backbone,
    Utils
) {
    "use strict";

    // @class Case.Fields.Model @extends Backbone.Model
    return Backbone.Model.extend({

        
        //@property {String} urlRoot
        urlRoot: Utils.getAbsoluteUrl(
            getExtensionAssetsPath(
                "services/ExtensionRegistration.Service.ss"
            )
        )
        
});
});
