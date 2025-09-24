const express = require("express");
const dotenv = require("dotenv");
const main = require('./config/db')
const authRoutes = require("./routes/userAuth");
const dashboardRouter = require ('./routes/dashBoardRoute')
const connectDB = require("./config/db");


const { notFound, errorHandler } = require("./middleware/errorHandler");


dotenv.config();

connectDB();
const app = express();
app.use(express.json());


app.use("/api/auth", authRoutes);
app.use("/api/dashboard", dashboardRouter);


app.use(notFound);

app.use(errorHandler);

main().then(()=>{
    console.log("DB connected successfully");
    app.listen(process.env.PORT, () => {
        console.log("Server is running on port 3000");
    });
}).catch(err => {
    console.error("Error", err);
}); 