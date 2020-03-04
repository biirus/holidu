import { connect } from 'react-redux';
import { fetch } from 'state/offers-slice';

export default connect(
    (state, props) => {
        return {
            ui: state.ui,
            offer: state.offers.offersMap[props.id]
        };
    },
    { fetch }
);
