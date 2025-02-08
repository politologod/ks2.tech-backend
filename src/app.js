const express = require('express');
const cors = require("cors");
require("dotenv").config();
const cookieParser = require("cookie-parser");


const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: process.env.FRONTEND_URL, credentials: true }));

const PORT = process.env.PORT || 777;
app.listen(PORT, () => console.log(`🚀 Server Running Successfully on http://localhost:${PORT}`));



app.get("/status", (req, res) => {
	res.status(200).json({ status: "Server is running" });
});


