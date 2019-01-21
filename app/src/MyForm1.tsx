import React, {Component} from 'react';

export interface MF1Props {
}

export interface MF1State {
  name: string
}

export class MyForm1 extends Component<MF1Props, MF1State> {

  constructor(props: MF1Props){
    super(props);
    this.state = {
      name: ""
    }
  }
  
  onChangeName(event: React.FormEvent<HTMLInputElement>) {
    this.setState({
      name: event.currentTarget.value
    })
  }

  render() {
    return <div>
      <input type="text" onChange={this.onChangeName.bind(this)}/>
      <br/>
      <span>{this.state.name}</span>
    </div>
  }
}
