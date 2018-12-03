import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { navigate } from "../../helpers/router";
import { categories, categoriesByIndex } from "./categories";

const styles = {};

function CategoriesBar( props: any ) {
  return (
    <Paper style={{ borderRadius: 0 }}>
      <Tabs
        value={categories[ props.pathname ].index}
        onChange={( _, value ) => navigate( categoriesByIndex[ value ] )}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab label="Highlights" />
        <Tab label="Festivals" />
        <Tab label="Concerts" />
        <Tab label="Theaters" />
        <Tab label="Others" />
      </Tabs>
    </Paper>
  );
}

export default withStyles( styles )( CategoriesBar );
