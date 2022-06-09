const cds = require("@sap/cds");

module.exports = (srv) => {
   srv.before("*", (req) => {

      let results = {};
      results.user = req.user.id;

      if (req.user.hasOwnProperty("locale")) {
         results.locale = req.user.locale;
      }
      results.scopes = {};
      results.scopes.identified = req.user.is("identified-user");
      results.scopes.authenticated = req.user.is("authenticated-user");
      results.scopes.Admin = req.user.is("Admin");
      results.tenant = req.user.tenant;
      console.log("User Details: ", results);
   });
};
