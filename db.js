const mongoose = require("mongoose");


mongoose.connect("mongodb+srv://manikantamannalliker:himaansh01@cluster0.8cdpsbn.mongodb.net/MAI")


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


const brochure1Schema= new mongoose.Schema({
    name:{
        type:String
    },
    value:{
        type: Number
    }
})


const brochure2Schema= new mongoose.Schema({
    name:{
        type:String
    },
    value:{
        type: Number
    }
})

const brochure3Schema= new mongoose.Schema({
    name:{
        type:String
    },
    value:{
        type: Number
    }
})


const brochure1 = mongoose.model("brochure1", brochure1Schema)
const brochure2 = mongoose.model("brochure2", brochure2Schema)
const brochure3 = mongoose.model("brochure3", brochure3Schema)
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



module.exports={
    brochure1,
    brochure2,
    brochure3,
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