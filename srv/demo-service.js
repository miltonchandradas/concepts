const cds = require("@sap/cds");

module.exports = (srv) => {
   const { Employees, Departments } = srv.entities;

   srv.before("*", (req) => {
      console.log(req.user.id);
   });

   srv.on("READ", Employees, async (req, next) => {
      await next();

      // return SELECT.from(Employees);
   });

   srv.on("READ", Departments, async (req, next) => {
      await next();

      // return SELECT.from(Departments);

      // if (!req.query.SELECT.columns)
      //    return await next();

      // const expandIndex = req.query.SELECT.columns.findIndex(
      //    ({ expand, ref }) => expand && ref[0] === "employees"
      // );

      // if (expandIndex < 0) return await next();

      // return SELECT.from(Departments, (department) => {
      //    department.name,
      //       department.employees((employee) => {
      //          employee.name;
      //       });
      // });
   });
};
