const express = require('express');
const bodyParser = require('body-parser');
const Sentiment = require('sentiment');
const xlsx = require('xlsx');
const cors = require('cors');
const path = require('path');
const {DiabetesDrugs, diabetesDrugs2, diabetesDrugs3, sentimentData, topBrands, topforum,  commentsData, page2data, verbalcomm1, verbalcomm2, verbalcomm3, webchart1, webchart2, webchart3, conversion, diabetesdata3, brochure1, brochure2, brochure3} =require ("./db")

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

app.get("/diabetes", async (req,res)=>{
    const response =await  DiabetesDrugs.find({})
  

    res.json({
       response
        
    })

});
app.get("/diabetes2", async (req,res)=>{
    const response = await diabetesDrugs2.find({})
    res.json({
        response
    })
})

app.get("/diabetes3", async (req,res)=>{
   
    const response = await diabetesdata3.find({})

    res.json({
    
        response
    })

});







app.get("/clusttered", async (req,res)=>{
    const response = await sentimentData.find({})

    res.json({
        response
    })
})

app.get("/topBrands", async(req,res)=>{
    const response= await topBrands.find({})
    
    res.json({
        response
    })
});

app.get("/topForum", async (req,res)=>{
    const response = await topforum.find({})
    res.json({
        response
    })
})

app.get("/conversion", async(req,res)=>{
    const response = await conversion.find({})
    res.json({
        response
    })
})

app.get("/commentsdata", async (req,res)=>{
    const response = await commentsData.find({})
    res.json({
        response
    })
})
app.get("/page2data", async (req,res)=>{
    const response = await page2data.find({})
    res.json({
        response
    })
})

app.get("/verbalcomm1", async (req,res)=>{
    const response = await verbalcomm1.find({})
    res.json({
        response
    })
})

app.get("/verbalcomm2", async (req,res)=>{
    const response = await verbalcomm2.find({})
    res.json({
        response
    })
})
app.get("/verbalcomm3", async (req,res)=>{
    const response = await verbalcomm3.find({})
    res.json({
        response
    })
})

app.get("/webChart1", async(req,res)=>{
    const response = await webchart1.find({})
    res.json({
        response
    })
})

app.get("/webChart2", async(req,res)=>{
    const response = await webchart2.find({})
    res.json({
        response
    })
})

app.get("/webChart3", async(req,res)=>{
    const response = await webchart3.find({})
    res.json({
        response
    })
})


app.get("/brochure1", async(req,res)=>{
    const response = await brochure1.find({})
    res.json({
        response
    })
})

app.get("/brochure2", async(req,res)=>{
    const response = await brochure2.find({})
    res.json({
        response
    })
})

app.get("/brochure3", async(req,res)=>{
    const response = await brochure3.find({})
    res.json({
        response
    })
})



const PORT = 5006;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
