import React, { PureComponent } from 'react';

export interface MFProps {
  changeName: (name: string) => void
}

export class MyForm extends PureComponent<MFProps> {
  
  onChangeName(event: React.FormEvent<HTMLInputElement>){
    console.log("name changed: " + event.currentTarget.value)
    this.props.changeName(event.currentTarget.value);
  }
  
  render(){
    return <input type="text" onChange={this.onChangeName.bind(this)}/>
  }
}
