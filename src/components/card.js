import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import '../styles/card.css'

const useStyles = makeStyles({
    card: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
  });

const SpotList = (props) => {

    const classes = useStyles();

    return(
        <Card className={classes.card+" sb-card"}>
            <CardActionArea>
            <CardMedia
                className={classes.media}
                image="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                title="Contemplative Reptile"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">{props.spotName}</Typography>
                <Typography variant="body2" color="textSecondary" component="p">{props.description}</Typography>
            </CardContent>
            </CardActionArea>
        </Card>
    );
}

export default SpotList;