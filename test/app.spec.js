import app from '../app'
import supertest from 'supertest'

const request = supertest.agent(app.listen())

describe('Index demo', function () {
  it('should have demo json', function (done) {
    request
      .get('/')
      .expect(200)
      .expect({demo: 'Demo'}, done)
  })
})
