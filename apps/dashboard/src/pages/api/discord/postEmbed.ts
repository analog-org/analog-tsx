

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { embed } = req.body

  const { channel } = req.query

  if (!embed) {
    return res.status(400).json({ error: 'Missing embed' })
  }
  
  const disRes = await fetch(`https://discord.com/api/v10/channels/${channel}/messages`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bot ${process.env.DISCORD_BOT_TOKEN}`,
      },
      body: JSON.stringify({
        embeds: [embed],
      }),
    
    })

  const disReq = await disRes.json()

  res.status(200).json({disReq, embed, channel});
  res.status(200).json(embed);
  res.status(200).json(channel);
}


