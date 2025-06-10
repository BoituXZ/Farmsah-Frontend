import { Box, Typography } from "@mui/material"
import { color } from "framer-motion"


const sectionStyle = (theme) => ({
  border: `solid 1px ${theme.palette.background.green}`,
  flex: "1",
  padding: "5px",
  borderRadius: "8px",  
})

const Settings = () => {
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
          gap: "10px",
        }}
      >
        <Box id="personalDetails" sx={sectionStyle}>
          <Typography variant="h6" gutterBottom>
            Personal Details
          </Typography>
          <Box
            id="cardDetails"
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr 1fr",
                sm: "1fr 1fr",
                md: "1fr 1fr",
                lg: "1fr"
              },
              gap: "10px",
              padding: "10px",
              borderRadius: "8px",
              color: (theme) => theme.palette.text.primary,
            }}
          >
            <Box>
              <Typography variant="subtitle2" color="text.secondary">
                Name
              </Typography>
              <Typography variant="body1">John Doe</Typography>
            </Box>
            <Box>
              <Typography variant="subtitle2" color="text.secondary">
                Email
              </Typography>
              <Typography variant="body1">boitu@gmail.com</Typography>
            </Box>
            <Box>
              <Typography variant="subtitle2" color="text.secondary">
                Phone
              </Typography>
              <Typography variant="body1">+1234567890</Typography>
            </Box>
            <Box>
              <Typography variant="subtitle2" color="text.secondary">
                Address
              </Typography>
              <Typography variant="body1">
                123 Main St, City, Country
              </Typography>
            </Box>
            <Box>
              <Typography variant="subtitle2" color="text.secondary">
                Date of Birth
              </Typography>
              <Typography variant="body1">January 1, 1990</Typography>
            </Box>
          </Box>
        </Box>
        <Box sx={sectionStyle} id="subscriptionDetails">
          <Typography variant="h6" gutterBottom>
            Subscription Details
          </Typography>
          <Box id="cardDetails"
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr 1fr",
                sm: "1fr 1fr",
                md: "1fr 1fr",
                lg: "1fr"
              },
              gap: "10px",
              padding: "10px",
              borderRadius: "8px",
              color: (theme) => theme.palette.text.primary,
            }}
          >
            <Box >
              <Typography variant="subtitle2" color="text.secondary">
                Plan
              </Typography>
              <Typography variant="body1">Premium</Typography>
            </Box>
            <Box>
              <Typography variant="subtitle2" color="text.secondary">
                Renewal Date
              </Typography>
              <Typography variant="body1">January 1, 2024</Typography>
            </Box>
            <Box>
              <Typography variant="subtitle2" color="text.secondary">
                Payment Method
              </Typography>
              <Typography variant="body1">Credit Card</Typography>
            </Box>
            <Box>
              <Typography variant="subtitle2" color="text.secondary">
                Billing Address
              </Typography>
              <Typography variant="body1">
                123 Main St, City, Country
              </Typography>
            </Box>
            <Box>
              <Typography variant="subtitle2" color="text.secondary">
                Subscription Status
              </Typography>
              <Typography variant="body1">Active</Typography>
            </Box>
          </Box>
        </Box>

        <Box sx={sectionStyle} id="securitySettings">
          <Typography variant="h6" gutterBottom>
            Security Settings
          </Typography>
          <Box
            id="cardDetails"
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr 1fr",
                sm: "1fr 1fr",
                md: "1fr 1fr",
                lg: "1fr"
              },
              gap: "10px",
              padding: "10px",
              borderRadius: "8px",
              color: (theme) => theme.palette.text.primary,
            }}
          >
            <Box>
              <Typography variant="subtitle2" color="text.secondary">
                Two-Factor Authentication
              </Typography>
              <Typography variant="body1">Enabled</Typography>
            </Box>
            <Box>
              <Typography variant="subtitle2" color="text.secondary">
                Password Strength
              </Typography>
              <Typography variant="body1">Strong</Typography>
            </Box>
            <Box>
              <Typography variant="subtitle2" color="text.secondary">
                Last Login
              </Typography>
              <Typography variant="body1">January 1, 2024</Typography>
            </Box>
            <Box>
              <Typography variant="subtitle2" color="text.secondary">
                Security Questions
              </Typography>
              <Typography variant="body1">Set</Typography>
            </Box>
            <Box>
              <Typography variant="subtitle2" color="text.secondary">
                Account Recovery Options
              </Typography>
              <Typography variant="body1">Email, Phone</Typography>
            </Box>
          </Box>
        </Box>
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
                lg: "1fr"
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
      </Box>
    </Box>
  )
}

export default Settings