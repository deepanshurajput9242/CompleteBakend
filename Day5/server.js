const app = require("./src/app");
const connectDB = require("./src/db/db");

(async () => {
    try {
        await connectDB();
        console.log("Database Connected");

        app.listen(3000, () => {
            console.log("Server is working on port 3000");
        });
    } catch (err) {
        console.error("DB Error:", err);
    }
})();