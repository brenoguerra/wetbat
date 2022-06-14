import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { PrivateRoute } from './Route'

import { SignIn } from '../pages/SignIn'
import { SignUp } from '../pages/SignUp'
import { Preview } from '../pages/Preview'

export const AppRoutes: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/login" element={<SignIn />} />
      <Route path="/register" element={<SignUp />} />
      
      <Route path="/" element={
        <PrivateRoute>
          <Preview />
        </PrivateRoute>
      } />
    </Routes>
  </BrowserRouter>
)