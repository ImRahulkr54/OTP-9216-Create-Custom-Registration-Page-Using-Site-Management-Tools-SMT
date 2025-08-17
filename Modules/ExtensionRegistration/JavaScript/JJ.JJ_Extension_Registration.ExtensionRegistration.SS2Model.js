// Model.js
// -----------------------
// @module Case
define("JJ.JJ_Extension_Registration.ExtensionRegistration.SS2Model", ["Backbone", "Utils"], function(
    Backbone,
    Utils
) {
    "use strict";

    // @class Case.Fields.Model @extends Backbone.Model
    return Backbone.Model.extend({
        //@property {String} urlRoot
        urlRoot: Utils.getAbsoluteUrl(
            getExtensionAssetsPath(
                "Modules/ExtensionRegistration/SuiteScript2/ExtensionRegistration.Service.ss"
            ),
            true
        )
});
});
