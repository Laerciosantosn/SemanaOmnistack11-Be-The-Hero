const app = require('./app')

const host = 'http://localhost/'
const port = 3333

app.listen(port, () =>
  console.log(`Server is runing in ${host}${port}`)
)