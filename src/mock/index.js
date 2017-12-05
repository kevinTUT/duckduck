var faker = require('faker')
var _ = require('lodash')

module.exports = {
  people: _.times(50, n => {
    let card = faker.helpers.userCard()
    let infos = {
      id: faker.random.number(),
      email: faker.internet.email(),
      phone: faker.phone.phoneNumber()
    }
    return Object.assign({}, card, infos)
  }),

  movie: _.times(50, n => {
    return {
      title: faker.name.title(),
      image: faker.image.business(300, 444),
      comments: faker.random.number(1000, 3000),
      ratings: faker.random.number(1000, 3000),
      year: Math.random() * 10 > 5
        ? faker.date.future()
        : faker.date.past(),
      summary: faker.lorem.paragraphs()
    }
  })
}