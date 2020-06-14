const { spawn } = require("child_process");

exports.handler = (event, context, callback) => {
  const ffmpeg = spawn("ls", []);
  ffmpeg.stderr.setEncoding("utf8");
  ffmpeg.stdout.on("data", (data) => {
    console.log(data.toString());
  });
  ffmpeg.on("close", () => {
    callback(null, { statusCode: 200, body: "hi" });
  });
};
