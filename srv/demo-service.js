const cds = require("@sap/cds");

module.exports = (srv) => {
   srv.before("*", (req) => {
      console.log(req.user.id);
   });
};
