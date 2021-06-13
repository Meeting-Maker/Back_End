const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const { sequelize } = require("./models");
const config = require("./config/config");
const helmet = require("helmet");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
app.use(morgan("combined"));
app.use(express.json());
app.use(cors());
app.use(helmet());

const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["get", "post"],
  },
});
io.on("connection", (socket) => {
  console.log("a user has connected");
  socket.on("disconnect", (reason) => {
    console.log("An user has disconnected", reason);
    socket.disconnect();
  });
  socket.on("new-operations", function (data) {
    console.log(data);
    io.emit("new-remote-operations", data);
  });
});

server.listen(4000, () => {
  console.log("listening on *:4000");
});

require("./route")(app);

sequelize.sync().then(() => {
  app.listen(config.port);
});
