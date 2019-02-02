import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { toggleTodos } from './redux/actions';

let StateToggles = (props) => {
    function handleChange(e) {
        console.log(e.target.value);
        props.handleToggleChange(e.target.value);
    }
    return (
        <div id="toggles">
            All: 
            <input type="radio" name="all" id="all" value="all" 
                    checked={props.selectedToggle === 'all'} onChange={handleChange}/>
            In Progress: 
            <input type="radio" name="all" id="inprogress" value="inprogress"  
                    checked={props.selectedToggle === 'inprogress'} onChange={handleChange}/>
            Completed: 
            <input type="radio" name="all" id="completed" value="completed" 
                    checked={props.selectedToggle === 'completed'} onChange={handleChange}/>
        </div>
    )
}

function mapDispatchToProps(dispatch) {
    return {
        handleToggleChange: (toggle) => dispatch(toggleTodos(toggle))
    }
}

function mapStateToProps(state) {
    return {
        selectedToggle: state.toggle
    }
}

StateToggles.propTypes = {
    selectedToggle: PropTypes.string,
    handleToggleChange: PropTypes.func
}

export default connect(mapStateToProps, mapDispatchToProps)(StateToggles);