import clientPromise from '../../lib/mongodb';

export default async (req, res) => {

    const client = await clientPromise;

    const db = client.db("test");
    const id = 2728229
    const video = await db
        .collection("api-links")
        .findOne({[`${id}.id`]: id})
    res.json(video);
    return video
};











