import { container } from 'tsyringe'

import IAuthProvider from './AuthProvider/models/IAuthProvider'
import JWTProvider from './AuthProvider/implementations/JWTProvider'

container.registerSingleton<IAuthProvider>('AuthProvider', JWTProvider)
