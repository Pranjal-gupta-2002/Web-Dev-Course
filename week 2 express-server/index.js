import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

let users = [
  {
    name: "John",
    kidneys: [
      {
        healthy: false,
      },
    ],
  },
];

app.get("/", function (req, res) {
  const johnKidneys = users[0].kidneys;
  const numberOfKidneys = johnKidneys.length;
  let numberOfHealthyKidneys = 0;
  for (let i = 0; i < johnKidneys.length; i++) {
    if (johnKidneys[i].healthy) {
      numberOfHealthyKidneys++;
    }
  }
  const numberOfUnHealthyKidneys = numberOfKidneys - numberOfHealthyKidneys;

  res.json({
    numberOfKidneys,
    numberOfHealthyKidneys,
    numberOfUnHealthyKidneys,
  });
});

app.post("/", (req, res) => {
  const isHealthy = req.body.isHealthy;
  console.log(isHealthy);
  users[0].kidneys.push({
    healthy: isHealthy,
  });

  res.json({
    message: "done",
  });
});

app.put("/", (req, res) => {
  let atLeastOneUnHealthyKidney = false;

  for (let i = 0; i < users[0].kidneys.length; i++) {
    if (!users[0].kidneys[i].healthy) {
      atLeastOneUnHealthyKidney = true;
    }
  }
  if (atLeastOneUnHealthyKidney) {
    for (let i = 0; i < users[0].kidneys.length; i++) {
      users[0].kidneys[i].healthy = true;
    }
    res.json({
      message: "done",
    });
  } else {
    res.status(411).json({
      message: "no unhealthy kidneys",
    });
  }
});

app.delete("/", (req, res) => {
  let atLeastOneUnHealthyKidney = false;

  for (let i = 0; i < users[0].kidneys.length; i++) {
    if (!users[0].kidneys[i].healthy) {
      atLeastOneUnHealthyKidney = true;
    }
  }

  if (atLeastOneUnHealthyKidney) {
    const newKidneys = [];

    for (let i = 0; i < users[0].kidneys.length; i++) {
      if (users[0].kidneys[i].healthy) {
        newKidneys.push(users[0].kidneys[i]);
      }
    }
    users[0].kidneys = newKidneys;
    res.json({
      message: "done",
    });
  } else {
    res.status(411).json({
      message: "no unhealthy kidneys",
    });
  }
});

//listening to the server
app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});
