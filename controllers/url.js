const URL=require('../models/url')


async function generateshorturl(req, res) {
    const { nanoid } = await import('nanoid'); // Import dynamically inside the function
    const body = req.body;

    if (!body.url) return res.status(400).json({ error: "url is required" });

    const shortID = nanoid(8);
    await URL.create({
        ShortId: shortID,  
        RedirectURL: body.url, 
        
        visitHistory: [],
        createdby:req.user._id,
    });

    return res.render('home',
        { id: shortID, }
    );




}



async function time(req,res){
    const ShortId=req.params.ShortId;
    const result=await URL.findOne({ShortId})


    return res.json({totalClicks:result.visitHistory.length,analytics:result.visitHistory})
}

module.exports = { generateshorturl ,time};