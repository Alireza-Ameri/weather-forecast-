import { FC } from "react";

import {
  Link,
  Box,
  Card,
  Typography,
  CardMedia,
  CardContent,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import ThermostatIcon from "@mui/icons-material/Thermostat";

// styles
const useStyles = makeStyles({
  cityCard: {
    margin: 10,
    padding: 5,
    width: "100%",
    display: "flex",
    justifyContent: "space-around",
    borderRadius: "10px",
    boxShadow: "2px 2px 2px 1px rgba(0, 0, 0, 0.2)",
  },
  image: {
    width: "100px",
    height: "100px",
    marginTop: 20,
  },
  link: {
    display: "flex",
    textDecoration: "none",
  },
  text: {
    display: "flex",
    fontSize: "18px",
    fontWeight: "400",
    margin: 5,
    padding: 5,
  },
});

const AllCity: FC<any> = ({ list }) => {
  const styles = useStyles();

  return (
    <Box display="flex" justifyContent="center">
      <Box sx={{ minWidth: 450, maxWidth: 1200 }} aria-label="simple table">
        {list.map((city: any) => {
          return (
            <Link
              key={city.name}
              href={`/city/${city.name}`}
              className={styles.link}
            >
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
                    {city.name}
                    <LocationCityIcon />
                  </Typography>
                  <Typography className={styles.text}>
                    {city.main.temp} °C
                    <ThermostatIcon />
                  </Typography>
                  <Typography className={styles.text}>
                    {city.weather[0].description}
                  </Typography>
                </CardContent>
              </Card>
            </Link>
          );
        })}
      </Box>
    </Box>
  );
};

export default AllCity;
