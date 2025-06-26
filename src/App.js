// import React, { useState } from 'react'
// import Header from './layouts/Header'
// import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom'
// import Home from './Screens/Home'
// import Features from './Screens/Features'
// import About from './Screens/About'
// import Contact from './Screens/Contact'
// import Services from './Screens/Services'
// import CartItem from './Screens/CartItem'
// import Fruit from './Screens/Fruit'
// import Vegitable from './Screens/Vegitable'
// import Spices from './Screens/Spices'
// import SoftDrink from './Screens/SoftDrink'
// import Water from './Screens/Water'
// import Food from './Screens/Food'
// import BreakFast from './Screens/BreakFast'
// import Lunch from './Screens/Lunch'
// import Blog from './Screens/Blog'
// import PrivacyPolicy from './Screens/PrivacyPolicy'
// import TermsOfService from './Screens/TermsOfService'
// import HelpCenter from './Screens/HelpCenter'
// import ForgotPassword from './Screens/ForgotPassword'
// import Register from './Screens/Registration'
// import Login from './Screens/Login'
// import ItemDetails from './Screens/ItemDetails'

// function App() {
//   const token = localStorage.getItem('token');
//     const location = useLocation();
//   const hideHeaderRoutes = ["/login", "/register", "/ForgotPassword"];
//   const hideHeader = hideHeaderRoutes.includes(location.pathname);

//   const [product ,setProduct] = useState("");
//   const [userId ,setUserId] = useState("");

  
//   return (
//     <>

//     <div style={{ padding: '20px' }}>
//        {!hideHeader && <Header/>}
     
//         <Routes>
//            <Route path='/' element={ token? <Navigate to='/home' replace/> : <Navigate to="/login" replace/>} />
//           <Route path='/login' element={
//             !token? <Login/> :<Navigate to="/home" replace/>
//           }/>
//           <Route path='/home' element={
//             token ? <Home />:<Navigate to="/login" replace/>
//           } />
//           <Route path='/register' element={<Register />} />
//           <Route path='/ForgotPassword' element={<ForgotPassword />} />
//           <Route path='/features' element={<Features />} />
//           <Route path='/about' element={<About />} />
//           <Route path='/contact' element={<Contact />} />
//           <Route path='/services' element={<Services />} />
//           <Route path='/carditem' element={<CartItem product={product} userId={userId}/>} />
//           <Route path='/fruit' element={<Fruit />} />
//           <Route path='/Vagetable' element={<Vegitable />} />
//           <Route path='/Spices' element={<Spices />} />
//           <Route path='/softDrink' element={<SoftDrink />} />
//           <Route path='/Water' element={<Water />} />
//           <Route path='/Food' element={<Food />} />
//            <Route path='/breakfast' element={<BreakFast />} />
//           <Route path='/lunch' element={<Lunch />} />
//           <Route path='/blog' element={<Blog/>} />
//           <Route path='/privacypolicy' element={<PrivacyPolicy/>}/>
//           <Route path='/termofservice' element={<TermsOfService/>} />
//           <Route path='/helpcenter' element={<HelpCenter />} />
//           <Route path='/itemDetails/:id' element={<ItemDetails/>} />
           
          
//         </Routes>
        
        
//       </div>
//       </>
    
//   )
// }

// export default App


// // import React from 'react'
// // import Search from './Screens/Search'

// // function App() {
// //   return (
// //    <Search/>
// //   )
// // }

// // export default App



import React from 'react'
import RazorpayPayment from './Screens/Payment'
import DuplicatePayment from './Screens/DuplicatePayment'

function App() {
  return (
     <RazorpayPayment/>
    // <DuplicatePayment/>
  )
}

export default App