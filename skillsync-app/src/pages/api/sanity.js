// This is pages/api/sanity.js

export default function handler(req, res) {
    res.status(200).json({ message: 'Sanity check passed!' });
  }
  