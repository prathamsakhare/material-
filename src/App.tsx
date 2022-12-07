import { Stack } from '@mui/system';
import React from 'react';
import './App.css';
import { MuiAvatar } from './components/MuiAvatar';
import { MuiBottonNavigation } from './components/MuiBottonNavigation';
import { MuiBreadcrumbs } from './components/MuiBreadcrumbs';
import { MuiChip } from './components/MuiChip';
import { MuiDrawer } from './components/MuiDrawer';
import { MuiLink } from './components/MuiLink';
import { MuiList } from './components/MuiList';
import { MuiSpeedDial } from './components/MuiSpeedDial';
// import { MuiAccordian } from './components/MuiAccordian';
// import { MuiAutocomplete } from './components/MuiAutocomplete';
// import { MuiButton } from './components/MuiButton';
// import { MuiCard } from './components/MuiCard';
// import { MuiCheckbox } from './components/MuiCheckbox';
// import { MuiLayout } from './components/MuiLayout';
// import { MuiRadioButton } from './components/MuiRadioButton';
// import { MuiRating } from './components/MuiRating';
// import { MuiSelect } from './components/MuiSelect';
// import { MuiSwitch } from './components/MuiSwitch';
// import { MuiTextfield } from './components/MuiTextfield';
import { MuiTypography } from './components/MuiTypography';
// import { MuiImageList } from './components/MuiImageList';
// import { MuiNavbar } from './components/MuiNavbar';
import { NavTheMohh } from './components/NavTheMohh';

function App() {
  return (
    <div className="App"> 
      <Stack direction='column' spacing={2}>
      {/* <MuiTypography /> */}
      {/* <MuiButton /> */}
      {/* <MuiTextfield /> */}
      {/* <MuiSelect /> */}
      {/* <MuiRadioButton /> */}
      {/* <MuiCheckbox /> */}
      {/* <MuiSwitch /> */}
      {/* <MuiRating /> */}
      {/* <MuiAutocomplete /> */}
      {/* <MuiLayout /> */}
      {/* <MuiCard /> */}
      {/* <MuiAccordian /> */}
      {/* <MuiImageList /> */}

      <NavTheMohh />
      {/* <MuiLink /> */}
      {/* <MuiNavbar /> */}
      <div className='midSection'>
        <MuiBreadcrumbs />
        {/* <MuiDrawer /> */}
        {/* <MuiSpeedDial /> */}
        {/* <MuiAvatar /> */}
        <MuiList />
        <MuiChip />
        </div>
      <MuiBottonNavigation />
      </Stack>
    </div>
  );
}

export default App;
