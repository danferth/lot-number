const clientPromise = require("./utils/client")

// the query
const verifyLotNumber = async (db, lot) => {
  const verify = await db
    .collection("lot_number_data")
    .find({ lot_number: lot })
    .toArray()
  return {
    statusCode: 200,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(verify),
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
      resolve(verifyLotNumber(db, event.queryStringParameters.lot))
    } else {
      reject({ error: "something went wrong" })
    }
  })
  return result
}
