// Definición de un esquema usando Mongoose
const Schema = mongoose.Schema;

const usuarioSchema = new Schema({
  nombre: String,
  edad: Number,
  correo: String,
});

// Creación de un modelo basado en el esquema
const Usuario = mongoose.model('Usuario', usuarioSchema);

// Ejemplo de cómo utilizar el modelo para crear un nuevo usuario
const nuevoUsuario = new Usuario({
  nombre: 'Ejemplo',
  edad: 30,
  correo: 'ejemplo@correo.com',
});