import React from 'react';
import { useNavigate, Outlet } from 'react-router-dom';
import axios from 'axios';
import newMember from './newMember';
import { Navigate } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';

function Home() {
    // const history = useHistory();

    // const handleSeeAllMembers = () => {
    //     history.push('/members');
    // };

    // const handleAddNewMember = () => {
    //     history.push('/newMember');
    // };

    return (
        <>
            <Routes>
                <Route path='/' element={<Navigate to='/home' />} />
                <Route path="/" element={<Navigate to="home" />} />
                <Route exact path="/home" element={<Home />} />
                <Route path='/home' element={<Home />} />
                <Route path='members' element={<Members />} >
                    <Route path=':id' element={<Member />} />
                </Route>
                <Route path='/newMember' element={<NewMember />} />
            </Routes>
            <h1>home sweet home</h1>
            <button
            // onClick={handleSeeAllMembers}
            >see all members in HMO</button>
            <button
            // onClick={handleAddNewMember}
            >to add a new member</button>
            // <h1>friend not</h1>
        </>
    );
}

export default Home;


