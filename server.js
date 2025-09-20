const express = require('express');
const app = express();

const PORT = process.env.PORT || 5000;

app.get("/posts" , async (req, res) => {
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=30");
        const data = await response.json();
        res.json(data);
    }catch(err){
        console.error("Error fetching posts:", err);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

//Define endpoint to fetch posts by id as query parameter
app.get("/posts/:id", async (req, res) => {
    const { id } = req.params;
    try{
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
        const data = await response.json();
        res.json(data);
    }catch(err){
        console.error("Error fetching post:", err);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
