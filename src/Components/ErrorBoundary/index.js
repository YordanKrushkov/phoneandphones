import React, { Component } from 'react';
import styles from './index.module.css';

class ErrorBoundary extends Component {
    constructor(props) {
        super(props)

        this.state = {
            hasError: false
        }
    }

    static getDerivedStateFromError(error) {
        return { hasError: true }
    }
    componentDidCatch(error) {
        console.log('Error from componentDidCatch:', error);
    }

    render() {
        if (this.state.hasError) {
            return <div className={styles.wrong}>
                <h1 >Something went wrong</h1>
                <h2 >I am sorry! We are working to resolve the problem</h2>
            </div>
        }
        return this.props.children
    }
}

export default ErrorBoundary