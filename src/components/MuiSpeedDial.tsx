import React from 'react'
import { SpeedDial, SpeedDialAction, SpeedDialIcon } from '@mui/material'
import ContentCopy from '@mui/icons-material/ContentCopy';
import Print from '@mui/icons-material/Print';
import Share from '@mui/icons-material/Share';
export const MuiSpeedDial = () => {
  return (
    <SpeedDial ariaLabel='Navigation-speed-dial' sx={{position: "absolute", bottom: 16, right: 16}}icon={<SpeedDialIcon />}>
        <SpeedDialAction icon={<ContentCopy />} tooltipTitle='Copy' />
        <SpeedDialAction icon={<Print />} tooltipTitle='Print' />
        <SpeedDialAction icon={<Share />} tooltipTitle='Share' />
    </SpeedDial>
  )
}
