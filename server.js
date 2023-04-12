const Joi = require('joi');
const express = require('express');

const passwordSchema = Joi.string().min(3).max(10).alphanum();
console.log(passwordSchema.validate('fgdfgdf'));

const app = express();

app.use('*', (req,res) => {
     console.log("Was asking from brauser")
    res.send('<h1>Ну это HTML тебе в ответ</h1>')
});

const listener = app.listen(4444, () => {
   console.log(`Web-server go by port ${listener.address().port}`);
});
