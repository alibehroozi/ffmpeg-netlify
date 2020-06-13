const ffmpeg = require("@ffmpeg-installer/ffmpeg");

exports.handler = () => {
  console.log(ffmpeg);
  return {
    statusCode: 200,
    body: "hi",
  };
};
