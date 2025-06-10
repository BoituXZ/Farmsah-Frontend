import { useState } from "react";
import { Box, Typography, IconButton, TextField, Button } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";
import CloseIcon from "@mui/icons-material/Close";

const sectionStyle = (theme) => ({
  border: `solid 1px ${theme.palette.background.green}`,
  flex: "1",
  padding: "5px",
  borderRadius: "8px",
  position: "relative",
});

const initialPersonal = {
  name: "John Doe",
  email: "boitu@gmail.com",
  phone: "+1234567890",
  address: "123 Main St, City, Country",
  dob: "January 1, 1990",
};

const initialSubscription = {
  plan: "Premium",
  renewal: "January 1, 2024",
  payment: "Credit Card",
  billing: "123 Main St, City, Country",
  status: "Active",
};

const initialSecurity = {
  tfa: "Enabled",
  password: "Strong",
  lastLogin: "January 1, 2024",
  questions: "Set",
  recovery: "Email, Phone",
};

const sections = [
  {
    key: "personal",
    title: "Personal Details",
    fields: [
      { field: "name", label: "Name" },
      { field: "email", label: "Email" },
      { field: "phone", label: "Phone" },
      { field: "address", label: "Address" },
      { field: "dob", label: "Date of Birth" },
    ],
  },
  {
    key: "subscription",
    title: "Subscription Details",
    fields: [
      { field: "plan", label: "Plan" },
      { field: "renewal", label: "Renewal Date" },
      { field: "payment", label: "Payment Method" },
      { field: "billing", label: "Billing Address" },
      { field: "status", label: "Subscription Status" },
    ],
  },
  {
    key: "security",
    title: "Security Settings",
    fields: [
      { field: "tfa", label: "Two-Factor Authentication" },
      { field: "password", label: "Password Strength" },
      { field: "lastLogin", label: "Last Login" },
      { field: "questions", label: "Security Questions" },
      { field: "recovery", label: "Account Recovery Options" },
    ],
  },
];

const initialState = {
  personal: initialPersonal,
  subscription: initialSubscription,
  security: initialSecurity,
};

const Settings = () => {
  const [data, setData] = useState(initialState);
  const [editData, setEditData] = useState(initialState);
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    setEditData(data);
    setIsEditing(true);
  };

  const handleCancel = () => {
    setEditData(data);
    setIsEditing(false);
  };

  const handleChange = (section, field, value) => {
    setEditData((prev) => ({
      ...prev,
      [section]: { ...prev[section], [field]: value },
    }));
  };

  const handleSubmit = () => {
    setData(editData);
    setIsEditing(false);
  };

  const renderField = (section, field, label, value, isEditingMode) => (
    <Box key={field}>
      <Typography variant="subtitle2" color="text.secondary">
        {label}
      </Typography>
      {isEditingMode ? (
        <TextField
          size="small"
          fullWidth
          value={editData[section][field]}
          onChange={(e) => handleChange(section, field, e.target.value)}
          variant="outlined"
          sx={{ mt: 0.5 }}
        />
      ) : (
        <Typography variant="body1">{value}</Typography>
      )}
    </Box>
  );

  return (
    <Box id="settingsPage">
      <Box
        id="settingsContainer"
        sx={{
          borderRadius: "10px",
          backgroundColor: "rgba(110, 110, 110, 0.07)",
          boxShadow: "1px 2px 8px rgba(0, 0, 0, 0.1)",
          padding: "10px",
          maxWidth: { xs: "90%", sm: "80%", md: "80%", lg: "50%" },
          height: "100%",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: {xs:"20px", md:"10px"},
        }}
      >
        {/* Edit Icon at the top */}
        <Box sx={{ display: "flex", justifyContent: "flex-end", mb: 1 }}>
          {!isEditing && (
            <IconButton
              size="small"
              sx={{
                color: (theme) => theme.palette.background.green,
              }}
              onClick={handleEdit}
              aria-label="edit"
              color="primary"
            >
              <EditIcon sx={{ color: (theme) => theme.palette.background.green }} />
            </IconButton>
          )}
        </Box>

        {/* Render all sections */}
        {sections.map((section) => (
          <Box sx={sectionStyle} key={section.key} id={section.key + "Section"}>
            <Typography variant="h6" gutterBottom>
              {section.title}
            </Typography>
            <Box
              id="cardDetails"
              sx={{
                display: "grid",
                gridTemplateColumns: {
                  xs: "1fr 1fr",
                  sm: "1fr 1fr",
                  md: "1fr 1fr",
                  lg: "1fr",
                },
                gap: "10px",
                padding: "10px",
                borderRadius: "8px",
                color: (theme) => theme.palette.text.primary,
              }}
            >
              {section.fields.map(({ field, label }) =>
                renderField(
                  section.key,
                  field,
                  label,
                  data[section.key][field],
                  isEditing
                )
              )}
            </Box>
          </Box>
        ))}

        {/* Danger Zone (no editing for now) */}
        <Box sx={sectionStyle} id="privacySettings">
          <Typography variant="h6" gutterBottom>
            Danger Zone
          </Typography>
          <Box
            id="cardDetails"
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr 1fr",
                sm: "1fr 1fr",
                md: "1fr 1fr",
                lg: "1fr",
              },
              gap: "10px",
              padding: "10px",
              borderRadius: "8px",
              color: (theme) => theme.palette.text.primary,
            }}
          >
            <Box>
              <Typography variant="subtitle2" color="text.secondary">
                Delete Account
              </Typography>
              <Typography variant="body1"></Typography>
            </Box>
            <Box>
              <Typography variant="subtitle2" color="text.secondary">
                Deactivate Account
              </Typography>
              <Typography variant="body1"></Typography>
            </Box>
            <Box>
              <Typography variant="subtitle2" color="text.secondary">
                Change Password
              </Typography>
              <Typography variant="body1"></Typography>
            </Box>
            <Box>
              <Typography variant="subtitle2" color="text.secondary">
                Manage Data Sharing Preferences
              </Typography>
              <Typography variant="body1"></Typography>
            </Box>
            <Box>
              <Typography variant="subtitle2" color="text.secondary">
                Review Privacy Policy
              </Typography>
              <Typography variant="body1"></Typography>
            </Box>
          </Box>
        </Box>

        {/* Save/Cancel at the bottom */}
        {isEditing && (
          <Box sx={{ display: "flex", gap: 1, justifyContent: "flex-end", mt: 2 }}>
            <Button
              variant="contained"
              color="primary"
              startIcon={<SaveIcon />}
              onClick={handleSubmit}
              sx={{ backgroundColor: (theme) => theme.palette.background.green }}
            >
              Save
            </Button>
            <Button
              variant="outlined"
              startIcon={<CloseIcon />}
              onClick={handleCancel}
              sx={{ color: (theme) => theme.palette.background.green }}
            >
              Cancel
            </Button>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default Settings;
