const request =  require('supertest')
const app = require('../../src/app')
const connection = require('../../src/database/connection')

describe('ONG', () => {
  beforeEach( async () => {
    await connection.migrate.rollback();
    await connection.migrate.latest();
  })
  afterAll(async () => {
    await connection.destroy();
  })

  it('should be able to create a new ONG' , async () => {
    // Para testar no incidents o criate ou listen precisa passar o
    // .set('Authorization', 'id da ong'), no const response = await request(app)
    const response = await request(app)
    .post('/ongs')
    .send({
      name: "APAD",
      email: "contato@contato.com",
      whatsapp: "11944443333",
      city: "São Paulo",
      uf: "SP"
    });
    expect(response.body).toHaveProperty('id');
    expect(response.body.id).toHaveLength(8);
  });
});