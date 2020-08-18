import React from "react";

import { Menu, Label, Selection, Divider } from "./components/Menu";

import "./App.scss";

function App() {
    return (
        <div class="container">
            <Menu
                buttonText="IMAGE ACTIONS"
                // onMenuOpened={ () => alert() }
            >
                <Label text="Edit Image" />
                <Selection
                    text="Crop"
                    // onClick={() => alert("Crop")}
                    svgIcon={
                        <svg fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M7.34 6.41L0.860001 12.9L7.35 19.38L13.84 12.9L7.34 6.41ZM3.69 12.9L7.35 9.24L11 12.9L7.34 16.56L3.69 12.9ZM19.36 6.64C17.61 4.88 15.3 4 13 4V0.76L8.76 5L13 9.24V6C14.79 6 16.58 6.68 17.95 8.05C20.68 10.78 20.68 15.22 17.95 17.95C16.58 19.32 14.79 20 13 20C12.03 20 11.06 19.79 10.16 19.39L8.67 20.88C10.02 21.62 11.51 22 13 22C15.3 22 17.61 21.12 19.36 19.36C22.88 15.85 22.88 10.15 19.36 6.64Z"
                                fill="black"
                                fill-opacity="0.87"
                            />
                        </svg>
                    }
                />
                <Selection
                    text="Rotate"
                    onClick={() => alert("Rotate")}
                    svgIcon={
                        <svg fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M16 14H18V6C18 4.9 17.1 4 16 4H8V6H16V14ZM6 16V0H4V4H0V6H4V16C4 17.1 4.9 18 6 18H16V22H18V18H22V16H6Z"
                                fill="black"
                                fill-opacity="0.87"
                            />
                        </svg>
                    }
                />
                <Divider />
                <Selection
                    text="Delete"
                    // onClick={() => alert("Delete")}
                    svgIcon={
                        <svg
                            width="14"
                            height="18"
                            viewBox="0 0 14 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M1 16C1 17.1 1.9 18 3 18H11C12.1 18 13 17.1 13 16V4H1V16ZM14 1H10.5L9.5 0H4.5L3.5 1H0V3H14V1Z"
                                fill="black"
                                fill-opacity="0.87"
                            />
                        </svg>
                    }
                />
            </Menu>
        </div>
    );
}

export default App;
