import { React, useState } from 'react';

// const [companies] = useState(getAllCompanies())//server;
const newMember = () => {

    const [memberData, setMemberData] = useState({
        id: 0,
        first_name: '',
        last_name: '',
        city: '',
        street: '',
        house_number: 0,
        telephone: '',
        cellphone: '',
        born: null,
        infection: null,
        curing: null,
        vaccinations: ''
    });
    const handleFieldChange = (field, value) => {
        setMemberData({ ...memberData, [field]: value });
    };

    const addNewMember = (e) => {
        e.preventDefault();
        axios.post(`http://localhost:3000/users?`, memberData)
            .then(response => {

                //עדכונים זמניים
                alert("welcome");
                let { website, ...newObject } = response.data;

                //ניווט לדף הבית
                navigate(`/home/${response.data.id}`);
            })
            .catch(error => {
                alert('שגיאה בכתיבת הקובץ:', error);
            });

    };

    return (
        <form className='only' onSubmit={addNewMember}>

            <div>
                <label>Id:</label>
                <input
                    type="number"
                    onChange={(e) => handleFieldChange('id', e.target.value)}
                    value={memberData.id}
                />
            </div>

            <div>
                <label>first name:</label>
                <input
                    type="text"
                    onChange={(e) => handleFieldChange('first_name', e.target.value)}
                    value={memberData.first_name}
                />
            </div>

            <div>
                <label>family name:</label>
                <input
                    type="text"
                    onChange={(e) => handleFieldChange('last_name', e.target.value)}
                    value={memberData.last_name}
                />
            </div>

            <div>
                <label>city:</label>
                <input
                    type="text"
                    onChange={(e) => handleFieldChange('city', e.target.value)}
                    value={memberData.city}
                />
            </div>

            <div>
                <label>street:</label>
                <input
                    type="text"
                    onChange={(e) => handleFieldChange('street', e.target.value)}
                    value={memberData.street}
                />
            </div>

            <div>
                <label>house number:</label>
                <input
                    type="text"
                    onChange={(e) => handleFieldChange('house_number', e.target.value)}
                    value={memberData.house_number}
                />
            </div>

            <div>
                <label>telephone:</label>
                <input
                    type="text"
                    onChange={(e) => handleFieldChange('telephone', e.target.value)}
                    value={memberData.telephone}
                />
            </div>

            <div>
                <label>cellphone:</label>
                <input
                    type="text"
                    onChange={(e) => handleFieldChange('cellphone', e.target.value)}
                    value={memberData.cellphone}
                />
            </div>

            <div>
                <label>born date:</label>
                <input
                    type="date"
                    onChange={(e) => handleFieldChange('born',e.target.value)}
                    value={memberData.born}
                />
            </div>

            <div>
                <label>infection date:</label>
                <input
                    type="date"
                    onChange={(e) => handleFieldChange('infection',e.target.value)}
                    value={memberData.infection}
                />
            </div>

            <div>
                <label>curing date:</label>
                <input
                    type="date"
                    onChange={(e) => handleFieldChange('curing',e.target.value)}
                    value={memberData.curing}
                />
            </div>

            <div>

                <label>vaccinations:</label>
                <input
                    type="date"
                    onChange={(e) => handleFieldChange(e.target.value)}
                    value={memberData.vaccinations}
                />
            </div>
            <button type="submit">Register</button>
        </form>
    );
}
export default newMember;