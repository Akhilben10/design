import React, { useState, useEffect } from "react";
import { Tooltip, Button } from "@mui/material";
import ScheduleIcon from "@mui/icons-material/Schedule";
import dayjs from "dayjs";
const LastUpdatedTooltip = () => {
  const [lastUpdated, setLastUpdated] = useState(new Date());
  const handleSave = async () => {
    // Fetch the last updated timestamp from the server or API after deploying
    const response = await fetch("/api/getLastUpdated"); // Adjust the endpoint
    const data = await response.json();
    setLastUpdated(new Date(data.lastUpdated));
  };
  useEffect(() => {
    // Subscribe to save events or other events that trigger code updates
    // For demonstration, we use a simple interval to simulate auto-updating
    const interval = setInterval(() => {
      setLastUpdated(new Date());
    }, 60000); // Update every 1 minute (adjust as needed)
    return () => clearInterval(interval);
  }, []);
  return (
    <Tooltip
      title={`Last Updated: ${dayjs(lastUpdated).format(
        "YYYY-MM-DD HH:mm:ss"
      )}`}
      arrow
    >
      <Button onClick={handleSave}>
        <ScheduleIcon />
      </Button>
    </Tooltip>
  );
};
export default LastUpdatedTooltip;
// import React, { useState, useEffect } from 'react';
// import { Tooltip, Button } from '@mui/material';
// import ScheduleIcon from '@mui/icons-material/Schedule';
// import dayjs from 'dayjs';
// const LastUpdatedTooltip = () => {
//   const [lastUpdated, setLastUpdated] = useState(new Date());
//   const handleSave = () => {
//     // Update the lastUpdated state when the code is saved
//     setLastUpdated(new Date());
//   };
//   useEffect(() => {
//     // Subscribe to save events or other events that trigger code updates
//     // For example, you can use VS Code's onSave event
//     // For demonstration, we use a simple interval to simulate auto-updating
//     const interval = setInterval(() => {
//       setLastUpdated(new Date());
//     }, 60000); // Update every 1 minute (adjust as needed)
//     return () => clearInterval(interval);
//   }, []);
//   return (
//     <Tooltip title={`Last Updated: ${dayjs(lastUpdated).format('YYYY-MM-DD HH:mm:ss')}`} arrow>
//       <Button onClick={handleSave}><ScheduleIcon/></Button>
//     </Tooltip>
//   );
// };
// export default LastUpdatedTooltip;
