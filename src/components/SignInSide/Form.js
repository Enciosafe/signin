import React, {Component} from 'react';
import {Input, FormControl} from '@material-ui/core';
import s from './SignIn.module.css'


class Form extends Component {
    state = {
        email: '',
        password: '',
        valid: false,
    }

    handleChange = (e) => {
        const { name, value} = e.currentTarget
        this.setState({[name]: value})
        if (!this.state.email.includes('@')) {
        }
        if (this.state.email !== '' && this.state.password !=='') {
            this.setState({valid:true})
        }
    }

    render() {
        return (
            <div>
                <form>
                    <FormControl htmlFor='inputEmail' >
                                <label htmlFor="email"
                                            className={s.labelTitle}
                                >Email
                                </label>
                                <div className={s.inputItemContainer}>
                                    <Input className={s.inputData}
                                           id='inputEmail'
                                           disableUnderline={true}
                                           onChange={this.handleChange}
                                           required={true}
                                           type="email"
                                           name="email"
                                           value={this.state.email}
                                    />
                                </div>
                            </FormControl>
                            <FormControl htmlFor='inputPassword'>
                                <label htmlFor="password" className={s.labelTitle}>Password</label>
                                <div className={s.inputItemContainer}>
                                    <input className={s.inputData}
                                           id='inputPassword'
                                           onChange={this.handleChange}
                                           required={true}
                                           name="password"
                                           placeholder='Forgot your password?'
                                           value={this.state.password}
                                    />
                                </div>
                            </FormControl>
                            <button type='submit'
                                    className={s.signInBtn}
                                    disabled={!this.state.valid}
                            >Sign in</button>
                        </form>
            </div>
        );
    }
}

export default Form;

