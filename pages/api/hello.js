// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import groq from 'groq'
import sanityClient from '../../client'
import client from '../../client'

export async function getServerSideProps() {
	const algoliasearch = require('algoliasearch')
	const client = algoliasearch('BC0Z4HS7B1', '285796df216a570721c98b33ba986821')
	const index = client.initIndex('Members')
	const response = await sanityClient.fetch(groq`*[_type == "medlem"]`).then((item) => {
		item.map((item) => {
			const record = { objectID: item._id, name: item.name }
			index.saveObject(record).wait()
			console.log(item)
		})
		return response
	})

	return {
		props: {
			response,
		},
	}
}

export default async function handler(req, res) {
	try {
		const result = await getServerSideProps()

		res.status(200).json({ result })
	} catch (err) {
		res.status(500).json({ error: 'failed to load data' })
	}
}
