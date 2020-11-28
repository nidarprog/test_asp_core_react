// import React, { Component } from 'react';

// export class Counter extends Component {
//   static displayName = Counter.name;

//   constructor(props) {
//     super(props);
//     this.state = { currentCount: 0 };
//     this.incrementCounter = this.incrementCounter.bind(this);
//   }

//   incrementCounter() {
//     this.setState({
//       currentCount: this.state.currentCount + 1
//     });
//   }

//   render() {
//     return (
//       <div>
//         <h1>Counter</h1>

//         <p>This is a simple example of a React component.</p>

//         <p aria-live="polite">Current count: <strong>{this.state.currentCount}</strong></p>

//         <button className="btn btn-primary" onClick={this.incrementCounter}>Increment</button>
//       </div>
//     );
//   }
// }

import React, { useState } from 'react';

export default function Counter() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Count
      </button>
    </div>
  );
}


