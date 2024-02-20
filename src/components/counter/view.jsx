import PropTypes from 'prop-types';

const View = ({ counterValueSelect, api, isPending }) => {

    return <div style={{ fontSize: "40px" }}>
        {isPending ? <>natwi mak ...</> : api?.data?.value}
    </div>
}

View.propTypes = {
    counterValueSelect: PropTypes.number.isRequired,
    api: PropTypes.object.isRequired,
    isPending: PropTypes.bool.isRequired
}

export default View