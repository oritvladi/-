import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css'
import Home from './home';
// import Members from './members';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

// function App() {
//   const[members, setMembers] = useState([]); 

// useEffect(() => {
//     axios.get('http://localhost:8080/members')
//         .then(response => {
//             setMembers(response.data);
//         })
//         .catch(error => {
//             alert(`Server failed: ${error}`);
//             setMembers([]);
//         });
// }, []);
//   return (
// <>vהיוש</>
//     // <>{members?(console.log(members)):null}</>
//     //   <Routes>
//     //       <Route path='/' element={<Navigate to='/home' />} />
//     //       <Route path="/" element={<Navigate to="home" />} />
//     //       <Route exact path="/home" element={<Home />} />
//     //      <Route path='/home' element={<Home />} />
//     //       <Route path='members' element={<Members />} >
//     //           <Route path=':id' element={<Member />} />              
//     //       </Route>
//     //       <Route path='/newMember' element={<NewMember />} />
//     //   </Routes>
//   );

// }





function App() {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/members');
        setMembers(response.data);
      } catch (error) {
        alert(`Server failed: ${error}`);
        setMembers([]);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Members List</h1>
      {members.length > 0 ? (
        <ul>
          {members.map(member => (
            // <li key={member.id}>{member.name}</li>
            <h1>{member.id}</h1>
          ))}
        </ul>
      ) : (
        <p>No members found.</p>
      )}
    </div>
  );
}

export default App;
