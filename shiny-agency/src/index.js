import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Survey from './pages/Survey'
import Header from './components/Header'
import Error from './components/Error'
import Freelancers from './pages/Freelancers'
import Results from './pages/Results'
import { createGlobalStyle } from 'styled-components'


const AppPrincipale = () => 
{
   return <>
      <Router>
      <GlobalStyle />
      <Header />
         <Routes>
            <Route path='/Survey/:questionNumber' element={<Survey />} />
            <Route path='/Freelancers' element={<Freelancers />} />
            <Route path='/Results' element={<Results />} />
            <Route path='/' element={<Home />} />
            <Route path='*' element={<Error />} />
         </Routes>
      </Router>
   </>
}

const GlobalStyle = createGlobalStyle`
   div {
      font-family: 'Trebuchet MS', Helvetica, sans-serif;
   }
`

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
          <AppPrincipale />
    </React.StrictMode>,
    
document.getElementById('root')
)