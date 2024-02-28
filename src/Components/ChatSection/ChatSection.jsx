import React from "react";
import ChatSectionHeader from "./ChatSectionHeader";
import MessageSection from "./MesssageSection";
import ChatSectionFooter from "./ChatSectionFooter";
import { Stack } from "@mui/material";
import { useSelector } from "react-redux";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Screen from "../Screen";


const ChatSection = (props) =>{
    const selectedPerson = useSelector((state)=>state.people.selectedPerson)
  

    // useEffect(() => {
    
    //     dispatch(setSelectedPerson(props.person));
    // }, [mobileNo]);

               console.log("00000000000000",selectedPerson)   


    return(
    
    <Stack direction="column" height="75%" width="100%"
    // sx={{display: { xs:selectedPerson?'none': 'block', sm: 'block' }}}
    // sx={{display: { xs:selectedPerson?'block': 'none', sm: 'block' }}}
    
    >

      <Routes>
        <Route path="/" element={<Screen/>} />
        <Route path="/:mobileNo" element={<><ChatSectionHeader/> <MessageSection /> 
        <ChatSectionFooter SendMessage = {props.SendMessage}
            /> </>} />
      </Routes>
            {/* <ChatSectionHeader 
            // mobileNo={mobileNo} 
            />
            <MessageSection />
            <ChatSectionFooter
            SendMessage = {props.SendMessage}
            /> */}
        </Stack>


    )
}
export default ChatSection;