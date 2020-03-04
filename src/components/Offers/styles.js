import { makeStyles } from '@material-ui/core/styles';
import wave from 'assets/wave.svg';

export const useStyles = makeStyles(({ spacing }) => {
    return {
        root: {
            minHeight: '100vh',
            padding: spacing(3),

            background: `url(${wave}), url(${wave}), url(${wave}), #e4f1fd`,
            backgroundPosition:
                'bottom center, center calc(100% - 10px), center calc(100% - 20px)',
            backgroundBlendMode: 'normal, hard-light, hard-light',
            backgroundSize: '100%',
            backgroundRepeat: 'no-repeat'
        },

        searchParams: {
            padding: spacing(2)
        },

        list: {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 520px))',
            gridGap: spacing(3)
        }
    };
});
