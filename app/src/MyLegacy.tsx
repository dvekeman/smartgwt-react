///<reference path="../typings/smartclient.d.ts"/>
import React, {PureComponent} from 'react';

interface MLProps {
  name: string
}

/** I render some Legacy SmartGWT component */
class MyLegacy extends PureComponent<MLProps> {

  // undefined || null are not accepted here
  private layout: isc.Layout = isc.Layout.create();
  
  componentDidMount(): void {
    this.layout = (window as any)
      .globalgwt
      .GlobalGWT.lookup(this.props.name);
    this.layout.setHtmlElement(
      document.getElementById("mylegacy-container") as HTMLElement);
    this.layout.position = "relative";
    this.layout.draw();
  }
  
  componentWillUnmount(): void {
    this.layout.clear();
  }

  render() {
    return <div id="mylegacy-container"/>
  }
  
}

export default MyLegacy