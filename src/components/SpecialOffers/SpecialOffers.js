import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

function SpecialOffers({ nextPage, ui, fetch }) {
    return (
        <List>
            <ListItem alignItems="flex-start" button>
                <ListItemAvatar>
                    <Avatar alt="">NY</Avatar>
                </ListItemAvatar>
                <ListItemText
                    primary="New York City"
                    secondary={
                        <React.Fragment>
                            <Typography
                                component="span"
                                variant="body2"
                                color="textPrimary"
                            >
                                Apartment
                            </Typography>
                            {
                                " — I'll be in your neighborhood doing errands this…"
                            }
                        </React.Fragment>
                    }
                />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start" button>
                <ListItemAvatar>
                    <Avatar alt="">SF</Avatar>
                </ListItemAvatar>
                <ListItemText
                    primary="San Francisco"
                    secondary={
                        <React.Fragment>
                            <Typography
                                component="span"
                                variant="body2"
                                color="textPrimary"
                            >
                                Apartment
                            </Typography>
                            {" — Wish I could come, but I'm out of town this…"}
                        </React.Fragment>
                    }
                />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start" button>
                <ListItemAvatar>
                    <Avatar alt="">LA</Avatar>
                </ListItemAvatar>
                <ListItemText
                    primary="Los Angeles"
                    secondary={
                        <React.Fragment>
                            <Typography
                                component="span"
                                variant="body2"
                                color="textPrimary"
                            >
                                Apartment
                            </Typography>
                            {
                                ' — Do you have Paris recommendations? Have you ever…'
                            }
                        </React.Fragment>
                    }
                />
            </ListItem>
        </List>
    );
}

export default SpecialOffers;
