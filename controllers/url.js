const URL=require('../models/url')


async function generateshorturl(req, res) {
    const { nanoid } = await import('nanoid'); // Import dynamically inside the function
    const body = req.body;

    if (!body.url) return res.status(400).json({ error: "url is required" });

    const shortID = nanoid(8);
    await URL.create({
        ShortId: shortID,  
        RedirectURL: body.url, 
        
        visitedHistory: [],
    });

    return res.json({ id: shortID });
}

module.exports = { generateshorturl };
