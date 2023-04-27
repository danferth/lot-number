const clientPromise = require("./utils/client")

// the query
const queryDatabase = async db => {
  const lotData = await db
    .collection("lot_number_data")
    .find({})
    .sort({ sign_date: -1 })
    .toArray()
  return {
    statusCode: 200,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(lotData),
  }
}

// handler
module.exports.handler = async (event, context) => {
  const client = await clientPromise
  const db = client.db("manufacturing")
  const result = new Promise((resolve, reject) => {
    if (db) {
      resolve(queryDatabase(db))
    } else {
      reject({ error: "something went wrong" })
    }
  })
  return result
}
