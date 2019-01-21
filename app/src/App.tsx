import React, {Component} from 'react';
import './App.css';
import MyComponent from "./MyComponent";
import {MyForm} from "./MyForm";
import MyMenu from "./MyMenu";
import MyLegacy from "./MyLegacy";

interface MyAppProps {
}

interface MyAppState {
  name: string,
  selectedModule: string
}

class App extends Component<MyAppProps, MyAppState> {

  constructor(props: MyAppProps) {
    super(props);
    this.state = {
      name: "World",
      selectedModule: "default"
    };
  }

  render() {
    const module = this.getSelectedModule();
    return (
      <div className="App">
        <header className="App-header">
          <MyMenu changeModule={this.switchModule.bind(this)}/>
        </header>
        {module}
      </div>
    );
  }

  getSelectedModule() {
    switch (this.state.selectedModule) {
      case "foo":
        return <MyComponent name={"Foo"}/>;
      case "bar":
        return <MyComponent name={"Bar"}/>;
      case "legacy":
        return <MyLegacy name={"mainLayout"}/>;
      case "default":
        return <div>
          <MyComponent name={this.state.name}/>
          <MyForm changeName={this.changeName.bind(this)}/>
        </div>
    }
  };

  changeName(name: string) {
    this.setState({
      name // === name: name
    });
  }

  switchModule(selectedModule: string) {
    this.setState({
      selectedModule
    })
  }

}

export default App;
