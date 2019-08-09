import React from 'react';

const {
    REACT_APP_REACT_HOST: react,
    REACT_APP_ANGULAR_HOST: angular,
} = process.env;

export class FrontManager extends React.Component {
    constructor(props) {
        super();
        this.appId = `${props.appName}-container`
    }

    componentDidMount() {
        const { appName, host, document } = this.props;
        const scriptId = `micro-frontend-script-${appName}`;
        if (!document.getElementById(scriptId)) {
            const script = document.createElement('script');
            script.id = scriptId;
            script.src = `${host}/main.js`;
            document.head.appendChild(script);
        }
    }

    renderNode(node, tag) {
        if (node) {
            node.innerHTML = '';
            node.appendChild(document.createElement(tag))
        }

    }

    render() {
        return (
            <div id={this.appId}
                 ref={(node) => this.renderNode(node, this.props.appEl)} />
        );
    }
}

FrontManager.defaultProps = {
    document,
    window,
};

const ReactContent = ({ history }) => (
    <FrontManager history={history} host={react} appEl="react-el" appName="React" />
);

const AngularContent = ({ history }) => (
    <FrontManager history={history} host={angular} appEl="angular-el" appName="Angular" />
);

export {
    ReactContent,
    AngularContent
}
