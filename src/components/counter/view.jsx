import PropTypes from 'prop-types';

const View = ({ counterValueSelect, isPending, error }) => {
    if (error) return <p>{error}</p>
    return <div style={{ fontSize: "40px" }}>
        {isPending ? <>loading ...</> : counterValueSelect}
    </div>
}

View.propTypes = {
    counterValueSelect: PropTypes.number.isRequired,
    isPending: PropTypes.bool.isRequired,
    error: PropTypes.string.isRequired
}

export default View