import * as React from 'react';
import Accordion from '@mui/material/Accordion';
// import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import Button from '@mui/material/Button';

// import custom css 

import './Accordion.css'

export default function AccordionUsage() {
  return (
    <div>
      <h3>SKILL SET</h3>
      <Accordion className='Accordion_content'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <span>MERN STACK</span>
        </AccordionSummary>
        <AccordionDetails>
          <div className='techList'>
            <li>Framework / Library </li> 
            <p>NEXT Js / React </p>
            <li>Styling  </li>
            <p>Vanilla css , Bootstrap , Tailwind , Sass</p>
            <li>Back-End </li>
            <p>Node js</p>
            <li>Database  </li>
            <p>MongoDB</p>
            <li>Build Tool</li>
            <p>Vite</p>
          </div>
        </AccordionDetails>
      </Accordion>

      
      <Accordion className='Accordion_content'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <span>PROJECT MANAGEMENT</span>
        </AccordionSummary>
        <AccordionDetails>
          <li className='toMyrepo hover_repo'><a  href="https://github.com/kirinryu-dev?tab=repositories">
             GIT HUB Repositorie
          </a></li>
        </AccordionDetails>
      </Accordion>

      {/* <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          Accordion 3
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          Accordion 4
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          Accordion 5
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          Accordion 6
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          Accordion 7
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet reiciendis nemo sequi quibusdam magnam. Assumenda labore perferendis perspiciatis quas, quos aspernatur nostrum, minima fuga sit nesciunt reiciendis hic quisquam suscipit expedita magnam, corrupti ut! Laborum, esse velit eos incidunt distinctio illo omnis. Obcaecati quam ut pariatur quis tempora corporis animi eum, delectus fugit atque fuga recusandae sit iste nesciunt perspiciatis earum distinctio omnis velit ipsa molestiae. Ut porro expedita eaque sapiente temporibus distinctio natus vel quod, quas quam perspiciatis assumenda aspernatur quos consectetur reiciendis quibusdam laborum ex reprehenderit quo quisquam blanditiis necessitatibus, nesciunt inventore? Itaque ad nisi laudantium suscipit similique?
          
        </AccordionDetails>
      </Accordion> */}


      {/* <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          Accordion Actions
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
        <AccordionActions>
          <Button>Cancel</Button>
          <Button>Agree</Button>
        </AccordionActions>
      </Accordion> */}


    </div>
  );
}