import React, { Component } from "react";

import "./Menu.scss";

const Label = (props) => <div class="label">{props.text}</div>;

const Selection = (props) => {
    return (
        <div class="item" onClick={props.onClick}>
            {props.svgIcon && (
                <div className="icon">
                    {React.cloneElement(props.svgIcon, { class: "icon-svg" })}
                </div>
            )}
            <div className="text">{props.text}</div>
        </div>
    );
};

const Divider = (props) => <div class="divider" />;

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = { showingMenu: false };
    }

    render() {
        return (
            <div class="menu">
                <div
                    class="button"
                    onClick={() =>
                        this.setState({
                            showingMenu: !this.state.showingMenu,
                        })
                    }
                >
                    {this.props.buttonText}
                </div>
                {this.state.showingMenu && (
                    <div class="item-box">
                        {React.Children.map(this.props.children, (child) =>
                            React.cloneElement(child)
                        )}
                    </div>
                )}
            </div>
        );
    }
}

export { Menu, Label, Selection, Divider };
