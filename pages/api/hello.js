// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import groq from 'groq'
import sanityClient from '../../client'
import client from '../../client'

export default async function handler(req, res) {
	const data = await client.fetch(groq`*[_type == "medlem"]`)
	console.log(data)

	try {
		const indexList = data.map((item) => {
			const algoliasearch = require('algoliasearch')
			const client = algoliasearch('BC0Z4HS7B1', '285796df216a570721c98b33ba986821')
			const index = client.initIndex('Members')
			const record = { objectID: item._id, name: item.name }
			index.saveObject(record).wait()
			return item
		})
		res.status(200).json(indexList)
	} catch (err) {
		res.status(500).json({ error: 'failed to load data' })
	}
}
