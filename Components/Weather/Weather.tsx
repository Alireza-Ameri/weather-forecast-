import { FC } from "react";

import { Box, Card, Typography, CardContent, CardMedia } from "@mui/material";
import { makeStyles } from "@mui/styles";

// styles
const useStyles = makeStyles({
  cityCard: {
    marginTop: 15,
    padding: 5,
    width: "100%",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    borderRadius: "10px",
    boxShadow: "2px 2px 2px 1px rgba(0, 0, 0, 0.2)",
    border: "1px solid #333",
  },
  image: {
    width: "100px",
    height: "100px",
    marginTop: 20,
  },

  context: {
    display: "flex",
    padding: 10,
  },
  text: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    fontSize: "20px",
    fontWeight: "400",
    margin: 5,
    padding: 5,
  },
  title: {
    textAlign: "center",
    fontSize: "24px",
    fontWeight: "600",
  },
});

const Weather: FC<any> = ({ city }) => {
  const styles = useStyles();
  return (
    <Box display="flex" justifyContent="center" alignItems="center">
      <Box sx={{ minWidth: 400, maxWidth: 1200 }} aria-label="simple table">
        <Typography className={styles.title}>{city.name}</Typography>
        <Card className={styles.cityCard}>
          <CardMedia
            component="img"
            height="194"
            image="https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Gnome-weather-few-clouds.svg/1024px-Gnome-weather-few-clouds.svg.png"
            alt="Paella dish"
            className={styles.image}
          />
          <CardContent>
            <Typography className={styles.text}>
              <Typography>Temperature </Typography>
              <Typography>{city.main.temp}</Typography>
            </Typography>
            <Typography className={styles.text}>
              <Typography>Max Temperature </Typography>
              <Typography>{city.main.temp_max}</Typography>
            </Typography>
            <Typography className={styles.text}>
              <Typography>Min Temperature </Typography>
              <Typography>{city.main.temp_min}</Typography>
            </Typography>
            <Typography className={styles.text}>
              <Typography>Pressure </Typography>
              <Typography>{city.main.pressure}</Typography>
            </Typography>
            <Typography className={styles.text}>
              <Typography>Feels_like </Typography>
              <Typography>{city.main.feels_like}</Typography>
            </Typography>
            <Typography className={styles.text}>
              <Typography>Humidity </Typography>
              <Typography>{city.main.humidity}</Typography>
            </Typography>
            <Typography className={styles.text}>
              <Typography>Grnd_level </Typography>
              <Typography>{city.main.grnd_level}</Typography>
            </Typography>
            <Typography className={styles.text}>
              <Typography>Sea_level </Typography>
              <Typography>{city.main.sea_level}</Typography>
            </Typography>
            <Typography className={styles.text}>
              <Typography>Description </Typography>
              <Typography>{city.weather[0].description}</Typography>
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};

export default Weather;
