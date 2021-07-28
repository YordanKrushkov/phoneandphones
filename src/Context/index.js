import React, { Component, createContext } from 'react';
import { userVerify } from '../Services/users';
export const AuthContext = createContext();

class AuthContextProvider extends Component {
    state = {
        userID: '',
        isAuthenticated: null,
        userEmail: '',
    };


    login = ({ email, id }) => {
        this.setState({
            userID: id,
            isAuthenticated: true,
            userEmail: email,
        })
    };

    logout = () => {
        document.cookie = 'x-auth-token=';
        localStorage.removeItem('user');
        this.setState({
            isAuthenticated: false,
            userEmail: '',
            userID: '',
        })
    };

    componentDidMount() {
        userVerify().then((res) => {
            if (res && res.auth) {
                this.setState({
                    userID: res.user._id,
                    isAuthenticated: true,
                    userEmail: res.user.email,
                })
            } else {
                this.logout();
            }
        })
            .catch((err) => console.log(err));
    };

    render() {
        return (
            <AuthContext.Provider value={ { ...this.state, login: this.login, logout: this.logout } }>
                { this.props.children }
            </AuthContext.Provider>
        );
    }
};

export default AuthContextProvider;