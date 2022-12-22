

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { embed } = req.body

  if (!embed) {
    return res.status(400).json({ error: 'Missing embed' })
  }
  
  
}


