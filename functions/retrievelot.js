const clientPromise = require("./utils/client")

// the query
const retrieveLot = async (db, pn, lot) => {
  const retrieve = await db
    .collection("lot_number_data")
    .find({ lot_number: lot, part_number: pn })
    .toArray()
  return {
    statusCode: 200,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(retrieve),
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
      resolve(
        retrieveLot(
          db,
          event.queryStringParameters.pn,
          event.queryStringParameters.lot
        )
      )
    } else {
      reject({ error: "something went wrong" })
    }
  })
  return result
}
