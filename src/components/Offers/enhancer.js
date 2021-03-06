import { connect } from 'react-redux';
import { fetch, offersIDsSelector } from 'state/offers-slice';

export default connect(
    state => {
        return {
            ui: state.ui.state,
            details: state.ui.details,
            offersIDs: offersIDsSelector(state.offers)
        };
    },
    { fetch }
);
