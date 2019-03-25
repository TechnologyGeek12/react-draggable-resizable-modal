import React, { Component } from 'react';
import DraggableModal from './DraggableModal';
import './index.css';

class ReactDynamicModal extends Component {
    constructor() {
        super();
        this.state = {
            height: null
        };
    }
    onSizeChange = (height, width) => {
        this.setState({ height });
    }

    render() {
        return (
            <div>
                <DraggableModal minHeight={this.props.minHeight}
                    top={this.props.top}
                    initWidth={this.props.initWidth}
                    initHeight={this.props.initHeight}
                    onRequestClose={this.props.onRequestClose ? this.props.onRequestClose : ''}
                    isOpen={this.props.isOpen}
                    onSizeChange={this.onSizeChange}
                    isCloseButton={this.props.isCloseButton}>
                    <h3
                        style={{
                            color: this.props.style && this.props.style.header && this.props.style.header.color && this.props.style.header.color ? this.props.style.header.color : '#fff',
                            backgroundColor: this.props.style && this.props.style.header && this.props.style.header.backgroundColor && this.props.style.header.backgroundColor ? this.props.style.header.backgroundColor : '#00bac3',
                            padding: 12,
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            whiteSpace: 'nowrap'
                        }}>
                        {this.props.headerValue ? this.props.headerValue : 'Modal Header'}
                    </h3>
                    <div className="body"
                        style={{
                            padding: '0 12px 0 12px',
                            height: this.state.height ? this.state.height - 100 : 200,
                            overflowY: 'auto'
                        }}>
                        {this.props.data}
                    </div>
                    <div
                        style={{
                            textAlign: this.props.style && this.props.style.actions && this.props.style.actions.textAlign && this.props.style.actions.textAlign ? this.props.style.actions.textAlign : 'right',
                            paddingRight: 12,
                            paddingLeft: 12,
                            paddingBottom: this.props.footerText ? 5 : 10
                        }}>
                        {this.props.actions}
                    </div>
                    <div
                        style={{
                            color: this.props.style && this.props.style.footer && this.props.style.footer.color && this.props.style.footer.color ? this.props.style.footer.color : '#ff0000',
                            paddingLeft: 12,
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            whiteSpace: 'nowrap'
                        }}>
                        {this.props.footerText}
                    </div>
                </DraggableModal>
            </div>
        );
    }
}

ReactDynamicModal.defaultProps = {
    minHeight: 100,
    top: 100,
    initWidth: 500,
    initHeight: 100,
    isCloseButton: true,
    isOpen: false,
    headerValue:'Modal Header'
};

export default ReactDynamicModal;
