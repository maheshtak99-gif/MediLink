const fs = require("fs");
if (fs.existsSync("src/app/sanctuary")) {
  fs.rmSync("src/app/sanctuary", { recursive: true, force: true });
}
