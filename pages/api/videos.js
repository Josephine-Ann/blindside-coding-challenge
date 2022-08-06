import clientPromise from '../../lib/mongodb';

async function getVideo(req,res){
    try {
        const client = await clientPromise;
        const db = client.db("test");
        let video = await db
            .collection('api-links')
            .find({'4367643.id': 4367643})

        return res.json({
            message: JSON.parse(JSON.stringify(video)),
            success: true,
        });
    } catch (error) {
        return res.json({
            message: new Error(error).message,
            success: false,
        });
    }
}

async function getVideos(req,res){
    try {
        const client = await clientPromise;
        const db = client.db("test");
        let videos = await db
            .collection('api-links')
            .findOne({[`${id}.id`]: id})
            .toArray();
        return res.json({
            message: JSON.parse(JSON.stringify(videos)),
            success: true,
        });
    } catch (error) {
        return res.json({
            message: new Error(error).message,
            success: false,
        });
    }
}

async function addVideo(req, res) {
    try {
        const client = await clientPromise;
        const db = client.db("test");
        await db.collection('api-links').insertOne(JSON.parse(req.body));
        return res.json({
            message: 'Video added successfully',
            success: true,
        });
    } catch (error) {
        return res.json({
            message: new Error(error).message,
            success: false,
        });
    }
}

export default async function handler(req, res) {
    switch (req.method) {
        case 'GET': {
            return getVideos(req, res);
        }
        case 'GET_ONE': {
            return getVideo(req, res);
        }

        case 'POST': {
            return addVideo(req, res);
        }
        
    }
}

