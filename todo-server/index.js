const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());
console.log("Hello World");
//

let todos = [
  {
    id: 1,
    description: "Learn Node.js",
  },
];

app.get("/todos", (req, res) => {
  res.status(200).json({
    todos,
  });
});

app.get("/todos/:id", (req, res) => {
  const { id } = req.params;
  const todo = todos.find((todo) => todo.id.toString() === id.toString());

  if (!todo) {
    res.status(404).json({
      message: "Todo not found",
    });
  }

  res.status(200).json({
    todo,
  });
});

app.post("/todos", (req, res) => {
  const { id, description } = req.body;

  if (!id || !description) {
    res.status(400).json({
      success: false,
      message: "Missing required fields",
    });
  }

  todos.push({
    id,
    description,
  });
  res.status(200).json({
    success: true,
    message: "Todo created successfully",
    todos,
  });
});

app.put("/todos/:id", (req, res) => {
    const {id} = req.params;
  const { description } = req.body;

  if (!id || !description) {
    res.status(400).json({
      success: false,
      message: "Missing required fields",
    });
  }

  const todo = todos.find((todo) => todo.id.toString() === id.toString());

  if (!todo) {
    res.status(404).json({
      success: false,
      message: "Todo not found",
    });
  }
  todo.description = description;
  res.status(200).json({
    success: true,
    message: "Todo updated successfully",
    todos,
  });
});

app.delete("/todos/:id",(req,res)=>{
    const {id} = req.params;
    if(!id){
        res.status(400).json({
            success: false,
            message: "Missing required fields",
          });
    }
    todos = todos.filter((todo)=> todo.id.toString() !== id.toString());
    res.status(200).json({
        success: true,
        message: "Todo deleted successfully",
        todos,
      });
})

app.all("*", (req, res) => {
  res.status(404).json({
    message: "Not found",
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
