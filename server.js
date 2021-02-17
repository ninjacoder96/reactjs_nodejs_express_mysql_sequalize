const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const controller = require("./controllers/tutorial.controller.js");

const run = async () => {
    const tut1 = await controller.createTutorial({
        title: "Tut#1",
        description: "Tut#1 Description",
    });
    const tut2 = await controller.createTutorial({
        title: "Tut#2",
        description: "Tut#2 Description",
    });
    const comment1 = await controller.createComment(tut1.id, {
        name: "bezkoder",
        text: "Good job!",
    });
    await controller.createComment(tut1.id, {
        name: "zkoder",
        text: "One of the best tuts!",
    });
    const comment2 = await controller.createComment(tut2.id, {
        name: "aKoder",
        text: "Hi, thank you!",
    });

    await controller.createComment(tut2.id, {
        name: "anotherKoder",
        text: "Awesome tut!",
    });
    const tut1Data = await controller.findTutorialById(tut1.id);
    console.log(
    ">> Tutorial id=" + tut1Data.id,
        JSON.stringify(tut1Data, null, 2)
    );
   
}

const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to joshua application." });
});

// set port, listen for requests
const PORT = process.env.PORT || 8080;

require("./routes/tutorial.routes")(app);
require("./routes/user_product.routes")(app);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

const db = require("./models");
// db.sequelize.sync();

db.sequelize.sync();
