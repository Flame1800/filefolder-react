import React, { Component } from 'react'
import cn from 'classnames';

export default class Modal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
        };
    }
    sendFiles = (e) => {
        e.preventDefault();
        const { files, closeHandler } = this.props;
        console.log(files);
        closeHandler();
    }
    render() {
        const { closeHandler } = this.props;
        const btnClasses = cn({
            'button': true,
            "disabled-btn": this.state.value === '',
        })
        return (
            <div>
                <div className="container-modal">
                    <form className="modal-card" onSubmit={this.sendFiles}>
                        <div className="modal-header"><div className="close-btn" onClick={closeHandler}>+</div></div>
                        <div className="modal-icon"></div>
                        <div className="title">Enter your e-mail</div>
                        <input type="email" placeholder="E-mail" className="email-input"
                            value={this.state.value} onChange={(e) => this.setState({ value: e.target.value })} />
                        <input type="submit" disabled={this.state.value === ''} className={btnClasses} value="Send to me" />
                    </form>
                </div>
            </div>
        )
    }
}
