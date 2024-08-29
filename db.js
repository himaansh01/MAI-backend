const mongoose = require("mongoose");


mongoose.connect("mongodb+srv://manikantamannalliker:himaansh01@cluster0.8cdpsbn.mongodb.net/MAI_2")




const topForumSchema = new mongoose.Schema({
    name:{
        type:String
    },
    percentage:{
        type:String
    }
});

const topBrandsSchema= new mongoose.Schema({
    name:{
        type:String
    },
    percentage:{
        type:String
    }
})

const topBrandsSchema1= new mongoose.Schema({
    name:{
        type:String
    },
    percentage:{
        type:String
    }
})

const topBrandsSchema2= new mongoose.Schema({
    name:{
        type:String
    },
    percentage:{
        type:String
    }
})

const mostFrequentTopicsSchema = new mongoose.Schema({
    name:{
        type:String
    },
    value:{
        type:Number
    }
})

const csDiabetesWithWeightlossSchema = new mongoose.Schema({
    name:{
        type:String
    },
    value:{
        type:Number
    }
})
const csDiabetesSchema = new mongoose.Schema({
    name:{
        type:String
    },
    value:{
        type:Number
    }
})

const csGliptinsSchema = new mongoose.Schema({
    name:{
        type:String
    },
    value:{
        type:Number
    }
})

const sentimentAnalysisHBSchema = new mongoose.Schema({
    name:{
        type:String
    },
    positive:{
        value:Number
    },
    negative:{
        value:Number
    },
    neutral:{
        value:Number
    }
})

const websiteDiabetesWithWeightlossSchema = new mongoose.Schema({
    name:{
        type:String
    },
    value:{
        type:Number
    }
})

const websiteDiabetesSchema = new mongoose.Schema({
    name:{
        type:String
    },
    value:{
        type:Number
    }
})

const websiteGliptinsSchema = new mongoose.Schema({
    name:{
        type:String
    },
    value:{
        type:Number
    }
})

const tvAdsDiabetesWithWeightlossSchema = new mongoose.Schema({
    name:{
        type:String
    },
    value:{
        type:Number
    }
})

const tvAdsDiabetesSchema = new mongoose.Schema({
    name:{
        type:String
    },
    value:{
        type:Number
    }
})

const tvAdsGliptinsSchema = new mongoose.Schema({
    name:{
        type:String
    },
    value:{
        type:Number
    }
})

const brochureDiabetesWithweightloss= new mongoose.Schema({
    name:{
        type:String
    },
    value:{
        type:Number
    }
})

const brochureDiabetesSchema= new mongoose.Schema({
    name:{
        type:String
    },
    value:{
        type:Number
    }
})
const brochureGliptinsSchema= new mongoose.Schema({
    name:{
        type:String
    },
    value:{
        type:Number
    }
})

const verbalCommDiabeteswithWeightlossSchema= new mongoose.Schema({
    name:{
        type:String
    },
    value:{
        type:Number
    }
})

const verbalCommDiabetesSchema= new mongoose.Schema({
    name:{
        type:String
    },
    value:{
        type:Number
    }
})

const verbalCommGliptinsSchema= new mongoose.Schema({
    name:{
        type:String
    },
    value:{
        type:Number
    }
})





const topForum= mongoose.model("topForum", topForumSchema)
const topBrands = mongoose.model("topBrands", topBrandsSchema)
const topBrands1 = mongoose.model("topBrands1", topBrandsSchema)
const topBrands2 = mongoose.model("topBrands2", topBrandsSchema)
const mostFrequentTopics= mongoose.model("mostFrequentTopics", mostFrequentTopicsSchema)
const csDiabetesWithWeightloss=mongoose.model("csDiabetesWithWeightloss", csDiabetesWithWeightlossSchema)
const csDiabetes = mongoose.model("csDiabetes", csDiabetesSchema)
const csGliptins= mongoose.model ("csGliptins", csGliptinsSchema)
const sentimentAnalysisHB = mongoose.model("sentimentAnalysisHB", sentimentAnalysisHBSchema)
const websiteDiabetesWithWeightloss=mongoose.model("websiteDiabetesWithWeightloss",websiteDiabetesWithWeightlossSchema)
const websiteDiabetes = mongoose.model("websiteDiabtes", websiteDiabetesSchema)
const websiteGliptins = mongoose.model("websiteGliptins", websiteGliptinsSchema)
const tvAdsDiabetesWithWeightloss=mongoose.model("tvAdsDiabetesWithWeightloss", tvAdsDiabetesWithWeightlossSchema)
const tvAdsDiabetes=mongoose.model("tvAdsDiabetes", tvAdsDiabetesSchema)
const tvAdsGliptins=mongoose.model("tvAdsGliptins", tvAdsGliptinsSchema)
const brochureDiabetesWithWeightloss=mongoose.model("brochureDiabatesWithWeightloss", brochureDiabetesWithweightloss)
const brochureDiabetes=mongoose.model("brochureDiabates", brochureDiabetesSchema)
const brochureGliptins=mongoose.model("brochureGliptins", brochureGliptinsSchema)
const verbalCommDiabetesWithWeightloss= mongoose.model("verbalCommDiabetesWithWeightloss",verbalCommDiabeteswithWeightlossSchema)
const verbalCommDiabetes= mongoose.model("verbalCommDiabetes",verbalCommDiabetesSchema)
const verbalCommGliptins= mongoose.model("verbalCommGliptins",verbalCommGliptinsSchema) 



module.exports={
    topForum,
    topBrands,
    topBrands1,
    topBrands2,
    mostFrequentTopics,
    csDiabetesWithWeightloss,
    csDiabetes,
    csGliptins,
    sentimentAnalysisHB,
    websiteDiabetesWithWeightloss,
    websiteDiabetes,
    websiteGliptins,
    tvAdsDiabetesWithWeightloss,
    tvAdsDiabetes,
    tvAdsGliptins,
    brochureDiabetesWithWeightloss,
    brochureDiabetes,
    brochureGliptins,
    verbalCommDiabetesWithWeightloss,
    verbalCommDiabetes,
    verbalCommGliptins
}