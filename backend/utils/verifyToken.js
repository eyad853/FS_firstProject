import jwt from 'jsonwebtoken'

export const verifyToken = async (req , res ,next)=>{
    const authHeader = req.headers['authorization'];

    if (!authHeader) {
        return res.status(401).json({
            error: true,
            message: "Unauthorized access. Token missing.",
        });
    }

    const token = authHeader.split(' ')[1];

    if (!token) {
        return res.status(401).json({
            error: true,
            message: "Unauthorized access. Invalid or expired token.",
        });
    }

    try {
        // Replace 'your-secret-key' with your JWT secret
        const decoded = await jwt.verify(token, process.env.SECRET_KEY);
        req.user = decoded
        next(); // Proceed to the next middleware
    } catch (err) {
        return res.status(403).json({
            error: true,
            message: "Invalid or expired token.",
        });
    }
};


