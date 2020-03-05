import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(({ spacing }) => {
    return {
        root: {
            display: 'flex',
            padding: [[spacing(3), spacing(6), spacing(6)]],
            justifyContent: 'center'
        }
    };
});
