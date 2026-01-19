const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.status(200).send('Hello World!');   
});

app.get("/user",(req,res) => {
    res.status(200).send("User Page");
});

app.get("/userdetail",(req,res) => {
    let user = {
        name:"yash",
        email:"yash@example.com",
    }
    res.status(200).json(user);
});

//3 more routes
app.get("/about",(req,res) => {
    res.status(200).send("About Page");
});
app.get("/contact",(req,res) => {
    res.status(200).send("Contact Page");
});
app.get("/services",(req,res) => {
    res.status(200).send("Services Page");
});

//7 more routes
app.get("/products",(req,res) => {
    res.status(200).send("Products Page");
});

app.get("/blog",(req,res) => {
    res.status(200).send("Blog Page");
});

app.get("/faq",(req,res) => {
    res.status(200).send("FAQ Page");
}); 

app.get("/terms",(req,res) => {
    res.status(200).send("Terms and Conditions Page");
});

app.get("/privacy",(req,res) => {
    res.status(200).send("Privacy Policy Page");
});

app.get("/careers",(req,res) => {
    res.status(200).send("Careers Page");
});

app.get("/support",(req,res) => {
    res.status(200).send("Support Page");
});

app.listen(3000, () => {
  console.log('Server is running');
});