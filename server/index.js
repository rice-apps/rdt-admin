const mongoose = require("mongoose");
const mongoDBURL = "mongodb+srv://tigerking:wphPpplcHRwNdv29@riceapps2020-21.ppsrv.gcp.mongodb.net/launchpad_2023";

mongoose.connect(mongoDBURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });

const start = async () => {
    try {
        await mongoose.connect(
            mongoDBURL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }).then(() => {
            const port = 3000
            const server = app.listen(port, () => {
                const addr = server.address();
                console.log(`🛸 Server listening at http://localhost:${addr.port}`);
            });
        });
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
};
start()

const User = require('./models/User');