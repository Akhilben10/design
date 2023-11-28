import React from "react";
import ChatBot from "react-simple-chatbot";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import { makeStyles } from "@material-ui/core";

const steps = [
  {
    id: "1",
    message: "What is your name?",
    trigger: "2",
  },
  {
    id: "2",
    user: true,
    trigger: "3",
  },
  {
    id: "3",
    message: "Hi {previousValue}, nice to meet you!",
    end: true,
  },
];

const Simplechatbot = ({ clickedText }) => {
  console.log("fghujik");

  return (
    <div>
      <ChatBot
        headerTitle={clickedText}
        speechSynthesis={{ enable: true, lang: "en" }}
        //
        //contentStyle={{ maxHeight: "400px" }}
        style={{ width: "600px" }}
        steps={steps}
      />
    </div>
  );
};
export default Simplechatbot;
