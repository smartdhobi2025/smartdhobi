const express = require("express");
const cors = require("cors");
const http = require("http");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const database = require("./config/database");
const { initSocket } = require("./socket"); // 👈 import socket init

dotenv.config();

const app = express();  
const server = http.createServer(app);

// === Initialize socket.io ===
initSocket(server); // 👈 call socket setup here

// === Middleware ===
app.use(cors({
  origin: ['http://15.206.157.190:1100', 'https://smartdhobi.in'],
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
  credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

// === Connect to DB ===
database.connectDb();

// === Routes ===
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const adminRoutes = require("./routes/adminRoutes");
const providerRoutes = require("./routes/providerRoutes");
const orderRoutes = require("./routes/orderRoutes");
const reviewRoutes = require("./routes/reviewRoutes");
const paymentRoutes = require("./routes/paymentRoutes");
const notificationRoutes = require("./routes/notificationRoutes");

app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/providers", providerRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/reviews", reviewRoutes);
app.use("/api/payments", paymentRoutes);
app.use("/api/notification", notificationRoutes);

app.get("/", (req, res) => {
  res.send("Welcome to Dhobi App API");
});

// === Start server ===
const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
