const express = require("express");
const app = express();

const server = app.listen(5000, () => {
  console.log(" _______________________________");
  console.log("");
  console.log("| WEB-WINDOW POWERED BY EXPRESS |");
  console.log(" _______________________________");
  console.log("");
  console.log("| /./\\//? Booting Client ...... |");
  console.log("| Please be patient ........... |");
  console.log(" _______________________________");
  console.log("");
  console.log("| Use \"kill 1\" in shell if stuck|");
  console.log(" _______________________________");
});

app.get("/", (req, res) => {
  res.setHeader("Content-Type", "text/html");
  res.send(`
    <html>
      <head>
        <title>Your Web View</title>
      </head>
      <body style="margin: 0; padding: 0;">
        <iframe width="100%" height="100%" src="https://axocoder.vercel.app/" frameborder="0" allowfullscreen></iframe>
      </body>
    </html>
  `);
});
