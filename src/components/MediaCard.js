import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/material";

const MediaCard = () => {
  const [estates, setEstates] = useState([]);
  const [loading, setLoading] = useState(true);

  console.log(estates);

  useEffect(() => {
    axios
      .get("http://localhost:1337/api/estates")
      .then((response) => {
        console.log(response);
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
    <Container >
      <h1>Estates</h1>
      {estates.map((estate) => (
        <Card key={estate.id} sx={{ maxWidth: 345 }}>
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
          <CardContent>
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
      ))}
    </Container>
  );
};

export default MediaCard;
