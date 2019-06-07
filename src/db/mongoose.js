const mongoose = require('mongoose')

mongoose.connect(process.env.DATABASE_CONNECTION, {
    useNewUrlParser: true,
    useCreateIndex: true
})

//taskapp -> database name
//taskapp -> database password