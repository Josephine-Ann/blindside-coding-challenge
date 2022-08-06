import clientPromise from '../../lib/mongodb';

export default async (req, res) => {

    const client = await clientPromise;

    const db = client.db("test");

    const users = await db
        .collection("users")
        .find({})
        .toArray();
    res.json(users);
    return users
};











