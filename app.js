const express = require('express');
const bodyParser = require('body-parser');
const Sentiment = require('sentiment');
const xlsx = require('xlsx');
const cors = require('cors');
const path = require('path');
const {DiabetesDrugs, diabetesDrugs2, diabetesDrugs3, sentimentData, topBrands, topforum,  commentsData, page2data, verbalcomm1, verbalcomm2, verbalcomm3, webchart1, webchart2, webchart3, conversion, diabetesdata3, brochure1, brochure2, brochure3, topForum, topBrands1, topBrands2, mostFrequentTopics, csDiabetesWithWeightloss, csDiabetes, csGliptins, sentimentAnalysisHB, websiteDiabetesWithWeightloss, websiteDiabetes, websiteGliptins, tvAdsDiabetesWithWeightloss, tvAdsDiabetes, tvAdsGliptins, brochureDiabetesWithWeightloss, brochureDiabetes, brochureGliptins, verbalComm, verbalCommDiabetesWithWeightloss, verbalCommDiabetes, verbalCommGliptins} =require ("./db")

const app = express();
const sentiment = new Sentiment();

app.use(bodyParser.json());
app.use(cors());

// Updated file path
const filePath = path.join(__dirname, 'assets', 'Data.xlsx');

app.post('/analyze', (req, res) => {
    try {
        const { keyword } = req.body;

        if (!keyword) {
            return res.status(400).json({ error: 'Keyword is required' });
        }

        // Load the Excel file
        const workbook = xlsx.readFile(filePath);
        const sheet_name_list = workbook.SheetNames;
        const data = xlsx.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);

        // Assuming the messages are in a column named 'member_msg_content'
        const filteredMessages = data.filter(row => row.member_msg_content && row.member_msg_content.includes(keyword));
        const sentimentResults = { Positive: 0, Negative: 0, Neutral: 0 };

        filteredMessages.forEach(row => {
            const result = sentiment.analyze(row.member_msg_content);
            if (result.score > 0) sentimentResults.Positive++;
            else if (result.score < 0) sentimentResults.Negative++;
            else sentimentResults.Neutral++;
        });

        res.json(sentimentResults);
    } catch (error) {
        console.error('Error processing request:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


app.get("/topForums",async (req,res)=>{
    const response = await topForum.find({})
    res.json({
        response
    })
})

app.get("/topBrands",async (req,res)=>{
    const response = await topBrands.find({})
    res.json({
        response
    })
})
app.get("/topBrands1",async (req,res)=>{
    const response = await topBrands1.find({})
    res.json({
        response
    })
})
app.get("/topBrands2",async (req,res)=>{
    const response = await topBrands2.find({})
    res.json({
        response
    })
})

app.get("/mostFrequentTopics", async(req,res)=>{
    const response = await mostFrequentTopics.find({})
    res.json({
        response
    }) 
})

app.get("/csDiabetesWithWeightloss", async(req,res)=>{
    const response = await csDiabetesWithWeightloss.find({})
    res.json({
        response
    })
})

app.get("/csDiabetes", async(req,res)=>{
    const response = await csDiabetes.find({})
    res.json({
        response
    })
})

app.get("/csGliptins",async(req,res)=>{
    const response = await csGliptins.find({})
    res.json({
        response
    })
})

app.get("/sentimentAnalysisHB",async(req,res)=>{
    const response = await sentimentAnalysisHB.find({})
    res.json({
        response
    })
})

app.get("/websiteDiabetesWithWeightloss",async(req,res)=>{
    const response = await websiteDiabetesWithWeightloss.find({})
    res.json({
        response
    })
})

app.get("/websiteDiabetes",async(req,res)=>{
    const response = await websiteDiabetes.find({})
    res.json({
        response
    })
})

app.get("/websiteGliptins",async(req,res)=>{
    const response = await websiteGliptins.find({})
    res.json({
        response
    })
})

app.get("/tvAdsDiabetesWithWeightloss", async (req,res)=>{
    const response = await tvAdsDiabetesWithWeightloss.find({})
    res.json({
        response
    })
})

app.get("/tvAdsDiabetes", async (req,res)=>{
    const response = await tvAdsDiabetes.find({})
    res.json({
        response
    })
})

app.get("/tvAdsGliptins", async (req,res)=>{
    const response = await tvAdsGliptins.find({})
    res.json({
        response
    })
})

app.get("/BrochureDiabetesWithWeightloss", async (req,res)=>{
    const response = await brochureDiabetesWithWeightloss.find({})
    res.json({
        response
    })
})
app.get("/BrochureDiabetes", async (req,res)=>{
    const response = await brochureDiabetes.find({})
    res.json({
        response
    })
})

app.get("/BrochureGliptins", async (req,res)=>{
    const response = await brochureGliptins.find({})
    res.json({
        response
    })
})

app.get("/verbalCommDiabtesWithWeightloss", async(req,res)=>{
    const response = await verbalCommDiabetesWithWeightloss.find({})
    res.json({
        response
    }) 
})

app.get("/verbalCommDiabetes", async(req,res)=>{
    const response = await verbalCommDiabetes.find({})
    res.json({
        response
    }) 
})
app.get("/verbalCommGliptins", async(req,res)=>{
    const response = await verbalCommGliptins.find({})
    res.json({
        response
    }) 
})

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
