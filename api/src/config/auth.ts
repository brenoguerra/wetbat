export default {
  JWT: {
    expiresIn: process.env.JWT_EXPIRES!,
    secret: process.env.JWT_SECRET!,
  }
}
