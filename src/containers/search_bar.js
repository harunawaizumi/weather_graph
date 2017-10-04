/**
 * Created by haruna on 9/28/17.
 */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchWeather } from '../actions/index'


class SearchBar extends Component {
    constructor(props) {
        super(props)
        this.state = { term: ''}
        this.onInputChange = this.onInputChange.bind(this)
        this.onFormSubmit = this.onFormSubmit.bind(this)
    }

    onInputChange (e) {
        this.setState({
            term: e.target.value
        })
    }

    onFormSubmit(event) {
        event.preventDefault()
        this.props.fetchWeather(this.state.term)
        this.setState({ term: '' })
        // We need to go and fetch weather data
    }
    render () {
        return (
            <form className="input-group" onSubmit={this.onFormSubmit}>
                <input
                    placeholder="Get a five-day forecast in your favorite cities"
                    value={this.state.term}
                    className="form-control"
                    onChange={this.onInputChange}
                />
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">Button</button>
                </span>
            </form>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchWeather }, dispatch)
}

export default connect(
    null,
    mapDispatchToProps
)(SearchBar)

// controlled component: stateを必ず設定する必要がある。インプットが変化すると必ずアップデートされる
// stateはコンポーネントごとに初期化しないといけない

// event.preventDefault(): submitをすることをやめる
// formはひとつひとつの記入欄に対してボタンを作らなくてよいため便利
// Reactでフォームを使う時はe.preventDefault()を使うことを覚えておくこと
