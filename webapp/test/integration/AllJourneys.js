/*global QUnit*/

jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

// We cannot provide stable mock data out of the template.
// If you introduce mock data, by adding .json files in your webapp/localService/mockdata folder you have to provide the following minimum data:
// * At least 3 Books in the list

sap.ui.require([
	"sap/ui/test/Opa5",
	"jorgcalleja/nerd/library/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"jorgcalleja/nerd/library/test/integration/pages/App",
	"jorgcalleja/nerd/library/test/integration/pages/Browser",
	"jorgcalleja/nerd/library/test/integration/pages/Master",
	"jorgcalleja/nerd/library/test/integration/pages/Detail",
	"jorgcalleja/nerd/library/test/integration/pages/NotFound"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "jorgcalleja.nerd.library.view."
	});

	sap.ui.require([
		"jorgcalleja/nerd/library/test/integration/MasterJourney",
		"jorgcalleja/nerd/library/test/integration/NavigationJourney",
		"jorgcalleja/nerd/library/test/integration/NotFoundJourney",
		"jorgcalleja/nerd/library/test/integration/BusyJourney",
		"jorgcalleja/nerd/library/test/integration/FLPIntegrationJourney"
	], function () {
		QUnit.start();
	});
});