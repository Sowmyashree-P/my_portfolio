import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
    },
  }));

const Projects = () => {
    const classes = useStyles();
    return (<div>
        <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>RWML Platform</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
              <b>Technologies Used:</b> Reacts, Redux, Golang, Elastic Search <br />
              RWML is application which helps pharmaceutical executives to know the current market
               situation, to promote their brand, patient journey with different medicines for a 
               particular disease etc. Currently developing Covid sub application to know the 
               impact of covid on hospitals which involves how visit of a particular patient to
            physician has been changed to virtual, how the prescription is changed to RRX etc.
            <br /><b>My Role:</b> Front end developer
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Experience Design & Development (EDD)</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
             <b>Technologies Used:</b> Angular, HTML5, CSS3 <br />
             EDD is an application which creates, maintains and manages accounts. 
             It displays all the device details pertaining to a particular account and helps to 
             maintain and control it.
                <br /><b>My Role:</b> Front end developer
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography className={classes.heading}>LOKI</Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Typography>
            <b>Technologies Used:</b> JavaScript, ReactJS, HTML5, CSS3, Redux <br />
            Loki is a distributed network modeling and reporting toolkit that parses “raw” 
            network data (e.g. configuration, show commands, etc.) and constructs an object model
             representation of a network (devices, interfaces, neighbors, etc.) as a topology.
                <br /><b>My Role:</b> Front end developer
            </Typography>
        </AccordionDetails>
      </Accordion>
    </div>)
}

export default Projects;