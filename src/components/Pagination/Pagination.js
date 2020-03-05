import React, { useCallback } from 'react';
import Button from '@material-ui/core/Button';

import { useStyles } from './styles';

function Pagination({ nextPage, ui, fetch }) {
    const classes = useStyles();

    const loadMore = useCallback(() => {
        fetch({ url: nextPage });
    }, [fetch, nextPage]);

    if (!nextPage) {
        return null;
    }
    return (
        <div className={classes.root}>
            <Button
                variant="contained"
                disabled={ui !== 'idle'}
                onClick={loadMore}
            >
                Load more offers
            </Button>
        </div>
    );
}

export default Pagination;
