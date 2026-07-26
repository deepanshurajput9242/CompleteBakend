const mongoose = require("mongoose");

async function connectDB() {
    try {
        await mongoose.connect(
            "mongodb+srv://yt:CwABTuEgqPIcEC2s@cluster0.vusgc5r.mongodb.net/project-1?retryWrites=true&w=majority&appName=Cluster0"
        );

        console.log("✅ Connected to MongoDB");
    } catch (err) {
        console.error("❌ MongoDB Connection Failed");
        console.error(err);
        process.exit(1);
    }
}

module.exports = connectDB;