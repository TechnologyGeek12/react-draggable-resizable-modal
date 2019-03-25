# react-draggable-resizable-modal
Draggable and Resizable modal with dynamic options


<img src="https://img.shields.io/badge/Licence-MIT-blue.svg" alt="Licence" data-canonical-src="https://img.shields.io/badge/Licence-MIT-blue.svg" style="max-width:100%;"/>
<img src="https://img.shields.io/badge/Version-0.0.7-brightgreen.svg" alt="npm Version" data-canonical-src="https://img.shields.io/badge/Version-0.0.7-brightgreen.svg" style="max-width:100%;"/>

A Node.js React package that gives draggable and resizable modal with dynamic options to make it custom as per user requirment. Also give a better user experience with better and flexible options.

# DEMO and Docs

* Inspired by [link to demo](https://wwan5803.github.io/react-modal-resizable-draggable/)

![Modal with one action](https://github.com/TechnologyGeek12/react-draggable-resizable-modal/blob/master/src/lib/action1.png)
![Modal with two action](https://github.com/TechnologyGeek12/react-draggable-resizable-modal/blob/master/src/lib/action2.png)

## Installation
The package can be installed via NPM:
```
npm install react-draggable-resizable-modal --save
```
react-draggable-resizable-modal can be imported as follows

```javascript
var ReactDynamicModal = require('react-draggable-resizable-modal');

OR

import ReactDynamicModal from 'react-draggable-resizable-modal';

```


The Modal object has one required prop:

- `isOpen` to render its children.

Optional prop:

- `minWidth` The minimum width of the modal(default 0).
- `minHeight` The minimum height of the modal(default 0).
- `initWidth` The initial width of the modal(default 800).
- `initHeight` The initial width of the modal(default 400).
- `top` The position of the modal.
- `left` The position of the modal.
- `onRequestClose` to close the modal.
- `disableVerticalResize` to disable the vertical resize function(default false).
- `disableHorizontalResize` to disable the horizontal resize function(default false).


## Examples

#Complete Example 
```jsx
import React, {Component} from 'react';
import ReactDynamicModal from 'react-draggable-resizable-modal';

class App extends Component {

    constructor() {
        super();
        this.state = {
            isOpen: false
        };
    }

    openModal=()=> {
        this.setState({isOpen: true});
    }
    closeModal=()=> {
        this.setState({isOpen: false});
    }

    render() {
        return (
			<div className="App">
                <button onClick={this.openModal}> Open modal </button>
                
				<ReactDynamicModal initWidth={500} initHeight={100} onRequestClose={this.closeModal} isOpen={this.state.isOpen}
					data={
                        <div className="body">
						  <p>What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        </div>
                         }
                    headerValue={'Modal Header'}     
					actions={<div><button onClick={this.closeModal}>Close</button></div>}
					footerText={'You can add some notes here'}
					style={{
						header: { color: '#fff', backgroundColor: 'blue' },
						footer: { color: 'blue' },
						actions: { textAlign: 'right' }
					}}
				/>
			</div>
        );
    }
}

export default App;

```

# Data prop

You can pass any valid react element to render in modal body using it.

```javascript
    data={<div>This is div in modal body</div>}
    OR
    data={<div><p>This is paragraph in modal body</p></div>}
    OR
    data={<form><field>This is form field in modal body</field></div>}
```

# Actions prop

You can pass number of actions(buttons) using actions props to modal.

```javascript
    actions={<button onClick={this.closeModal}>Close</button>}
    OR multiple buttons
    actions={<div><button onClick={this.closeModal}>Close</button><button onClick={this.saveModal}>Save</button></div>}
```

# FooterText prop

You can pass footer text using it to show some note or other information in modal.

```javascript
   footerText={'You can add some notes here'}
```

# HeaderValue prop

You can pass header text using it to show header name on top of header.

```javascript
   headerValue={'Modal Header'}
```

# Style prop

You can custom modal style using style props, which gives to change style of modal header, footer text and actions alignment.

```javascript
   style={{
		header: { color: '#fff', backgroundColor: 'blue' },
		footer: { color: 'blue' },
		actions: { textAlign: 'right' }
		}}
```



# Default parameter options value
```javascript
    minHeight: 100,
    top: 100,
    initWidth: 500,
    initHeight: 100,
    isCloseButton: true,
    isOpen: false,
    data:'',
    actions:'',
    footerText:'',
    headerValue:'Modal Header',
    style:{{
		    header: {},
			footer: {},
			actions: {}
		   }}
```

# Available options list
```javascript
    minHeight: Number,
    top: Number,
    initWidth: Number,
    initHeight: Number,
    isCloseButton: Boolean,
    isOpen: Boolean,
    data: Any valid react element to render in modal,
    actions:Any actions can be passed in it to perform in modal,
    headerValue:String,
    style:{{
		    header: {color: '', backgroundColor: ''},
			footer: {color: ''},
			actions: {textAlign: ''}
           }},
    footerText:String       
```
