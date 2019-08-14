const { connect } = require('../_core/connection')
const Perfil = require('../models/Perfil')
const { ObjectId } = require('mongodb')
const { format, formatDistance, formatRelative, subDays, differenceInDays } = require('date-fns')

const handler = async (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false

  try {
    // const data = JSON.parse(event.Records[0].body)

    await connect()

    // const perfilData = await Perfil.findById(new ObjectId(data.id))
    let perfilData = await Perfil.findById(new ObjectId("5d52c6c5dbc1b5e785a9309a"))

    const positions = perfilData.positions

    const ranking = [];

    for (const position of positions) {

      const dates = position.date1

      const txtExplode = dates.split('–')

      const begin = txtExplode[0].trim()
      const end = txtExplode[1].trim()

      const foundBegin = begin.match(/^([A-Za-z]{3}).*([0-9]{4})/i)
      const dateBegin = new Date(`${foundBegin[1]} ${foundBegin[2]}`)

      let dateEnd = new Date();

      if (!/moment/.test(end)) {
        const foundEnd = end.match(/^([A-Za-z]{3}).*([0-9]{4})/i)
        dateEnd = new Date(`${foundEnd[1]} ${foundEnd[2]}`)
      }

      const difference = differenceInDays(dateEnd, dateBegin);

      ranking.push({
        begin: dateBegin,
        end: dateEnd,
        difference,
        avgDifference: difference / 365
      })

    }

    const dayLimit = 2;
    const ran = ranking.reduce((acc, cur) => acc += cur.avgDifference, 0) / ranking.length;
    const avgRanking = (ran * 5) / dayLimit


    return callback(null, { statusCode: 200, body: { ranking, avgRanking } })
  } catch (error) {
    return callback(null, { statusCode: 400, body: JSON.stringify({ error: error.message }) })
  }

}


module.exports.handler = handler