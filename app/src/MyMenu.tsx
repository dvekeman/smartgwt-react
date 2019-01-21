///<reference path="../typings/smartclient.d.ts"/>
import React, {PureComponent} from 'react';
import './MyMenu.css';

export interface MMProps {
  changeModule: (name: string) => void
}

class MyMenu extends PureComponent<MMProps> {

  private menu: isc.Layout = createMenu(this.props.changeModule);

  componentDidMount(): void {
    this.menu.setHtmlElement(document.getElementById("mymenu-menu") as HTMLElement);
    this.menu.position = "relative";
    this.menu.draw();
  }

  render() {
    return <div id="mymenu-menu"/>
  }

}

function createMenuButton(id: string, title: string, 
                          onSwitch: (name: string) => void): isc.Button {
  return isc.Button.create({
    width: "50px",
    height: "50px",
    title: title,
    click: () => {
      onSwitch(id);
      return true;
    }
  })
}

function createMenu(onSwitch: (name: string) => void): isc.Layout {
  return isc.HLayout.create({
    width: "100%",
    height: "50px",
    align: "center",
    membersMargin: 20,
    layoutMargin: 20,
    members: [
      isc.Label.create({
        height: "50px",
        styleName: "Menu-Home",
        contents: "MENU"
      }),
      createMenuButton("default", "HOME", onSwitch),
      createMenuButton("foo", "Foo", onSwitch),
      createMenuButton("bar", "Bar", onSwitch), 
      createMenuButton("legacy", "Legacy", onSwitch)
    ]
  });
}


export default MyMenu