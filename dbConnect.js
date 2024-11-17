const mongoose = require('mongoose');

module.exports = async() => {
    const mongoUri = 'mongodb+srv://ginikagurjar799:Ginni12345@social-media.jky7l.mongodb.net/?retryWrites=true&w=majority&appName=Social-Media'

    try {
        const connect =  await mongoose.connect(mongoUri, {
            useUnifiedTopology: true,
            useNewUrlParser: true
        });

        console.log(`MongoDB connected: ${connect.connection.host}`);

    } catch (error) {
        console.log(error);
        process.exit(1);
    }
    
}
