import { Navigate } from "react-router-dom";

import { useAuth } from "../contexts/auth";

export const PrivateRoute = ({ children }: { children: JSX.Element }) => {
  const { user } = useAuth()
  return user ? children : <Navigate to='/login' replace />
}