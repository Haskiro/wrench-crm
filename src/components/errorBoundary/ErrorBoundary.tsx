import { Component, ErrorInfo, ReactNode } from 'react';

interface ErrorBoundaryProps {
    children: ReactNode
}

interface ErrorBoundaryState {

}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
    state = {
        error: false
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.log(error, errorInfo);
        this.setState({
            error: true,
        });
    }

    render() {
        if (this.state.error === true) {
            return <h2 className='error'>Error</h2>
        }
        return (
            this.props.children
        );
    }
}

export default ErrorBoundary;