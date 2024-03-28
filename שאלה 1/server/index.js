import express from 'express';
import { getCompanyName, getAllVaccinations, updateMember, deleteMember, postMember, getMembers, getMember } from './database.js';
const app = express();
import cors from 'cors';

app.use(cors());
app.use(express.json());

app.get('/members', async (req, res) => {
    try {
        const data = await getMembers();
        res.send(data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

app.get('/members/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const data = await getMember(id);
        if (!data) {
            return res.sendStatus(404);
        }
        res.send(data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

app.get('/members/:id/:vaccination', async (req, res) => {
    try {
        const vaccination = req.params.vaccination.toString();
        const data = await getAllVaccinations(vaccination);
        if (!data) {
            return res.sendStatus(404);
        }
        res.send(data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

app.post('/members', async (req, res) => {
    try {
        const { id, first_name, last_name, adress, userTypeId } = req.body;
        await postMember(name, phone, age, adress, userTypeId);
        res.status(201).send(data);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

app.put('/members/:id', async (req, res) => {
    try {
        await updateMember(req.params, req.body);
        res.status(200).json({ message: 'Member updated successfully' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

app.delete('/members/:id', async (req, res) => {
    try {
        await deleteMember(req.params);
        res.status(200).json({ message: 'Member deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "PUT, GET, POST, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Credentials", true);
    next();
  });

app.listen(8080, () => {
    console.log("listen on port 8080");
});

