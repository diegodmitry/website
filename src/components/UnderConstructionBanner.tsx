import { Alert, AlertTitle } from '@mui/material';

export const UnderConstructionBanner = () => {
  return (
    <Alert severity="info" sx={{ mb: 3 }}>
      <AlertTitle>Under Construction 🚧 👷🏻‍♂️ 🛠️ 🚧</AlertTitle>
      This website is currently under construction. Some features may not be available yet.
    </Alert>
  );
};