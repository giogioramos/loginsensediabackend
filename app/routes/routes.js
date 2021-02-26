const speakeasy = require("speakeasy");
const qrcode = require("qrcode");

module.exports = function (app) {
  app.post("/sendcode", (req, res) => {
    console.log(req.body);
    let valid = speakeasy.totp.verify({
      secret: req.body.ascii,
      encoding: "ascii",
      token: req.body.code,
    });

    console.log(valid);
    res.send(valid);
  });
};
