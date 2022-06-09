const cds = require("@sap/cds");

module.exports = async (srv) => {
   const DemoService = await cds.connect.to("DemoService");

   srv.on("someFunction", () => {
      return "New Service function...";
   });

   DemoService.on("demoEvent", (msg) =>
      console.log("3rd listener received (New Service):", msg)
   );
};
