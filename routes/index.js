import authenticate from "./authenticate.js";
import anonymous from "./anonymous.js";
import dashboard from "./dashboard.js";
import exam from "./exam.js";

export default (app) => {
  app.use(authenticate);
  app.use(anonymous);
  app.use(dashboard);
  app.use(exam);
};
