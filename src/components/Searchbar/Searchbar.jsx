import React, {Component} from 'react';
import PropTypes from 'prop-types';
import s from './Searchbar.module.css';


class Searchbar extends Component {
    state = {
        inputValue: '',
    }

    handleSubmit = e => {
        e.preventDefault();

        if (this.state.inputValue.trim() === '') {
            alert("Введите ключевое слово!");
            return;
        }

        this.props.onSubmit(this.state.inputValue);
        this.setState({ inputValue: '' });
    }

    handleInputValueChange = e => {
        this.setState({ inputValue: e.currentTarget.value.toLowerCase() });
    }

    render() {
        const { inputValue } = this.state;
        return (
            <header className={s.searchbar}>
                <form onSubmit={this.handleSubmit} className={s.searchForm}>
                    <button type="submit" className={s.searchForm__button}>
                        <span className={s.searchForm__button_label}>Search</span>
                    </button>

                    <input
                        className={s.searchForm__input}
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                        value={inputValue}
                        name="inputValue"
                        onChange={this.handleInputValueChange}
                    />
                </form>
            </header>
        )
    }
}

export default Searchbar;


