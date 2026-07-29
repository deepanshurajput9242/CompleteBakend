const mongoose = require("mongoose");

async function connectDB() {
    try {
        await mongoose.connect(
            // "mongodb+srv://yt:CwABTuEgqPIcEC2s@cluster0.vusgc5r.mongodb.net/project-1?retryWrites=true&w=majority&appName=Cluster0"
           "mongodb://yt:CwABTuEgqPIcEC2s@ac-iqm07jr-shard-00-00.vusgc5r.mongodb.net:27017,ac-iqm07jr-shard-00-01.vusgc5r.mongodb.net:27017,ac-iqm07jr-shard-00-02.vusgc5r.mongodb.net:27017/?ssl=true&replicaSet=atlas-a4h7l4-shard-0&authSource=admin&appName=Cluster0/project-0"
        );

        console.log("✅ Connected to MongoDB");
    } catch (err) {
        console.error("❌ MongoDB Connection Failed");
        console.error(err);
        process.exit(1);
    }
}

module.exports = connectDB;