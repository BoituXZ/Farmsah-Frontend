// src/pages/Settings.jsx
import { useState } from "react";
import {
    Box, Typography, IconButton, TextField, Button,
    Paper, Stack, Grid, useTheme, Divider
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";
import CloseIcon from "@mui/icons-material/Close";

// Your original data structures and logic are preserved
const initialPersonal = {
  name: "John Doe", email: "boitu@gmail.com", phone: "+1234567890",
  address: "123 Main St, City, Country", dob: "January 1, 1990",
};
const initialSubscription = {
  plan: "Premium", renewal: "January 1, 2024", payment: "Credit Card",
  billing: "123 Main St, City, Country", status: "Active",
};
const initialSecurity = {
  tfa: "Enabled", password: "Strong", lastLogin: "January 1, 2024",
  questions: "Set", recovery: "Email, Phone",
};
const sections = [
  { key: "personal", title: "Personal Details", fields: [ /* ... */ ] },
  { key: "subscription", title: "Subscription Details", fields: [ /* ... */ ] },
  { key: "security", title: "Security Settings", fields: [ /* ... */ ] },
];
sections[0].fields = [
    { field: "name", label: "Name" }, { field: "email", label: "Email" },
    { field: "phone", label: "Phone" }, { field: "address", label: "Address" },
    { field: "dob", label: "Date of Birth" },
];
sections[1].fields = [
    { field: "plan", label: "Plan" }, { field: "renewal", label: "Renewal Date" },
    { field: "payment", label: "Payment Method" }, { field: "billing", label: "Billing Address" },
    { field: "status", label: "Subscription Status" },
];
sections[2].fields = [
    { field: "tfa", label: "Two-Factor Authentication" }, { field: "password", label: "Password Strength" },
    { field: "lastLogin", label: "Last Login" }, { field: "questions", label: "Security Questions" },
    { field: "recovery", label: "Account Recovery Options" },
];
const initialState = {
  personal: initialPersonal, subscription: initialSubscription, security: initialSecurity,
};


const Settings = () => {
    // --- ALL LOGIC IS PRESERVED ---
    const [data, setData] = useState(initialState);
    const [editData, setEditData] = useState(initialState);
    const [isEditing, setIsEditing] = useState(false);
    const theme = useTheme();

    const handleEdit = () => { setEditData(data); setIsEditing(true); };
    const handleCancel = () => { setIsEditing(false); }; // Simplified: Just exit edit mode
    const handleChange = (section, field, value) => {
        setEditData((prev) => ({
            ...prev,
            [section]: { ...prev[section], [field]: value },
        }));
    };
    const handleSubmit = () => { setData(editData); setIsEditing(false); };

    const renderField = (section, field, label, value, isEditingMode) => (
        <Box key={field}>
            <Typography variant="subtitle2" sx={{ color: 'text.secondary', mb: 0.5 }}>
                {label}
            </Typography>
            {isEditingMode ? (
                <TextField
                    size="small" fullWidth value={editData[section][field]}
                    onChange={(e) => handleChange(section, field, e.target.value)}
                    variant="outlined"
                />
            ) : (
                <Typography variant="body1">{value}</Typography>
            )}
        </Box>
    );

    return (
        <Box sx={{
            width: '100%', minHeight: '100vh', boxSizing: 'border-box',
            p: { xs: 2, md: 3 },
            background: theme.palette.background.backgroundImage,
            backgroundSize: "cover", backgroundAttachment: 'fixed',
        }}>
            <Box sx={{ maxWidth: '900px', margin: '0 auto' }}>
                <Paper
                    elevation={8}
                    sx={{
                        // Glass morphism styles applied to the main container
                        p: { xs: 2, md: 4 },
                        background: (theme) => theme.palette.mode === 'light' ? 'rgba(255, 255, 255, 0.5)' : 'rgba(31, 31, 31, 0.5)',
                        backdropFilter: 'blur(15px)',
                        borderRadius: '16px',
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                        color: 'text.primary'
                    }}
                >
                    {/* Header with Edit/Save/Cancel actions */}
                    <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 3 }}>
                        <Typography variant="h1">Account Settings</Typography>
                        <Box>
                            {!isEditing ? (
                                <IconButton title="Edit Details" onClick={handleEdit}>
                                    <EditIcon />
                                </IconButton>
                            ) : (
                                <Stack direction="row" spacing={1}>
                                    <Button variant="contained" startIcon={<SaveIcon />} onClick={handleSubmit} sx={{ bgcolor: 'success.main' }}>Save</Button>
                                    <Button variant="outlined" startIcon={<CloseIcon />} onClick={handleCancel}>Cancel</Button>
                                </Stack>
                            )}
                        </Box>
                    </Stack>

                    {/* All settings sections rendered in a stack */}
                    <Stack spacing={4}>
                        {sections.map((section) => (
                            <Box key={section.key}
                                 sx={{ p: 2, borderRadius: 2, background: 'rgba(0,0,0,0.05)' }}>
                                <Typography variant="h6" gutterBottom>{section.title}</Typography>
                                <Grid container spacing={2}>
                                    {section.fields.map(({ field, label }) => (
                                        <Grid item xs={12} sm={6} key={field}>
                                            {renderField(section.key, field, label, data[section.key][field], isEditing)}
                                        </Grid>
                                    ))}
                                </Grid>
                            </Box>
                        ))}

                        {/* Danger Zone Section */}
                        <Box
                            sx={{
                                p: 2, borderRadius: 2,
                                border: `1px solid ${theme.palette.error.main}`,
                                background: `rgba(${theme.palette.error.main.match(/\d+/g).join(',')}, 0.1)`
                            }}
                        >
                            <Typography variant="h6" color="error" gutterBottom>Danger Zone</Typography>
                            <Stack spacing={2} direction={{ xs: 'column', sm: 'row' }} sx={{ mt: 2 }}>
                                <Button variant="outlined" color="error" fullWidth>Change Password</Button>
                                <Button variant="outlined" color="error" fullWidth>Deactivate Account</Button>
                                <Button variant="contained" color="error" fullWidth>Delete Account</Button>
                            </Stack>
                        </Box>
                    </Stack>
                </Paper>
            </Box>
        </Box>
    );
};

export default Settings;