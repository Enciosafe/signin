import React, {Component} from 'react';
import {Input, FormControl, InputAdornment, IconButton} from '@material-ui/core';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { createTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import s from './SignIn.module.css'







const theme = createTheme({
    palette: {
        primary: {
            main: '#065BEA',
        },
    },
    overrides: {
        MuiInput: {
            input: {
                "&::placeholder": {
                    fontFamily: ['Montserrat', 'sans-serif'],
                    textAlign: 'right',
                    marginRight: '20px',
                },
                color: "black",
                fontFamily: ['Montserrat', 'sans-serif'],
            },

        },
    },
});

class Form extends Component {
    state = {
        email: '',
        password: '',
        valid: false,
        showPassword: false,
    }

    handleClickShowPassword = () => {
        this.setState({ ...this.state, showPassword: !this.state.showPassword });
    };

    handleMouseDownPassword = (e) => {
        e.preventDefault();
    };

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
                <ThemeProvider theme={theme}>
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
                                    <Input className={s.inputData}
                                           id='inputPassword'
                                           disableUnderline={true}
                                           onChange={this.handleChange}
                                           required={true}
                                           type={this.state.showPassword ? 'text' : 'password'}
                                           name="password"
                                           placeholder='Forgot your password?'
                                           value={this.state.password}
                                           color="primary"
                                           endAdornment={
                                               <InputAdornment position="end">
                                                   <IconButton
                                                       aria-label="toggle password visibility"
                                                       onClick={this.handleClickShowPassword}
                                                       onMouseDown={this.handleMouseDownPassword}
                                                   >
                                                       {this.state.showPassword ? <Visibility /> : <VisibilityOff />}
                                                   </IconButton>
                                               </InputAdornment>}
                                    />
                                </div>
                            </FormControl>
                            <button type='submit'
                                    className={s.signInBtn}
                                    disabled={!this.state.valid}
                            >Sign in</button>
                        </form>
                </ThemeProvider>

            </div>
        );
    }
}

export default Form;

