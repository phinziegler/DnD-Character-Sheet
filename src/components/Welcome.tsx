import React from 'react';
import useWindowDimensions from '../methods';
// import { useState } from 'react';

const START = "START";
const CODE = "CODE";
const NEW = "NEW";

interface ImageDescriptionProps {
    text: string;
    src?: string;
    alt?: string;
    flip?: boolean;
}
const ImageDescription = (props: ImageDescriptionProps) => {
    const { height, width } = useWindowDimensions();

    let flip = false;
    let style = "col-sm width-200 mw-30 rounded-circle";

    if (props.flip != null) {
        flip = props.flip;
    }

    flip ? style+= " mr-1" : style+= " ml-1";

    return (
        <div className="my-2 d-flex justify-content-between align-items-center">
            {(!flip) && (props.text != null) && <p>{props.text}</p>}
            {((props.src != null) && (width > 500)) && <img className={style} src={props.src} alt={props.alt}/>}
            {(flip) && (props.text != null) && <p>{props.text}</p>}

        </div>
    );
}

interface Props {
    view: string;
}

interface State {
    view: string;
}

export default class Welcome extends React.Component<Props, State> {
    constructor(props: any) {
        super(props);
        this.state = {
            view: START,
        }
    }

    button(text: string, color: string, onclick: any) {
        let styles = "m-1 width-200 btn btn-" + color;
        return (
            <button className={styles} onClick={onclick}>{text}</button>
        );
    }

    startView() {
        return (
            <div>
                <h1 className="text-center">Character Sheet Maker</h1>
                <ImageDescription 
                    text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas deleniti cupiditate fugit velit, aliquid dolores tempore voluptatum facilis repellat cum sint a ab perspiciatis dolore, in magnam! Quibusdam eaque expedita nam sapiente aspernatur. Eveniet quos voluptas dignissimos illo deserunt in non, nobis amet!"
                    src="https://cdna.artstation.com/p/assets/images/images/016/516/648/large/phineas-ziegler-final-backup.jpg?1552450822"/>
                <h4 className='text-center'>Generation Method</h4>
                <div className="d-flex justify-content-center">
                    {this.button("New", "success", () => {this.setState({view:NEW})})}
                    {this.button("From Code", "primary", () => {this.setState({view:CODE})})}
                </div>
            </div>
        );
    }


    codeView() {
        return (
            <div>
                <h1 className='text-center'>Generate from Code</h1>
                <ImageDescription
                text='Paste a character code into the text box.'
                src="https://cdnb.artstation.com/p/assets/images/images/030/064/103/large/phineas-ziegler-closeup3.jpg?1601703657"/>
                <div className='d-flex justify-content-center'>
                    <input className="mr-1 form-control" type="text" />
                    <button className="ml-1 width-200 btn btn-primary" type="submit">Generate</button>
                </div>
                <div className="back-button" onClick={() => {this.setState({view:START})}}>✖</div>
            </div>
        );
    }

    newView() {
        return (
            <div>
                <h1 className='text-center'>New Character</h1>
                <ImageDescription 
                    text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias eveniet explicabo eaque aliquid voluptas optio quae fuga, dolorum nisi doloremque?"
                    src="https://cdnb.artstation.com/p/assets/images/images/030/805/693/large/phineas-ziegler-nah-final.jpg?1601703470"
                    flip={true}
                />
                {/* <div className='d-flex justify-content-center'>
                    <input className="mr-1 form-control" type="text" />
                    <button className="ml-1 width-400 btn btn-primary">Create New Character</button>
                </div> */}
                <div className="back-button" onClick={() => {this.setState({view:START})}}>✖</div>
            </div>
        );
    }

    render() {
        return (
            <div className="card width-700 mw-100 center-xy">
                {this.state.view == START && this.startView()}
                {this.state.view == CODE && this.codeView()}
                {this.state.view == NEW && this.newView()}
            </div>
        )
    }
}