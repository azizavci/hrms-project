import React from "react";
import EmployerList from "../pages/EmployerList";
import { Grid } from "semantic-ui-react";
import CandidateList from "../pages/CandidateList";

export default function Dashboard() {
  return (
    <div>
      <Grid>
        <Grid.Row>
          <Grid.Column>
            <EmployerList></EmployerList>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <CandidateList></CandidateList>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
