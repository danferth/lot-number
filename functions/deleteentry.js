const ObjectId = require("mongodb").ObjectId
const clientPromise = require("./utils/client")

// the query
const deleteEntry = async (db, id) => {
  const deleteData = await db
    .collection("lot_number_data")
    .deleteOne({ _id: new ObjectId(id) })
  return {
    statusCode: 200,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(deleteData),
  }
}

// query something
const querySomething = async out => {
  return {
    statusCode: 200,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(out),
  }
}

// handler
module.exports.handler = async (event, context) => {
  const client = await clientPromise
  const db = client.db("manufacturing")
  const result = new Promise((resolve, reject) => {
    if (db) {
      resolve(deleteEntry(db, event.queryStringParameters.id))
    } else {
      reject({ error: "something went wrong" })
    }
  })
  return result
}
