// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import groq from 'groq'
import sanityClient from '../../client'

export default function handler(req, res) {
	// get data from cms

	const data = sanityClient.fetch(groq`*[_type == "medlem"]`).then((response) => {
		const algoliasearch = require('algoliasearch')
		const client = algoliasearch('BC0Z4HS7B1', '285796df216a570721c98b33ba986821')
		const index = client.initIndex('Members')

		response.map((item) => {
			const record = { objectID: item._id, name: item.name }
			index.saveObject(record).wait()
			console.log(item)
		})
	})
	console.log(data)

	res.status(200).json('data')
}
