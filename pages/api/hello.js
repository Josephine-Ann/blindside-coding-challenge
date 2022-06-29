// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { getSession } from "next-auth/react";
import { createClient } from 'pexels';

export default async function handler(req, res) {
  const query = 'nature'
  const client = createClient('563492ad6f917000010000016d090c7ee799405d8da790787155c250');
  client.videos.search({ query, per_page: 1 }).then(videos => {
    return res.status(200).json({ videos })
  })
}