import { makeStyles } from '@material-ui/core/styles';
import wave from 'assets/wave.svg';

export const useStyles = makeStyles(({ spacing }) => {
    const formSize = spacing(40);

    return {
        root: {
            display: 'grid',
            height: '100vh',
            padding: spacing(8),
            gridTemplateColumns: '1fr',
            gridTemplateRows: 'auto 1fr',

            //linear-gradient(to right, #3f51b5, #f50057)
            background: `url(${wave}), url(${wave}), url(${wave}), white`,
            backgroundPosition: 'bottom center, center 98%, center 96%',
            backgroundBlendMode: 'normal, hard-light, hard-light',
            backgroundSize: '100%',
            backgroundRepeat: 'no-repeat'
        },

        header: {},

        hero: {
            display: 'grid',
            gridTemplateColumns: `1fr ${formSize}px`,
            alignItems: 'center',
            gridGap: spacing(5)
        },

        form: {
            display: 'grid',
            gridTemplateColumns: '1fr',
            gridGap: spacing(2),
            justifyItems: 'end'
        }
    };
});
