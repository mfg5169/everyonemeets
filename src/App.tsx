
import { Outlet } from "react-router-dom";

function App() {
    return <Outlet />;
}

export default App;
// // App.tsx
// import { Outlet } from "react-router-dom"; // Import Outlet to render child routes
// import { useEffect } from "react";
// function App() {
//         // This will log when the component is mounted
//     useEffect(() => {
//             console.log("Landing component rendered");
//         }, []); // Empty array ensures it runs only once when the component mounts
    
//     return (
//         <div className="app-container">
//             {/* You can add shared components like Header, Footer here */}
//             <header>
                
//                 <h1>Welcome to the App!</h1>
//             </header>
            
//             <main>
//                 {/* This is where the nested routes will render */}
//                 <Outlet />
//             </main>
            
//             <footer>
//                 {/* Add footer if needed */}
//                 <p>Footer content here</p>
//             </footer>
//         </div>
//     );
// }

// export default App;

// // import { useState } from 'react'
// // import reactLogo from './assets/react.svg'
// // import viteLogo from '/vite.svg'
// // import './App.css'

// // function App() {
// //   const [count, setCount] = useState(0)

// //   return (
// //     <>
// //       <div>
// //         <a href="https://vite.dev" target="_blank">
// //           <img src={viteLogo} className="logo" alt="Vite logo" />
// //         </a>
// //         <a href="https://react.dev" target="_blank">
// //           <img src={reactLogo} className="logo react" alt="React logo" />
// //         </a>
// //       </div>
// //       <h1>Vite + React</h1>
// //       <div className="card">
// //         <button onClick={() => setCount((count) => count + 1)}>
// //           count is {count}
// //         </button>
// //         <p>
// //           Edit <code>src/App.tsx</code> and save to test HMR
// //         </p>
// //       </div>
// //       <p className="read-the-docs">
// //         Click on the Vite and React logos to learn more
// //       </p>
// //     </>
// //   )
// // }

// // export default App
