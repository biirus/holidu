import React, { useCallback } from 'react';
import Offer from 'components/Offer';
import Search from 'components/Search';
import Pagination from 'components/Pagination';
import SpecialOffers from 'components/SpecialOffers';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import { useStyles } from './styles';

function Offers({ fetch, offersIDs, ui, details }) {
    const classes = useStyles();

    const onSearch = useCallback(
        searchTerm => {
            fetch({
                url: `/rest/v6/search/offers?searchTerm=${searchTerm}`,
                cleanFirst: true
            });
        },
        [fetch]
    );

    return (
        <div className={classes.root}>
            <Search onSearch={onSearch} />

            {offersIDs.length > 0 && (
                <div className={classes.list}>
                    {offersIDs.map(ID => (
                        <Offer key={ID} id={ID} />
                    ))}
                </div>
            )}

            {(ui === 'error' || details) && (
                <>
                    <Paper className={classes.error}>
                        <Typography>
                            We are so sorry, but some error has been occured: "
                            {details}"
                        </Typography>
                        <Typography>
                            Try again latter or contact with our support team.
                        </Typography>
                    </Paper>
                    <Paper className={classes.specialOffers}>
                        <div className={classes.text}>
                            <Typography variant="h6">Meanwhile</Typography>
                            <Typography>
                                Check our latest special offers
                            </Typography>
                        </div>

                        <SpecialOffers />
                    </Paper>
                </>
            )}

            <Pagination />
        </div>
    );
}

export default Offers;
