const express = require('express')
const dotenv = require("dotenv");
const urlRoute = require('./routes/url');
const connecttomongo = require('./connect');
const URL = require('./models/url')
const path = require('path');
const staticroute = require('./routes/staticroute')
const userRoute = require('./routes/user');
const { userSignup } = require('./controllers/user');



dotenv.config();
const app = express();
const mongoport = process.env.mongoport;

// Connect to MongoDB 


connecttomongo(`mongodb://localhost:${mongoport}/Short-Url`)
    .then(() => {
        console.log("MongoDB is connected");
    })
    .catch((err) => {
        console.error("MongoDB connection failed:", err);
    });




app.set("view engine", "ejs");
app.set("views", path.resolve("./views"))



app.use(express.json())
//to parse form data
app.use(express.urlencoded({ extended: false }));


app.use('/url', urlRoute);
app.use('/user', userRoute);
app.use('/', staticroute);



app.get('/:ShortId', async (req, res) => {

    const ShortId = req.params.ShortId;
    const entry = await URL.findOneAndUpdate(
        { ShortId },
        { $push: { visitHistory: { timestamp: Date.now() } } },
        { new: true } // Ensures updated entry is returned
    );

    if (!entry) {
        return res.status(404).send("Short URL not found");
    }

    res.redirect(entry.RedirectURL);

});




const Port = process.env.Port

app.listen(Port, () => {
    console.log(`Server is running on port ${Port}`);
});   