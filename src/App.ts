import express from 'express';
//app

const app = express();

app.get('/', (req, res) => {
    res.send('Test');
});

app.listen(7000, () => {
    console.log('✅ Started server on port 7000.')
})