const express = require("express");
const fileUpload = require("express-fileupload");
const helmet = require("helmet");
const path = require("path");
const config = require("./config");
const loaders = require("./loaders");
const events = require("./scripts/events");

const app = express();
const { ProjectRoutes, UserRoutes, SectionRoutes, TaskRoutes } = require("./routes");

config();
loaders();
events();

app.use("/uploads", express.static(path.join(__dirname, "./", "uploads/")));
app.use(express.json());
app.use(helmet());
app.use(fileUpload());

app.listen(process.env.APP_PORT, () => {
  app.use("/projects", ProjectRoutes);
  app.use("/users", UserRoutes);
  app.use("/sections", SectionRoutes);
  app.use("/tasks", TaskRoutes);
});
