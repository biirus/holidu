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
import Rating from '@material-ui/lab/Rating';

import BedroomIcon from '@material-ui/icons/KingBed';
import GuestsIcon from '@material-ui/icons/Group';
import AreaIcon from '@material-ui/icons/AspectRatio';

import { useStyles } from './styles';

const currencies = {
    EUR: '€',
    USD: '$'
};

const Offer = ({ offer }) => {
    const classes = useStyles();

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

                    <Typography component="div" className={classes.rating}>
                        <Rating
                            name="read-only"
                            value={(offer.rating.value / 100) * 5}
                            max={5}
                            readOnly
                        />{' '}
                        ({offer.rating.count})
                    </Typography>

                    <List>
                        <ListItem dense disableGutters>
                            <ListItemIcon>
                                <BedroomIcon />
                            </ListItemIcon>
                            <ListItemText primary="Bedrooms" />
                            <ListItemSecondaryAction>
                                {offer.details.bedroomsCount}
                            </ListItemSecondaryAction>
                        </ListItem>
                        <ListItem dense disableGutters>
                            <ListItemIcon>
                                <GuestsIcon />
                            </ListItemIcon>
                            <ListItemText primary="Maximum guests" />
                            <ListItemSecondaryAction>
                                {offer.details.guestsCount}
                            </ListItemSecondaryAction>
                        </ListItem>
                        {offer.details.area && (
                            <ListItem dense disableGutters>
                                <ListItemIcon>
                                    <AreaIcon />
                                </ListItemIcon>
                                <ListItemText primary="Area" />
                                <ListItemSecondaryAction>
                                    {offer.details.area.value} m<sup>2</sup>
                                </ListItemSecondaryAction>
                            </ListItem>
                        )}
                    </List>
                </CardContent>
            </div>

            <CardActions className={classes.actions}>
                <Typography variant="h4">
                    {currencies[offer.price.currency]} {offer.price.daily}{' '}
                    <Typography component="span" color="textSecondary">
                        per night
                    </Typography>
                </Typography>
                <Button variant="contained" color="primary">
                    View Offer
                </Button>
            </CardActions>
        </Card>
    );
};

export default Offer;
