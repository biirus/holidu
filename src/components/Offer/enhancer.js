import { connect } from 'react-redux';
import { offerSelector } from 'state/offers-slice';

export default connect((state, props) => {
    return {
        ui: state.ui,
        offer: offerSelector(state.offers, props.id)
    };
});
