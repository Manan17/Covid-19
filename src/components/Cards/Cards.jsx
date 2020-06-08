import React from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import styles from "./Cards.module.css";
import CountUp from "react-countup";
import cx from "classnames";

const Cards = ({ data: { confirmed, deaths, recovered, lastUpdate } }) => {
  if (!confirmed) {
    return "Loading .....";
  }

  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        <Grid
          item
          component={Card}
          className={cx(styles.cards, styles.infected)}
          xs={12}
          md={3}
        >
          <Typography color="textSecondary" gutterBottom>
            Infected
          </Typography>
          <Typography variant="h5">
            <CountUp
              start={0}
              end={confirmed.value}
              separator=","
              duration={1.5}
            />
          </Typography>
          <Typography color="textSecondary">
            {new Date(lastUpdate).toDateString()}
          </Typography>
          <Typography variant="body2">
            Number of active cases of Covid-19
          </Typography>
        </Grid>
        <Grid
          item
          component={Card}
          className={cx(styles.cards, styles.recovered)}
          xs={12}
          md={3}
        >
          <Typography color="textSecondary" gutterBottom>
            Recovored
          </Typography>
          <Typography variant="h5">
            <CountUp
              start={0}
              end={recovered.value}
              separator=","
              duration={1.5}
            />
          </Typography>
          <Typography color="textSecondary">
            {new Date(lastUpdate).toDateString()}
          </Typography>
          <Typography variant="body2">
            Number of recovered cases from Covid-19
          </Typography>
        </Grid>
        <Grid
          item
          component={Card}
          className={cx(styles.cards, styles.deaths)}
          xs={12}
          md={3}
        >
          <Typography color="textSecondary" gutterBottom>
            Deaths
          </Typography>
          <Typography variant="h5">
            <CountUp
              start={0}
              end={deaths.value}
              separator=","
              duration={1.5}
            />
          </Typography>
          <Typography color="textSecondary">
            {new Date(lastUpdate).toDateString()}
          </Typography>
          <Typography variant="body2">
            Number of deaths due to Covid-19
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default Cards;
