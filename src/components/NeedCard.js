import React from "react";
import {
  Grid,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Button,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import convertDate from "../utils/date";
const useStyles = makeStyles({
  root: {
    width: "70%",
  },
  descDiv: {
    whiteSpace: "wrap",
  },
  commit: {
    backgroundColor: "#b3eba7",
    height: "30px",
  },
  date: {
    fontSize: "12px",
  },
});

function NeedCard({ title, description, details, date, id, Commit }) {
  const classes = useStyles();

  return (
    <Grid
      container
      item
      xs={12}
      justifyContent="space-around"
      alignItems="center"
    >
      <Accordion className={classes.root}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Grid container direction="column" className={classes.descDiv}>
            <Grid item>{title}</Grid>
            <Grid item className={classes.date}>
              {convertDate(date)}
            </Grid>
          </Grid>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container direction="column">
            <Grid item>{details ? details : "No Details"}</Grid>
            <br />
            <Grid item>{description ? description : "No Description"}</Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>
      <Button onClick={() => Commit(id)} className={classes.commit}>
        Commit
      </Button>
    </Grid>
  );
}

export default NeedCard;
