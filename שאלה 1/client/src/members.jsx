// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// // import { useHistory } from 'react-router-dom';

// const Members = () => {
//   const [members, setMembers] = useState([]);
// //   const history = useHistory(); // initialize history using useHistory

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get('http://localhost:8080/members');
//         setMembers(response.data);
//       } catch (error) {
//         alert(`Server failed: ${error}`);
//         setMembers([]);
//       }
//     };

//     fetchData();
//   }, []);

//   const handleMemberClick = (memberId) => {
//     history.push(`/member/${memberId}`); // use history.push to navigate
//   };

//   return (
//     <div>
//       <h1>Members</h1>
//       <div style={{ display: 'flex', justifyContent: 'space-around' }}>
//         {members.map(member => (
//           <div
//             key={member.id}
//             style={{
//               border: '1px solid black',
//               padding: '10px',
//               margin: '10px',
//               width: '200px',
//               height: '100px',
//               cursor: 'pointer', // add cursor pointer for better UX
//             }}
//             onClick={() => handleMemberClick(member.id)} // pass member id to handleMemberClick
//           >
//             <h4>{member.id}</h4>
//             <h3>{member.first_name + ' ' + member.last_name}</h3>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Members;

