var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import DraggableModal from './DraggableModal';
import './index.css';

var ReactDynamicModal = function (_Component) {
    _inherits(ReactDynamicModal, _Component);

    function ReactDynamicModal() {
        _classCallCheck(this, ReactDynamicModal);

        var _this = _possibleConstructorReturn(this, (ReactDynamicModal.__proto__ || Object.getPrototypeOf(ReactDynamicModal)).call(this));

        _this.onSizeChange = function (height, width) {
            _this.setState({ height: height });
        };

        _this.state = {
            height: null
        };
        return _this;
    }

    _createClass(ReactDynamicModal, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    DraggableModal,
                    { minHeight: this.props.minHeight,
                        top: this.props.top,
                        initWidth: this.props.initWidth,
                        initHeight: this.props.initHeight,
                        onRequestClose: this.props.onRequestClose ? this.props.onRequestClose : '',
                        isOpen: this.props.isOpen,
                        onSizeChange: this.onSizeChange,
                        iscloseButton: this.props.iscloseButton },
                    React.createElement(
                        'h3',
                        {
                            style: {
                                color: this.props.style && this.props.style.header && this.props.style.header.color && this.props.style.header.color ? this.props.style.header.color : '#fff',
                                backgroundColor: this.props.style && this.props.style.header && this.props.style.header.backgroundColor && this.props.style.header.backgroundColor ? this.props.style.header.backgroundColor : '#00bac3',
                                padding: 12,
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                                whiteSpace: 'nowrap'
                            } },
                        this.props.headerValue ? this.props.headerValue : 'Modal Header'
                    ),
                    React.createElement(
                        'div',
                        { className: 'body',
                            style: {
                                padding: '0 12px 0 12px',
                                height: this.state.height ? this.state.height - 100 : 200,
                                overflowY: 'auto'
                            } },
                        this.props.data
                    ),
                    React.createElement(
                        'div',
                        {
                            style: {
                                textAlign: this.props.style && this.props.style.actions && this.props.style.actions.textAlign && this.props.style.actions.textAlign ? this.props.style.actions.textAlign : 'right',
                                paddingRight: 12,
                                paddingLeft: 12,
                                paddingBottom: this.props.footerText ? 5 : 10
                            } },
                        this.props.actions
                    ),
                    React.createElement(
                        'div',
                        {
                            style: {
                                color: this.props.style && this.props.style.footer && this.props.style.footer.color && this.props.style.footer.color ? this.props.style.footer.color : '#ff0000',
                                paddingLeft: 12,
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                                whiteSpace: 'nowrap'
                            } },
                        this.props.footerText
                    )
                )
            );
        }
    }]);

    return ReactDynamicModal;
}(Component);

ReactDynamicModal.defaultProps = {
    minHeight: 100,
    top: 100,
    initWidth: 500,
    initHeight: 100,
    iscloseButton: true,
    isOpen: false
};

export default ReactDynamicModal;