const mongoose = require("mongoose");
mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useUnifiedTopology', true);

class Database {

    constructor() {
        this.connect();
    }

    connect() {
        mongoose.connect("mongodb+srv://admin:admin@twitterclonecluster.j5o8q.mongodb.net/TwitterCloneDB?retryWrites=true&w=majority")
            .then(() => {
                console.log("database connection successful");
            })
            .catch(() => {
                console.log("database connection error" + err);
            })
    }
}

module.exports = new Database(); // 誰呼叫了這個檔案，就 new 出 instance 來傳過去