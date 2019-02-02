import React from 'react';
import { connect } from 'react-redux';
import * as actions from './redux/actions';

let SearchTodo = (props) => {

    function handleChange(e) {
        props.fireSearch(e.target.value.toLowerCase());
    }
    
    return(
        <div id="search">
            <label htmlFor="searchtext">Search: </label>
            <input type="text" name="searchtext" onChange={handleChange}/>
        </div>
    )

}

function mapDispatchToProps(dispatch) {
    return {
        fireSearch: (term) => dispatch(actions.fireSearch(term))
    }
}

export default connect(null, mapDispatchToProps)(SearchTodo);