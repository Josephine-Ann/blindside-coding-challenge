import clientPromise from '../../lib/mongodb';

export default async (req, res) => {

    const client = await clientPromise;

    const db = client.db("test");
    
    const sessions = await db
        .collection("sessions")
        .find({})
        .limit(1)
        .toArray();
    res.json(sessions);
    return sessions
};











