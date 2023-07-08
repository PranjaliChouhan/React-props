import React from 'react';

class MouseTracker extends React.Component {/*defines a class component called MouseTracker that extends the React.Component class. This means MouseTracker is a React component and can have its own state and lifecycle methods. */
  state = { x: 0, y: 0 };/* initializes the component's state with an object that has x and y properties, both set to 0. The state represents the current mouse position. */

  handleMouseMove = (event) => {/*defines an arrow function called handleMouseMove, which is an event handler for the onMouseMove event. When the mouse moves, this function is called, and it updates the component's state with the current mouse position (event.clientX and event.clientY). */
    this.setState({ x: event.clientX, y: event.clientY });
  };

  render() {
    return (
      <div style={{ height: '100%' }} onMouseMove={this.handleMouseMove}>{/*returns a <div> element with a style that sets its height to 100%. The onMouseMove event is attached to this <div>, and it triggers the handleMouseMove function. */}
        {this.props.render(this.state)}{/*It calls a function passed to the component via the render prop, and it passes the current state (this.state) as an argument. This allows the parent component to define what to render based on the state of MouseTracker. */}
      </div>
    );
  }
}

const RenderProps = () => (
  <div>
    <h1>Move the mouse around!</h1>
    <MouseTracker
      render={(mouse) => (/*Inside the <div>, it renders the MouseTracker component and passes a function to the render prop. This function receives the mouse object (the state of MouseTracker) and returns a <p> element that displays the current mouse position using the x and y properties of the mouse object. */
        <p>
          The current mouse position is ({mouse.x}, {mouse.y})
        </p>
      )}
    />
  </div>
);

export default RenderProps;
