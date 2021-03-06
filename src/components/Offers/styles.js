import { makeStyles } from '@material-ui/core/styles';
import wave from 'assets/wave.svg';

export const useStyles = makeStyles(({ spacing }) => {
    return {
        root: {
            minHeight: '100vh',

            background: `url(${wave}), url(${wave}), url(${wave}), #e4f1fd`,
            backgroundPosition:
                'bottom center, center calc(100% - 10px), center calc(100% - 20px)',
            backgroundBlendMode: 'normal, hard-light, hard-light',
            backgroundSize: '100%',
            backgroundRepeat: 'no-repeat'
        },

        list: {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gridGap: spacing(3),
            padding: spacing(3)
        },

        error: {
            margin: spacing(3),
            padding: spacing(2)
        },

        specialOffers: {
            margin: spacing(3)
        },

        text: {
            padding: spacing(2)
        }
    };
});
