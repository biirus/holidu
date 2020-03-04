import React, { useEffect } from 'react';
import Paper from '@material-ui/core/Paper';
import Offer from 'components/Offer';

// import { navigate } from 'hookrouter';
import { useStyles } from './styles';

function Offers({ fetch, offers }) {
    const classes = useStyles();

    useEffect(() => {
        fetch();
    }, [fetch]);

    return (
        <div className={classes.root}>
            <Paper className={classes.searchParams}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
                odio soluta deleniti tenetur, consequuntur consequatur nostrum
                quod qui facere voluptatibus rerum harum non itaque natus
                deserunt facilis aperiam, sequi iure.
            </Paper>

            <div className={classes.list}>
                {offers.map(offer => (
                    <Offer key={offer} id={offer} />
                ))}
            </div>
        </div>
    );
}

export default Offers;
