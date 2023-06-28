# Lightest Modal

Lightest Modal is a simple and lightweight modal package for React.

## Installation

To install Lightest Modal, you can use npm:

```bash
npm install lightest-modal
```

## Requirment
You'll need a useState to handle the open & close
```
const [showModal, setShowModal] = useState(false)
```

## Usage

```
import Modal from 'lightest-modal'

<Modal {props} />
```

| Prop's name  | Type | Default value | Description | Required |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| showModal | Boolean | false | Controls whether the modal is visible (true) or hidden (false) | Yes |
| closeModal  | Function  | - | Close the modal, pass your useState setter like so: () => {setShowModal(false)} | Yes |
| backgroundColor  | String | 'white' | The background color of the modal | No |
| scroll  | Boolean | false | Determines if the body scroll is blocked when the modal is open | No |
| rounded  | Number | 4 | The border radius of the modal | No |
| padding  | Number | 10 | The padding size of the modal | No |
| smooth  | Boolean | true | Determines if the body scroll is blocked when the modal is open | No |
| width  | Number | 600 | The width of the modal. The maximum width is 100vw anyway | No |

## Example usage with props

```
import React, { useState } from 'react';
import Modal from 'lightest-modal';

const MyComponent = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <button onClick={() => setShowModal(true)}>Open Modal</button>
      <Modal
        showModal={showModal}
        closeModal={() => {setShowModal(false)}}
      />
    </div>
  );
};

```

## Example usage with children
with children way, you can customise the modal as you wish

```
import React, { useState } from 'react';
import Modal from 'lightest-modal';

const MyComponent = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <button onClick={() => setShowModal(true)}>Open Modal</button>
      <Modal
        showModal={showModal}
        closeModal={() => {setShowModal(false)}}
      >
        <div>Hello there!</div>
      </Modal>
    </div>
  );
};

```
