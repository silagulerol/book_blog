// we're going to put all of our usernames and passwords in config file, because we do not want to haerd code them 
const config = {
    db:{
        username:"admin",
        password:"sygXwMA6KSzhsspp",
        connection:"mongodb+srv://admin:sygXwMA6KSzhsspp@cluster0.xsjajbn.mongodb.net/demo?retryWrites=true&w=majority&appName=Cluster0",
    }
}

// this line tells JS: take whatever i am passing in this config
// and export it whenever i try and import this package
module.exports = config;