import React, { useState } from "react";
import { Tooltip, Button } from "@mui/material";
import ScheduleIcon from "@mui/icons-material/Schedule";
import dayjs from "dayjs";
const LastUpdatedTooltip = () => {
  const [lastUpdated, setLastUpdated] = useState("2023-12-05T03:54:23");
  const handleSave = () => {
    setLastUpdated(new Date("2023-12-07T17:24:23"));
  };
  return (
    <Tooltip
      title={`Last Updated: ${
        lastUpdated
          ? dayjs(lastUpdated).format("YYYY-MM-DD HH:mm:ss")
          : "Hover to see last updated"
      }`}
      arrow
    >
      <Button>
        <ScheduleIcon />
      </Button>
    </Tooltip>
  );
};
export default LastUpdatedTooltip;
