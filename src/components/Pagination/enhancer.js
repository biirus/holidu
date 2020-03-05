import { connect } from 'react-redux';
import { fetch, cursorSelector } from 'state/offers-slice';

export default connect(
    state => {
        return {
            ui: state.ui.state,
            ...cursorSelector(state.offers)
        };
    },
    { fetch }
);
