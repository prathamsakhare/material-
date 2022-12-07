import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import { ExpandMore } from "@mui/icons-material";
import { useState } from "react";
export const MuiAccordian = () => {
  // we have set up the state functionality to operate the accordion group easily so that if we open 1st accordion and then we open another accordion then the first accordion should gets closed

  const [expanded, setexpanded] = useState<string | false>(false);
  // this expanded state is made up for --- if one accordian is open and we open another accordian, then the previous accordian will automatically get collapsed and for this functionality we have made up this state

  // here we have set up our default state of expanded variable to false and it can be a boolean or a string

  const handleChange = (isExpanded: boolean, panel: string) => {
    setexpanded(isExpanded ? panel : false);
    // after calling this function inside the onChange event of an accordion, what it does is ---
    // it set up the isExpanded boolean to panel string if it is available inside the given parameters for the function handleChange
  };

  return (
    <div>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={(event, isExpanded) => handleChange(isExpanded, "panel1")}
      >
        {/* we have set up the first expanded state for the panel 1 to --- 
            expanded = { expanded === "panel1" }
                //expanded state will be other than false if the string will be panel1
            
            also we have made a onChange event where it takes two parameters -- one will be event and other will be a boolean or the string that is isExpanded parameter--- here inside the onChange event we have called a function that contains two parameters --- first one is that isExpanded boolean or string parameter and second one is the string that we have alternately on the place of false
        */}
        <AccordionSummary
          id="panel1-header"
          aria-controls="panel1-content"
          expandIcon={<ExpandMore />}
        >
          <Typography>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus,
            voluptate reprehenderit vitae necessitatibus dolores itaque, vel aut
            fuga perferendis quibusdam beatae possimus odio, officiis maiores
            autem. Sequi excepturi obcaecati impedit.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "panel2"}
        onChange={(event, isExpanded) => handleChange(isExpanded, "panel2")}
      >
        <AccordionSummary
          id="panel2-header"
          aria-controls="panel2-content"
          expandIcon={<ExpandMore />}
        >
          <Typography>Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus,
            voluptate reprehenderit vitae necessitatibus dolores itaque, vel aut
            fuga perferendis quibusdam beatae possimus odio, officiis maiores
            autem. Sequi excepturi obcaecati impedit.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "panel3"}
        onChange={(event, isExpanded) => handleChange(isExpanded, "panel3")}
      >
        <AccordionSummary
          id="panel3-header"
          aria-controls="panel3-content"
          expandIcon={<ExpandMore />}
        >
          <Typography>Accordion 3</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus,
            voluptate reprehenderit vitae necessitatibus dolores itaque, vel aut
            fuga perferendis quibusdam beatae possimus odio, officiis maiores
            autem. Sequi excepturi obcaecati impedit.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};
