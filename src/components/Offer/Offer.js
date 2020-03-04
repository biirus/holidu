import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';

import BedroomIcon from '@material-ui/icons/KingBed';
import GuestsIcon from '@material-ui/icons/Group';

import { useStyles } from './styles';

const Offer = ({ offer }) => {
    const classes = useStyles();

    console.log('offer', offer);

    return (
        <Card className={classes.root}>
            <div>
                <CardMedia
                    className={classes.media}
                    image={offer.photos[0].m}
                    title={offer.location.name}
                />
                <CardContent>
                    <Typography
                        className={classes.title}
                        gutterBottom
                        variant="h5"
                        component="h2"
                        title={offer.details.name}
                    >
                        {offer.details.name}
                    </Typography>
                    <List>
                        <ListItem dense>
                            <ListItemIcon>
                                <BedroomIcon />
                            </ListItemIcon>
                            <ListItemText primary="Bedrooms" />
                            <ListItemSecondaryAction>
                                {offer.details.bedroomsCount}
                            </ListItemSecondaryAction>
                        </ListItem>
                        <ListItem dense>
                            <ListItemIcon>
                                <GuestsIcon />
                            </ListItemIcon>
                            <ListItemText primary="Maximum guests" />
                            <ListItemSecondaryAction>
                                {offer.details.guestsCount}
                            </ListItemSecondaryAction>
                        </ListItem>
                    </List>
                </CardContent>
            </div>

            <CardActions className={classes.actions}>
                <Typography variant="h4">{offer.price.total}</Typography>
                <Button variant="contained" color="primary">
                    View Offer
                </Button>
            </CardActions>
        </Card>
    );
};

export default Offer;
