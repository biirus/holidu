import React, { useCallback, useEffect } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import CircularProgress from '@material-ui/core/CircularProgress';

import SearchIcon from '@material-ui/icons/Search';
import SuccessIcon from '@material-ui/icons/Check';
import ErrorIcon from '@material-ui/icons/Close';

import { useSearchForm } from 'hooks/use-search-form';
import { useStyles } from './styles';

function Search({ ui, onSearch }) {
    const classes = useStyles();

    const [search, handleChange, onSubmit, queryParams] = useSearchForm();

    const handleFormSubmit = useCallback(
        e => {
            e.preventDefault();
            onSubmit();
            onSearch(queryParams.searchTerm);
        },
        [onSubmit, onSearch, queryParams]
    );

    // inital search
    useEffect(() => {
        onSearch(queryParams.searchTerm);
    }, [onSearch, queryParams]);

    const isIDLE = ui === 'idle';
    const isPending = ui === 'pending';
    const isSuccess = ui === 'success';
    const isError = ui === 'error';

    return (
        <AppBar position="sticky">
            <form onSubmit={handleFormSubmit}>
                <Toolbar className={classes.root}>
                    <Typography variant="h6">Holidu</Typography>
                    <TextField
                        fullWidth
                        className={classes.search}
                        variant="outlined"
                        size="small"
                        placeholder="Where do you want to go?"
                        value={search}
                        onChange={handleChange}
                    />
                    <IconButton type="submit" disabled={!isIDLE}>
                        {isIDLE && <SearchIcon />}
                        {isSuccess && <SuccessIcon />}
                        {isError && <ErrorIcon />}
                        {isPending && (
                            <CircularProgress color="secondary" size={24} />
                        )}
                    </IconButton>
                </Toolbar>
            </form>
        </AppBar>
    );
}

export default Search;
