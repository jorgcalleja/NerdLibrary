/*global QUnit*/

jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

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
		"jorgcalleja/nerd/library/test/integration/NavigationJourneyPhone",
		"jorgcalleja/nerd/library/test/integration/NotFoundJourneyPhone",
		"jorgcalleja/nerd/library/test/integration/BusyJourneyPhone"
	], function () {
		QUnit.start();
	});
});