import React from "react";
import { Grid } from "@material-ui/core";
import Details from "./components/details/Details";
import useStyles from "./styles";
import Main from "./components/main/Main";
function App() {
  const classes = useStyles();
  return (
    <div>
      <Grid
        className={classes.grid}
        container
        spacing={0}
        alignItems="center"
        justify="center"
        style={{ height: "100vh" }}
      >
        <Grid item xs={12} sm={4} className={classes.mobile}>
          <Details title="Income" />
        </Grid>
        <Grid item xs={12} sm={3} className={classes.main}>
          <Main />
        </Grid>
        {/* <Grid item xs={12} sm={4} className={classes.desktop}>
          <Details title="Income" />
        </Grid> */}
        <Grid item xs={12} sm={4} className={classes.last}>
          <Details title="Expense" />
        </Grid>
        {/* <PushToTalkButtonContainer>
          <PushToTalkButton />
        </PushToTalkButtonContainer> */}
      </Grid>
    </div>
  );
}

export default App;
