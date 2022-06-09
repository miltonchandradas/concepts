const cds = require("@sap/cds");

module.exports = cds.server;

const { DemoService } = cds.requires;
if (!DemoService.credentials) cds.requires.messaging = false;
