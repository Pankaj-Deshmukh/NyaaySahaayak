const express = require('express');
const bodyParser = require('body-parser');
const { MongoClient } = require('mongodb');

const app = express();
const port = process.env.PORT || 3000;
const url = 'mongodb://localhost:27017/';
const databaseName = 'NHK_dataset';

app.set('view engine', 'hbs');
app.use(bodyParser.urlencoded({ extended: true }));

const connectToDatabase = async () => {
    return MongoClient.connect(url);
};

app.post('/submit', async (req, res) => {
    try {
        if (!req.body || !req.body.textInput) {
            // Handle the case where req.body or req.body.textInput is undefined
            return res.status(400).send("Bad Request: Missing or invalid input.");
        }

        const userInput = req.body.textInput;
        const userArray = userInput.split(' ');


        const client = await connectToDatabase();
        const database = client.db(databaseName);
        const collection = database.collection('everything1models');

        let data = [];

        for (let element of userArray) {
            const ans = await collection.find({ "keywords": { $regex: `${element}`, $options: 'i' } }).toArray();
            if (ans.length !== 0) {
                data.push(ans);
            }
        }

        let newarr = [].concat(...data);

        client.close();
        
        const keywordCounts = {};

        for (const obj of newarr) {
            const keyword = obj.keywords;

            if (keyword !== undefined) {
                keywordCounts[keyword] = (keywordCounts[keyword] || 0) + 1;
            }
        }

        // Find the highest occurring keywords
        const maxCount = Math.max(...Object.values(keywordCounts));
        const maxKeywords = Object.keys(keywordCounts).filter(keyword => keywordCounts[keyword] === maxCount);

         // Find the document(s) with the highest number of keywords
         const documentsWithMaxKeywords = newarr.filter(obj => obj.keywords && obj.keywords.split(' ').length >= maxCount);

        console.log('maxCount:', maxCount);
console.log('Keyword counts:', keywordCounts);


        res.status(200).json({
            // highest_occuring_keywords: maxKeywords,
            documents_with_highest_keywords: documentsWithMaxKeywords[0]
        });

        // res.json(newarr);
        
    } catch (error) {
        console.error("Error:", error);
        res.status(500).send("Internal Server Error");
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
