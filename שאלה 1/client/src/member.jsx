import React, { useState, useEffect } from 'react';
import axios from 'axios';
const Member = ({ id }) => {


    const [member, setMember] = useState({});
    const [vaccinations, setVaccinations] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/members/${id}`);
                setMember(response.data);
                if(member)
                try {
                        const response = await axios.get(`http://localhost:8080/members/${id}/${member.vaccination}`);
                        setVaccinations(response.data);
                    } catch (error) {
                        alert(`Server failed: ${error}`);
                        setVaccinations([]);
                    }
                } catch (error) {
                    alert(`Server failed: ${error}`);
                    setMember([]);
}
        };

fetchData();
    }, []);



return (
    <>
        <h3>info</h3>
        <div>
            <p><b>Id:</b> {member.id}</p>
            <p><b>First Name:</b> {member.first_name}</p>
            <p><b>Last Name:</b> {member.last_name}</p>
            <p><b>City:</b> {member.city}</p>
            <p><b>Street:</b> {member.street}</p>
            <p><b>House number:</b> {member.house_number}</p>
            <p><b>Born Date:</b> {member.born}</p>
            <p><b>Telephone:</b> {member.telephone}</p>
            <p><b>Cellphone:</b> {member.cellphone}</p>
            {member.infection && <p><b>Infection:</b> {member.infection}</p>}
            {member.curing && <p><b>Curing:</b> {member.curing}</p>}
            {vaccinations && vaccinations.length > 0 ? (
                <div>
                    <h3>Vaccinations</h3>
                    <ul>
                        {vaccinations.map((vaccination, index) => (
                            <li key={index}>Vaccination {index + 1}: {vaccination}</li>
                        ))}
                    </ul>
                </div>
            ) : (
                <h4><b>No vaccinations yet</b></h4>
            )}
        </div>
        <button>Edit</button>
    </>
);
};

export default Member;

