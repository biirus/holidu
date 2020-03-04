import React, { useCallback } from 'react';
import { Typography, TextField, Button } from '@material-ui/core';

import { navigate } from 'hookrouter';
import { useStyles } from './styles';

function App() {
    const classes = useStyles();

    const showOffers = useCallback(() => {
        navigate('/offers');
    }, []);

    return (
        <div className={classes.root}>
            <header>
                <Typography variant="h2" fontWeight="bold">
                    Holidu
                </Typography>
            </header>

            <div className={classes.hero}>
                <div>
                    <Typography variant="h4" gutterBottom>
                        Your search engine for vacation rentals
                    </Typography>
                    <Typography color="textSecondary">
                        We compare 15,454,299 vacation rentals from hundreds of
                        travel sites… so you don’t have to.
                    </Typography>
                </div>

                <form className={classes.form} onSubmit={showOffers}>
                    <TextField
                        fullWidth
                        variant="filled"
                        label="Where do you want to go?"
                    />

                    <Button color="primary" variant="contained" type="submit">
                        Search
                    </Button>
                </form>
            </div>
        </div>
    );
}

export default App;
