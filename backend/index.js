require("dotenv").config();
const express = require("express");
const cors = require("cors");
const dbConnection = require("./database/db");
const notesRoutes = require("./routes/notes");

const app = express();
const PORT = process.env.PORT || 5000;

// Database
dbConnection();

// middleware
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

// Router
app.use("/api/notes", notesRoutes);

app.listen(PORT, () => {
  console.log(`connected to server on PORT http://localhost:${PORT}`);
});
