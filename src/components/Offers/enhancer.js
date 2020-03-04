import { connect } from 'react-redux';
import { fetch } from 'state/offers-slice';

export default connect(
    state => {
        return {
            ui: state.ui,
            offers: state.offers.offers
        };
    },
    { fetch }
);
