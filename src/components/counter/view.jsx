import PropTypes from 'prop-types';

const View = ({ counterValueSelect, isPending }) => {

    return <div style={{ fontSize: "40px" }}>
        {isPending ? <>loading ...</> : counterValueSelect}
    </div>
}

View.propTypes = {
    counterValueSelect: PropTypes.number.isRequired,
    isPending: PropTypes.bool.isRequired
}

export default View