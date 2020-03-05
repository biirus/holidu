import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(({ spacing }) => {
    return {
        root: {
            display: 'grid',
            gridTemplateColumns: 'max-content 1fr max-content',
            gridGap: spacing(2)
        },

        search: {
            backgroundColor: 'rgba(255, 255, 255, .3)',
            borderRadius: 4,

            '& .MuiOutlinedInput-notchedOutline': {
                border: 'none'
            }
        }
    };
});
