import React from 'react';

import './SearchForm.css';

class SearchForm extends React.Component {
    state = {
        input: ''
    }

    handleChange = (event) => {
        this.setState({input: event.target.value});
    }

    render () {
        return (
            <div className={`searchForm ${this.props.desktop ? 'desktop' : ''}`}>
                <form onSubmit={(_) => this.props.onSubmit(_, this.state.input)}>
                    <input type="text" placeholder="Search" value={this.state.input} onChange={this.handleChange}/>
                    <input type="submit" value="&#10140;"/>
                </form>
            </div>
        )
    }
} 

export default SearchForm;