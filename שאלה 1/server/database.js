import mysql from 'mysql2'

//conect to sql database
const pool = mysql.createPool({
    host: '127.0.0.1',
    password: 'orit1234',
    user: 'root',
    database: 'hmo',
}).promise();

//get all members of hmo
export async function getMembers() {
    const [data] = await pool.query('select * from member')
    return data;
}

//get specific member by Id
export async function getMember(id) {
    const [[member]] = await pool.query(`select * from member where id= ?`, [id])
    return member;
}

//create new member
export async function postMember( newMember) {
    await pool.query(`insert  into member(id, first_name, last_name, city, street, house_number, telephone, cellphone, born, infection, curing, vaccinations) VALUES(?,?,?,?,?,?,?,?,?,?,?,?)`,
        [newMember.id, newMember.first_name, newMember.last_name, newMember.city, newMember.street, newMember.house_number, newMember.telephone, newMember.cellphone, newMember.born, newMember.infection, newMember.curing, newMember.vaccinations])
    return await getMember(newMember.id);
}

//delete member by Id
export async function deleteMember(id) {
    await pool.query(`delete from member where id = ?`, [id]);
}

//update member 
export async function updateMember(updMember) {
    await pool.query(`
    UPDATE member
    SET first_name = ?,
        last_name = ?,
        city = ?,
        street = ?,
        house_number = ?,
        telephone = ?,
        cellphone = ?,
        born = ?,
        infection = ?,
        curing = ?,
        vaccinations = ?
    WHERE id = ?
`, [
        updMember.first_name,
        updMember.last_name,
        updMember.city,
        updMember.street,
        updMember.house_number,
        updMember.telephone,
        updMember.cellphone,
        updMember.born,
        updMember.infection,
        updMember.curing,
        updMember.vaccinations,
        updMember.id
    ]);
}

//return the name of vaccination company by Id
export async function getCompanyName(code) {
    const [[company]] = await pool.query(`select name from company where id= ?`, [code])
    return company.name;
}

//return the names of all vaccination by string 'vaccinations'
export async function getAllVaccinations(code) {
    const companies = [];
    const vaccinationCodes = code.split(',');
    for (const digit of vaccinationCodes) {
        companies.push(await getCompanyName(digit));
    }
    return companies;
}

//return all vaccination companies
export async function getAllCompanies() {
    return await pool.query(`select * from company`);
}


