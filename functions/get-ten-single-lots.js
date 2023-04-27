const clientPromise = require("./utils/client")

const agg = [
  {
    $match: {
      mixed_lot: false,
    },
  },
  {
    $sort: {
      sign_date: -1,
    },
  },
  {
    $limit: 10,
  },
]

// the query
const queryDatabaseSkip = async (db, skip) => {
  const callSkip = await db
    .collection("lot_number_data")
    .aggregate([
      {
        $match: {
          mixed_lot: false,
        },
      },
      {
        $sort: {
          sign_date: -1,
        },
      },
      {
        $skip: skip,
      },
      {
        $limit: 10,
      },
    ])
    .toArray()

  return {
    statusCode: 200,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(callSkip),
  }
}

const queryDatabaseNoSkip = async db => {
  const callNoSkip = await db
    .collection("lot_number_data")
    .aggregate([
      {
        $match: {
          mixed_lot: false,
        },
      },
      {
        $sort: {
          sign_date: -1,
        },
      },
      {
        $limit: 10,
      },
    ])
    .toArray()

  return {
    statusCode: 200,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(callNoSkip),
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
  const skip = parseInt(event.queryStringParameters.skip)
  const result = new Promise((resolve, reject) => {
    if (skip === 0) {
      resolve(queryDatabaseNoSkip(db))
    }
    if (skip > 0) {
      resolve(queryDatabaseSkip(db, skip))
    } else {
      reject("error dude")
    }
  })
  return result
}
