import "./styles/main.pcss";
if (process.env.NODE_ENV === "development") {
  require("file-loader!./index.pug");
  require("file-loader!./admin/index.pug");
}


import "./scripts/skills";
import "./scripts/active";
import "./scripts/parallax";
import "./scripts/works";
import "./scripts/reviews";