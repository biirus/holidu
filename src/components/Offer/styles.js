import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(({ spacing }) => {
    return {
        root: {
            display: 'grid',
            gridTemplateColumns: '1fr',
            gridTemplateRows: '1fr auto',
            alignItems: 'start'
        },

        media: {
            height: 250
        },

        title: {
            display: 'box',
            maxHeight: '3em',
            boxOrient: 'vertical',
            overflow: 'hidden',

            lineClamp: 2,
            whiteSpace: 'normal',
            textOverflow: 'ellipsis'
        },

        rating: {
            display: 'flex',
            alignItems: 'center'
        },

        actions: {
            justifyContent: 'space-between',
            padding: spacing(2)
        }
    };
});
