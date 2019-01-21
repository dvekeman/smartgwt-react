///<reference path="../typings/smartclient.d.ts"/>
import React, {PureComponent} from 'react';

interface MCProps {
  name: string
}

class MyComponent extends PureComponent<MCProps> {
  private nameLabel: isc.Label = isc.Label.create({
    align: "center", 
    width: "100%"
  });

  componentDidMount(): void {
    this.nameLabel.setHtmlElement(document.getElementById("mycomponent-hello-label") as HTMLElement);
    this.nameLabel.position = "relative";
    this.nameLabel.draw();
  }

  componentWillUnmount(): void {
    this.nameLabel.clear();
  }

  render() {
    this.nameLabel.setContents("Hello " + this.props.name);
    return <div id="mycomponent-hello-label"/>
  }
  
}

export default MyComponent