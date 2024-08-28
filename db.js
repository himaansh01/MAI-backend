const mongoose = require("mongoose");


mongoose.connect("mongodb+srv://manikantamannalliker:himaansh01@cluster0.8cdpsbn.mongodb.net/MAI")



const paperworkSupportSchema = new mongoose.Schema({
    name:{
        type:String
    },
    value:{
        type:Number
    }
})

const nursingSupportSchema = new mongoose.Schema({
    name:{
        type:String
    },
    value:{
        type:Number
    }
})

const financialSupportSchema = new mongoose.Schema({
    name:{
        type:String
    },
    value:{
        type:Number
    }
})

const topforumSchema = new mongoose.Schema({
    name:{
        type:String,
    },
    percentage:{
        type: String
    }

})

const topBrandsSchema = new mongoose.Schema({
    name:{
        type:String,

    },
    percentage:{
        type: String
    }

})

const sentimentDataSchema = new mongoose.Schema({
    name:{
        type:String
    },
    positive:{
        type:Number
    },
    negative:{
        type:Number
    },
    neutral:{
        type:Number
    }
})

const conversionSchema = new mongoose.Schema({
    Content:{
        type: String
    },
    Category:{
        type:String
    }
})

const DiabetesDrugsSchema = new mongoose.Schema({
    name:{
        type:String
    },
    value:{
        type:Number
    }
})

const diabetesDrugs2Schema = new mongoose.Schema({
    name:{
        type:String
    },
    value:{
        type:Number
    }
})


const diabetesdata3Schema = new mongoose.Schema({
    name:{
        type:String
    },
    value:{
        type:Number
    }
})


const verbalcomm1Schema = new mongoose.Schema({
    name:{
        type:String
    },
    value:{
        type:Number
    }
})


const verbalcomm2Schema = new mongoose.Schema({
    name:{
        type:String
    },
    value:{
        type:Number
    }
})



const verbalcomm3Schema = new mongoose.Schema({
    name:{
        type:String
    },
    value:{
        type:Number
    }
})

const webchart1Schema = new mongoose.Schema({
    name:{
        type:String
    },
    value:{
        type:Number
    }
})


const webchart2Schema = new mongoose.Schema({
    name:{
        type:String
    },
    value:{
        type:Number
    }
})


const webchart3Schema = new mongoose.Schema({
    name:{
        type:String
    },
    value:{
        type:Number
    }
})

const commentsDataSchema = new mongoose.Schema({
    Platform:{
        type:String
    },
    Content:{
        type:String
    },
    Category:{
        type:String
    },
    Topic:{
        type:String
    },
    Subtopic:{
        type:String
    }
})

const page2dataSchema = new mongoose.Schema({
    name:{
        type:String
    },
    value:{
        type:Number
    }
})

const patientCentricitySentimentSchema= new mongoose.Schema({
    name:{
        type:String
    },
    value:{
        type:Number
    }
})

const transparencySchema= new mongoose.Schema({
    name:{
        type:String
    },
    value:{
        type:Number
    }
})

const trailSupportSchema= new mongoose.Schema({
    name:{
        type:String
    },
    value:{
        type:Number
    }
})




const trailsupport= mongoose.model("trailsupport", trailSupportSchema)
const transparency= mongoose.model("transparency", transparencySchema)
const patientCentricitySentiment= mongoose.model("patientCentricitySentiment", patientCentricitySentimentSchema)
const commentsData= mongoose.model("commentsData", commentsDataSchema)
const page2data= mongoose.model("page2data", page2dataSchema)
const webchart1=mongoose.model("webChart1", webchart1Schema)
const webchart2=mongoose.model("webchart2", webchart2Schema)
const webchart3=mongoose.model("webchart3", webchart3Schema)
const verbalcomm1=mongoose.model("verbalcomm1",verbalcomm1Schema)
const verbalcomm2=mongoose.model("verbalcomm2",verbalcomm2Schema)
const verbalcomm3=mongoose.model("verbalcomm3",verbalcomm3Schema)
const diabetesDrugs2 = mongoose.model("diabetesDrugs2", diabetesDrugs2Schema)
const DiabetesDrugs = mongoose.model("DiabetesDrugs", DiabetesDrugsSchema)
const topforum = mongoose.model("topforum", topforumSchema);
const topBrands = mongoose.model("topBrands", topBrandsSchema);
const sentimentData= mongoose.model("sentimentData", sentimentDataSchema)
const conversion= mongoose.model("conversion", conversionSchema)
const diabetesdata3 = mongoose.model("diabetesdata3", diabetesdata3Schema)
const financialsupport = mongoose.model("financialsupport",financialSupportSchema)
const paperworksupport = mongoose.model("paperworksupport",paperworkSupportSchema)
const nursingsupport = mongoose.model("nursingsupport",nursingSupportSchema)



module.exports={
    trailsupport,
    transparency,
    patientCentricitySentiment,
    financialsupport,
    paperworksupport,
    nursingsupport,
    topforum,
    topBrands,
    webchart1,
    webchart2,
    webchart3,
    verbalcomm1,
    verbalcomm2,
    verbalcomm3,
    diabetesdata3,
    sentimentData,
    page2data,
    commentsData,
    diabetesDrugs2,
    conversion,
    DiabetesDrugs
}