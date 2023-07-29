import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Container, Grid } from "@mui/material"; // Import Grid component from Material-UI

const MediaCard = () => {
  const [estates, setEstates] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:1337/api/estates")
      .then((response) => {
        setEstates(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching estates:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Container>
      <h1>Estates</h1>
      <Grid container spacing={2}>
        {" "}
        {/* Use Grid container to create a row */}
        {estates.map((estate) => (
          <Grid item key={estate.id} xs={12} sm={6} md={4} lg={3}>
            {" "}
            {/* Each Card will take 6 columns on small screens, 4 columns on medium screens, and 3 columns on large screens */}
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                sx={{ height: 140 }}
                component="img"
                image={estate.attributes.Image}
                title={estate.attributes.Name}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "../assets/images/cards/img2.png";
                }}
              />
              <CardContent className="text-left">
                <Typography gutterBottom variant="h5" component="div">
                  {estate.attributes.Name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {estate.attributes.Description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default MediaCard;
