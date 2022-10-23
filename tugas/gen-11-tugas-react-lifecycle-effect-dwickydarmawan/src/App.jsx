import React, { useState, Component } from "react";
import Lifecycle from "./Class/Lifecycle";
import SideEffect from "./Class/Sideeffect";

class App extends Component {
  constructor(props) {
    super(props)


    this.state = {
      showLifecycle: true,
      showSideEffect: true,
    }
  }

  render() {
    return (
      <>

        <button className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
          onClick={() => this.setState({ showLifecycle: false })}>
          Remove Lifecycle
        </button>
        {this.state.showLifecycle
          ?
          <>

            <Lifecycle />
          </>
          : null}
        <br />
        <button className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
          onClick={() => this.setState({ showSideEffect: false })}>
          Remove Side Effect
        </button>

        {this.state.showSideEffect
          ?
          <>

            <SideEffect />
          </>
          : null}



      </>
    )
  };
}

export default App;
