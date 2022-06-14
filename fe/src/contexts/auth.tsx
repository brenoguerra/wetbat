import { createContext, ReactNode, useState, useCallback, useContext } from "react";
import api from "../services/api";

interface User {
  name: string
  email: string
}

interface AuthState {
  token: string
  user: User;
}

interface SignInData {
  email: string
  password: string
}

interface AuthProviderProps {
  children: ReactNode;
}

interface AuthContextData {
  user: User;
  signIn(data: SignInData): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData)

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem('token')
    const user = localStorage.getItem('user')

    if (token && user) {
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      return {
        token,
        user: JSON.parse(user)
      }
    }

    return {} as AuthState;
  });

  const signIn = useCallback(async ({ email, password }: SignInData) => {
    const response = await api.post('/users/signin', { email, password });

    const { token, user } = response.data
    localStorage.setItem('token', token)
    localStorage.setItem('user', JSON.stringify(user))

    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

    setData({ token, user })
  }, [])

  const signOut = useCallback(() => {
    localStorage.removeItem('token')
    localStorage.removeItem('user')

    setData({} as AuthState)
  }, [])

  return (
    <AuthContext.Provider
      value={{ user: data.user, signIn, signOut }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth(): AuthContextData {
  const context = useContext(AuthContext)

  if (!context) throw new Error('useAuth must be used with an AuthProvider')

  return context;
}