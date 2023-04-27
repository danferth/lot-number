const clientPromise = require("./utils/client")

//push data
const pushToDatabase = async (db, data) => {
  const distData = {
    expiration_date: data.expiration_date,
    lot_number: data.lot_number,
    manufacture_date: data.manufacture_date,
    mixed_lot: data.mixed_lot,
    mixed_lot_nums: data.mixed_lot_nums,
    part_number: data.part_number,
    product_rev: data.product_rev,
    product_sterile: data.product_sterile,
    release_date: data.release_date,
    sign_date: data.sign_date,
    signee: data.signee,
    unique_document: data.unique_document,
  }

  await db.collection("lot_number_data").insertMany([distData])
  return {
    statusCode: 201,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(distData),
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
    if (event.httpMethod === "POST") {
      resolve(pushToDatabase(db, JSON.parse(event.body)))
    } else {
      reject(error => {
        return {
          statusCode: 500,
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringily(error),
        }
      })
    }
  })
  return result
}
