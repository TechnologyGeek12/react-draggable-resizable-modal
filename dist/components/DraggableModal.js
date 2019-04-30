var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Resizer from './Resize.js';
import { CSSTransition } from 'react-transition-group';

var Modal = function (_Component) {
	_inherits(Modal, _Component);

	function Modal() {
		_classCallCheck(this, Modal);

		return _possibleConstructorReturn(this, (Modal.__proto__ || Object.getPrototypeOf(Modal)).apply(this, arguments));
	}

	_createClass(Modal, [{
		key: 'render',
		value: function render() {
			var _this2 = this;

			var _props = this.props,
			    isDragging = _props.isDragging,
			    width = _props.width,
			    height = _props.height,
			    top = _props.top,
			    left = _props.left,
			    isOpen = _props.isOpen,
			    isMinimised = _props.isMinimised,
			    onRequestRecover = _props.onRequestRecover;

			if (isOpen) {
				return React.createElement(
					Fragment,
					null,
					React.createElement(
						CSSTransition,
						{ 'in': !isMinimised, timeout: 300, classNames: 'minimise', unmountOnExit: true },
						React.createElement(
							'div',
							{
								ref: function ref(node) {
									_this2.node = node;
								},
								draggable: isDragging,
								className: 'flexible-modal',
								style: { width: width, height: height, top: top, left: left }
							},
							this.props.children
						)
					),
					isMinimised && React.createElement(
						'button',
						{ className: 'flexible-modal-rebound-btn', onClick: onRequestRecover },
						React.createElement('i', { 'class': 'fas fa-bars' })
					)
				);
			} else {
				return null;
			}
		}
	}]);

	return Modal;
}(Component);

var DraggableModal = function (_Component2) {
	_inherits(DraggableModal, _Component2);

	function DraggableModal(props) {
		_classCallCheck(this, DraggableModal);

		var _this3 = _possibleConstructorReturn(this, (DraggableModal.__proto__ || Object.getPrototypeOf(DraggableModal)).call(this, props));

		_this3.state = {
			isDragging: false,
			isResizing: false,
			top: _this3.props.top !== undefined ? _this3.props.top : _this3.props.initHeight ? window.innerHeight / 2 - _this3.props.initHeight / 2 - 50 : window.innerHeight / 2 - 400 / 2 - 50,
			left: _this3.props.left !== undefined ? _this3.props.left : _this3.props.initWidth ? window.innerWidth / 2 - _this3.props.initWidth / 2 - 21 : window.innerWidth / 2 - 800 / 2 - 21,
			width: _this3.props.initWidth ? _this3.props.initWidth : 800,
			height: _this3.props.initHeight ? _this3.props.initHeight : 400,
			rel: null
		};
		_this3.updateStateResizing = _this3.updateStateResizing.bind(_this3);
		_this3.funcResizing = _this3.funcResizing.bind(_this3);
		_this3.resize = _this3.resize.bind(_this3);
		return _this3;
	}

	_createClass(DraggableModal, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			document.addEventListener('mousemove', this.onMouseMove.bind(this));
			document.addEventListener('mouseup', this.onMouseUp.bind(this));
		}
	}, {
		key: 'componentDidUpdate',
		value: function componentDidUpdate(props, state) {
			if (!this.state.isDragging && state.isDragging) {
				document.removeEventListener('mousemove', this.onMouseMove.bind(this));
				document.removeEventListener('mouseup', this.onMouseUp.bind(this));
			}
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			if (document.removeEventListener) {
				document.removeEventListener('mousemove', this.onMouseMove.bind(this));
				document.removeEventListener('mouseup', this.onMouseUp.bind(this));
			}
		}
	}, {
		key: 'onMouseDown',
		value: function onMouseDown(e) {
			// only left mouse button
			if (e.button !== 0) return;
			var pos = ReactDOM.findDOMNode(this.node_modal);
			this.setState({
				isDragging: true,
				rel: {
					x: e.pageX - pos.offsetLeft,
					y: e.pageY - pos.offsetTop
				}
			});
			e.stopPropagation();
			e.preventDefault();
		}
	}, {
		key: 'onMouseUp',
		value: function onMouseUp(e) {
			document.removeEventListener('mousemove', this.onMouseMove.bind(this));
			this.setState({ isDragging: false });
			this.setState({ isResizing: false });
			e.stopPropagation();
		}
	}, {
		key: 'onMouseMove',
		value: function onMouseMove(e) {
			var _props2 = this.props,
			    disableMove = _props2.disableMove,
			    disableVerticalMove = _props2.disableVerticalMove,
			    disableHorizontalMove = _props2.disableHorizontalMove;

			if (this.state.isDragging) {
				if (disableMove) {} else if (disableVerticalMove && disableHorizontalMove) {} else if (!disableVerticalMove && disableHorizontalMove) {
					this.setState({
						top: e.pageY - this.state.rel.y
					});
				} else if (disableVerticalMove && !disableHorizontalMove) {
					this.setState({
						left: e.pageX - this.state.rel.x
					});
				} else if (!disableVerticalMove && !disableHorizontalMove) {
					this.setState({
						left: e.pageX - this.state.rel.x,
						top: e.pageY - this.state.rel.y
					});
				}
			} else if (this.state.isResizing) {
				this.funcResizing(e.clientX, e.clientY);
			} else {
				return;
			}
			e.stopPropagation();
			e.preventDefault();
		}
	}, {
		key: 'updateStateResizing',
		value: function updateStateResizing(isResizing) {
			this.setState({ isResizing: isResizing });
		}
	}, {
		key: 'funcResizing',
		value: function funcResizing(clientX, clientY) {
			var _props3 = this.props,
			    mWidth = _props3.minWidth,
			    mHeight = _props3.minHeight,
			    disableVerticalResize = _props3.disableVerticalResize,
			    disableHorizontalResize = _props3.disableHorizontalResize;

			var node = ReactDOM.findDOMNode(this.node_modal);
			var minWidth = mWidth ? mWidth : 200;
			var minHeight = mHeight ? mHeight : 100;
			if (!disableHorizontalResize && clientX > node.offsetLeft + minWidth) {
				this.setState({
					width: clientX - node.offsetLeft + 16 / 2
				});
			}
			if (!disableVerticalResize && clientY > node.offsetTop + minHeight) {
				this.setState({
					height: clientY - node.offsetTop + 16 / 2
				});
			}
			this.props.onSizeChange(this.state.height, this.state.width);
		}
	}, {
		key: 'updateStateDragging',
		value: function updateStateDragging(isDragging) {
			this.setState({ isDragging: isDragging });
		}
	}, {
		key: 'pressKey',
		value: function pressKey(e) {
			var _props4 = this.props,
			    onRequestClose = _props4.onRequestClose,
			    disableResize = _props4.disableResize,
			    disableMove = _props4.disableMove,
			    disableVerticalMove = _props4.disableVerticalMove,
			    disableHorizontalMove = _props4.disableHorizontalMove;

			if (e.ctrlKey) {
				switch (e.keyCode) {
					case 37:
						!disableResize && this.setState(function (prevState) {
							return { width: prevState.width - 20 };
						});
						break;
					case 38:
						!disableResize && this.setState(function (prevState) {
							return { height: prevState.height - 20 };
						});
						break;
					case 39:
						!disableResize && this.setState(function (prevState) {
							return { width: prevState.width + 20 };
						});
						break;
					case 40:
						!disableResize && this.setState(function (prevState) {
							return { height: prevState.height + 20 };
						});
						break;
					default:
						;
				}
			} else {
				switch (e.keyCode) {
					case 27:
						onRequestClose();
						break;
					case 37:
						!disableMove && !disableHorizontalMove && this.setState(function (prevState) {
							return { left: prevState.left - 20 };
						});
						break;
					case 38:
						!disableMove && !disableVerticalMove && this.setState(function (prevState) {
							return { top: prevState.top - 20 };
						});
						break;
					case 39:
						!disableMove && !disableHorizontalMove && this.setState(function (prevState) {
							return { left: prevState.left + 20 };
						});
						break;
					case 40:
						!disableMove && !disableVerticalMove && this.setState(function (prevState) {
							return { top: prevState.top + 20 };
						});
						break;
					default:
						;
				}
			}
		}
	}, {
		key: 'resize',
		value: function resize(width, height) {
			this.setState(function (prevState) {
				return { width: width || prevState.width, height: height || prevState.height };
			});
		}
	}, {
		key: 'render',
		value: function render() {
			var _this4 = this;

			var _props5 = this.props,
			    isOpen = _props5.isOpen,
			    isMinimised = _props5.isMinimised,
			    onRequestClose = _props5.onRequestClose,
			    onRequestMinimise = _props5.onRequestMinimise,
			    onRequestRecover = _props5.onRequestRecover,
			    disableResize = _props5.disableResize,
			    isCloseButton = _props5.isCloseButton;

			return React.createElement(
				'div',
				null,
				isOpen && !isMinimised && React.createElement('div', {
					onClick: onRequestMinimise ? onRequestMinimise : onRequestClose,
					className: 'flexible-modal-mask'
				}),
				React.createElement(
					Modal,
					{
						width: this.state.width,
						height: this.state.height,
						top: this.state.top,
						left: this.state.left,
						isDragging: this.state.isDragging,
						onRequestRecover: onRequestRecover,
						isMinimised: isMinimised,
						isOpen: isOpen,
						updateStateDragging: this.updateStateDragging.bind(this),
						transitionName: 'modal-anim',
						ref: function ref(node) {
							_this4.node_modal = node;
						}
					},
					this.props.children,
					React.createElement('div', {
						onMouseDown: this.onMouseDown.bind(this),
						className: 'flexible-modal-drag-area',
						style: {
							width: this.state.width
						},
						ref: function ref(dragArea) {
							_this4.dragArea = dragArea;
						}
					}),
					React.createElement('div', {
						onMouseDown: this.onMouseDown.bind(this),
						className: 'flexible-modal-drag-area-left',
						ref: function ref(dragArea) {
							_this4.dragArea2 = dragArea;
						}
					}),
					React.createElement('div', {
						onMouseDown: this.onMouseDown.bind(this),
						className: 'flexible-modal-drag-area-bottom',
						style: {
							width: this.state.width
						},
						ref: function ref(dragArea) {
							_this4.dragArea3 = dragArea;
						}
					}),
					React.createElement('div', {
						onMouseDown: this.onMouseDown.bind(this),
						className: 'flexible-modal-drag-area-right',
						ref: function ref(dragArea) {
							_this4.dragArea4 = dragArea;
						}
					}),
					!disableResize && React.createElement(Resizer, { updateStateResizing: this.updateStateResizing }),
					isCloseButton && React.createElement(
						'div',
						{ className: 'close-icon', onClick: onRequestClose },
						React.createElement('i', { 'class': 'fas fa-times' })
					)
				)
			);
		}
	}]);

	return DraggableModal;
}(Component);

export default DraggableModal;