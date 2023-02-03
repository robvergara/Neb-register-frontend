import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Route, Routes, HashRouter} from 'react-router-dom';
import { Menu } from '../Menu';
import { Footer } from '../Footer';
import { HomePage } from '../HomePage';
import { LoginPage } from '../LoginPage';
import { SignUpPage } from '../SignUpPage';
import { LogOutPage } from '../LogOutPage';
import { CategoryPage } from '../Categories/CategoryPage';
import { Entrenadores } from '../Coaches/EntrenadoresPage';
import { CoachProvider } from '../contexts/coachContext';
import { StateProvider } from '../contexts/statesContext';
import { ModalProvider } from '../contexts/modalContext';
import { CategoryProvider } from '../contexts/categorycontext';
import { StudentsPage } from '../Students/StudentsPage';
import { StudentProvider } from '../contexts/studentContext';
import { AuthProvider, AuthRoute } from '../contexts/auth';
import { CoachProfile } from '../Coaches/CoachProfile';
import { PaymentProvider } from '../contexts/paymentscontext';
import { PaymentPage } from '../Payment/PaymentPage';


function App() {

  return (
    <HashRouter>
      <StateProvider>
        <AuthProvider>
          <ModalProvider>          
            <CoachProvider>
              <CategoryProvider>
                <StudentProvider>
                    <PaymentProvider>
                    <Menu/>
                    <Routes>
                      <Route path='/' element={<HomePage/>}/>
                      <Route path='/login' element={<LoginPage/>}/>
                      {/* <Route path='/signup' element={<SignUpPage/>}/> */}

                      <Route 
                        path='/logout' 
                          element={
                            <AuthRoute>
                              <LogOutPage/>
                            </AuthRoute>
                          }
                      />
                      <Route 
                        path='/categorias' 
                        element={
                          <AuthRoute>
                            <CategoryPage/>
                          </AuthRoute>
                          }
                      />
                      <Route 
                        path='/entrenadores' 
                        element={
                          <AuthRoute>
                            <Entrenadores />
                          </AuthRoute>
                        }
                      />
                      <Route 
                        path='/entrenadores/:id' 
                        element={
                          <AuthRoute>
                            <CoachProfile/>
                          </AuthRoute>
                          } 
                      />
                      <Route 
                        path='/estudiantes' 
                        element={
                          <AuthRoute>
                            <StudentsPage />
                          </AuthRoute>
                          }
                      />
                      <Route 
                        path='/pagos' 
                        element={
                          <AuthRoute>
                            <PaymentPage/>
                          </AuthRoute>
                        } 
                      />
                      <Route path='*' element={<p>Not Found</p>}/>
                    </Routes>
                    </PaymentProvider>
                <Footer/>
                </StudentProvider>
              </CategoryProvider>
            </CoachProvider>
          </ModalProvider>
        </AuthProvider>
      </StateProvider>
    </HashRouter>
  );
}




export default App;
