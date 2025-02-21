const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');

// Create Express app
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Connect to MongoDB
mongoose.connect('mongodb://mongo:27017/snakegame', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('MongoDB connection error:', err));

// Define Score Schema
const scoreSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        default: 'Anonymous'
    },
    score: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const Score = mongoose.model('Score', scoreSchema);

// API Routes
app.get('/api/scores', async (req, res) => {
    try {
        const scores = await Score.find()
            .sort({ score: -1 })
            .limit(10)
            .select('name score date');
        res.json(scores);
    } catch (err) {
        console.error('Error fetching scores:', err);
        res.status(500).json({ message: 'Server error' });
    }
});

app.post('/api/scores', async (req, res) => {
    try {
        const { name, score } = req.body;
        
        if (!score || isNaN(score)) {
            return res.status(400).json({ message: 'Valid score is required' });
        }
        
        const newScore = new Score({
            name: name || 'Anonymous',
            score: Number(score)
        });
        
        await newScore.save();
        res.status(201).json(newScore);
    } catch (err) {
        console.error('Error saving score:', err);
        res.status(500).json({ message: 'Server error' });
    }
});

// Serve the main HTML file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
