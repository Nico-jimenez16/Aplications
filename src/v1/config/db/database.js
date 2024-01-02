import mongoose from 'mongoose';
export class Database {

  constructor(uri) {
    this.uri = uri;
  }

  async connect() {
    try {
      await mongoose.connect(this.uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log('Conexión exitosa a MongoDB');
    } catch (error) {
      console.error('Error de conexión a MongoDB:', error);
    }
  }

  async disconnect() {
    try {
      await mongoose.disconnect();
      console.log('Desconexión exitosa de MongoDB');
    } catch (error) {
      console.error('Error al desconectar de MongoDB:', error);
    }
  }
}