const User = require('../models/user');

// Get all users
exports.getUsers = async (req, res) => {
    try {
        const users = await User.find();
        return res.status(200).json({ success: true, data: users });
    } catch (error) {
        console.error("❌ Error fetching users:", error);
        return res.status(500).json({ success: false, message: "Internal Server Error" });
    }
};

// Get a single user by ID
exports.getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) return res.status(404).json({ success: false, message: "User not found" });

        return res.status(200).json({ success: true, data: user });
    } catch (error) {
        console.error("❌ Error fetching user:", error);
        return res.status(500).json({ success: false, message: "Internal Server Error" });
    }
};

// Add a new user
exports.addUser = async (req, res) => {
    try {
        if (!req.body || Object.keys(req.body).length === 0) {
            return res.status(400).json({ success: false, message: "Request body cannot be empty" });
        }

        const newUser = await User.create(req.body);
        return res.status(201).json({ success: true, data: newUser });
    } catch (error) {
        console.error("❌ Error adding user:", error);
        return res.status(500).json({ success: false, message: error.message });
    }
};

// Update user by ID
exports.updateUser = async (req, res) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });

        if (!updatedUser) return res.status(404).json({ success: false, message: "User not found" });

        return res.status(200).json({ success: true, data: updatedUser });
    } catch (error) {
        console.error("❌ Error updating user:", error);
        return res.status(500).json({ success: false, message: error.message });
    }
};

// Delete user by ID
exports.deleteUser = async (req, res) => {
    try {
        const deletedUser = await User.findByIdAndDelete(req.params.id);

        if (!deletedUser) return res.status(404).json({ success: false, message: "User not found" });

        return res.status(200).json({ success: true, message: "User deleted successfully" });
    } catch (error) {
        console.error("❌ Error deleting user:", error);
        return res.status(500).json({ success: false, message: "Internal Server Error" });
    }
};
