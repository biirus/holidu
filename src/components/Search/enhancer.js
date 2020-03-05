import { connect } from 'react-redux';

export default connect(state => {
    return {
        ui: state.ui.state
    };
});
