const cds = require("@sap/cds");
const { v4: uuidv4 } = require("uuid");

module.exports = (srv) => {
   const { Employees, Departments } = srv.entities;

   srv.before("*", (req) => {
      // let results = {};
      // results.user = req.user.id;

      // if (req.user.hasOwnProperty("locale")) {
      //    results.locale = req.user.locale;
      // }
      // results.scopes = {};
      // results.scopes.identified = req.user.is("identified-user");
      // results.scopes.authenticated = req.user.is("authenticated-user");
      // results.scopes.Admin = req.user.is("Admin");
      // results.tenant = req.user.tenant;
      // console.log("User Details: ", results);
   });

   srv.on("READ", Employees, async (req, next) => {
      await next();

      // return await SELECT.from(Employees);
   });

   srv.on("READ", Departments, async (req, next) => {
      await next();

      // return await SELECT.from(Departments);

      // if (!req.query.SELECT.columns)
      //    return await next();

      // const expandIndex = req.query.SELECT.columns.findIndex(
      //    ({ expand, ref }) => expand && ref[0] === "employees"
      // );

      // if (expandIndex < 0) return await next();

      // return await SELECT.from(Departments, (department) => {
      //    department.name,
      //       department.employees((employee) => {
      //          employee.name;
      //       });
      // });
   });

   srv.on("CREATE", Employees, async (req, next) => {
      await next();
   });

   srv.on("CREATE", Departments, async (req, next) => {
      await next();

      // let { name } = req.data;
      // let { ID } = uuidv4();
      // let entry = { ID, name };
      // await INSERT.into(Departments).entries(entry);

      // return entry;
   });
};
