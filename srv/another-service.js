const cds = require("@sap/cds");

module.exports = async (srv) => {
   const externalService = await cds.connect.to("DemoService");
   srv.on("getName", () => {
      return "Milton";
   });

   externalService.on("demoEvent", (msg) =>
      console.log("2nd listener received (Another Service):", msg)
   );
};
