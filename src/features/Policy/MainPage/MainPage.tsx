import React from "react";
import { Container, Grid } from "semantic-ui-react";
import GiaoHang from "../GiaoHang/GiaoHang";
import "./MainPage.scss";
const MainPage = () => {
  return (
    <Container>
      <Grid className="small-container">
        <Grid.Column width={4}>Menu - Bar</Grid.Column>
        <Grid.Column width={12}>
          <GiaoHang />
        </Grid.Column>
      </Grid>
    </Container>
  );
};

export default MainPage;
