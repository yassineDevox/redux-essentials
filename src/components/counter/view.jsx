import PropTypes from 'prop-types';

const View = ({ counterValueSelect }) => {
    return <div style={{ fontSize: "40px" }}>{counterValueSelect}</div>
}

View.PropTypes = {
    counterValueSelect: PropTypes.number.isRequired
}

export default View