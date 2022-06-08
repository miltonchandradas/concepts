const cds = require("@sap/cds");
const { v4: uuidv4 } = require("uuid");

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
