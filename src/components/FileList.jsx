import React, { Component } from 'react'
import cn from 'classnames';
// import axios from 'axios';

export default class FileList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            files: {
                "11": {
                    "id": 11,
                    "type": "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
                    "name": "Документ Microsoft Office Word.docx (образец)",
                    "selected": false
                },
                "22": {
                    "id": 22,
                    "type": "image/jpeg",
                    "name": "Фото.docx (образец)",
                    "selected": false
                }
            },
            filesIds: [11, 22],
            modal: false,
            buttonStateDisable: true,
        }
    }

    // скрипт для получения данных из API

    // componentDidMount() {
    //     axios.get('http://localhost:3004/files').then((res) => {
    //         this.fileLoader(res.data);
    //     })
    // }

    selectFileHandler = (id) => (e) => {
        const { files, filesIds } = this.state;
        files[id].selected = !files[id].selected;
        this.setState({ files: { [id]: files[id], ...files } });

        const mapfiles = filesIds.map((id) => files[id]);
        const selectedFiles = mapfiles.filter((file) => file.selected === true);

        if (selectedFiles.length > 0) {
            this.setState({ buttonStateDisable: false });
        }
        else {
            this.setState({ buttonStateDisable: true });
        }
    }


    // fileLoader = (data) => {
    //     const filesJsApi = Object.keys(data);
    //     const files = {};
    //     filesJsApi.forEach((id) => {
    //         data[id].selected = false;
    //         data[id].id = newId;
    //         files[newId] = data[id];
    //     });
    //     this.setState({
    //         files: { ...files, ...this.state.files },
    //         filesIds: [...Object.keys(files), ...this.state.filesIds]
    //     });
    // }


    sendFiles = (e) => {
        e.preventDefault();
        const { files, closeHandler, password } = this.props;
        console.log(files, password);
        closeHandler();
    }

    modalHandler = () => this.setState({ modal: !this.state.modal });

    render() {
        const { files, filesIds, modal, buttonStateDisable } = this.state;
        const { password } = this.props;
        const mapfiles = filesIds.map((id) => files[id]);
        const mappingTupeFiles = {
            img: {
                "image/png": true,
                "image/jpeg": true,
                "image/svg+xml": true,
            },
            doc: {
                'application/vnd.openxmlformats-officedocument.wordprocessingml.document': true,
            },
            xlc: {
                "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": true
            },
            ppt: {
                "application/vnd.openxmlformats-officedocument.presentationml.presentation": true,
            },
            pdf: {
                "application/pdf": true,
            },
            zip: {
                'application/x-zip-compressed': true,
            },
            video: {
                "video/mp4": true
            }
        }

        const buttonClasses = cn({
            "disabled-btn": buttonStateDisable,
            "button": true
        });
        if (filesIds.length === 0) {
            return (
                <div className="content-investors">
                    <div className="logo-container">
                        <div className="logo-background">
                            <div className="logo"></div>
                        </div>
                    </div>
                    <div className="light-theme-title">Welcome, Investor!</div>
                    <div className="investors-list-container">
                        <div className="title-files-list">No files</div>
                    </div>
                </div>
            )
        }

        return (
            <div className="content-investors">
                <div className="logo-container">
                    <div className="logo-background">
                        <div className="logo-filefolder"></div>
                    </div>
                </div>

               
                <div className="investors-list-container">
                    <div className="title">Welcome, Investor!</div>
                    <div className="subtitile-filelist">
                        Here you can choose which files you would <br/> like to receive to Your e-mail
                    </div>
                    <hr /> 
                    <ul className="file-list">
                        {mapfiles.map(({ id, type, name, selected }) => {
                            const fileClasses = cn({
                                "selected-file": selected,
                                'noselected-file': !selected
                            })
                            const expClasses = cn({
                                "type-icon": true,
                                "img": mappingTupeFiles.img[type],
                                "docx": mappingTupeFiles.doc[type],
                                "ppt": mappingTupeFiles.ppt[type],
                                "xlc": mappingTupeFiles.xlc[type],
                                "zip": mappingTupeFiles.zip[type],
                                "pdf": mappingTupeFiles.pdf[type],
                                'video': mappingTupeFiles.video[type]
                            })
                            return (
                                <li key={id} className={fileClasses} onClick={this.selectFileHandler(id)}>
                                    <div className={expClasses}></div>
                                    <div className="text-file">{name}</div>
                                </li>
                            )
                        })}
                    </ul>
                    <hr />
                    <div className="footer-btn">
                        {/* <div className="btn-more">Show more...</div> */}
                        <div className="btn-clear">Clear</div>
                    </div>
                </div>

                <input
                    type="submit"
                    disabled={this.state.buttonStateDisable}
                    onClick={this.modalHandler}
                    className={buttonClasses}
                    value="Send to me!" />
                {modal &&
                    <div className="container-modal">
                        <div className="modal-card" onSubmit={this.sendFiles}>
                            <div className="modal-header"><div className="close-btn" onClick={this.modalHandler}>+</div></div>
                            <div className="modal-icon"></div>
                            <div className="title">Thank You for your interest!</div>
                            <div className="subtitle">Thank You for your interest! Selected files has been sent to {password} address</div>
                            <div className="button modal-button"  onClick={this.modalHandler}>Ok!</div>
                        </div>
                        
                    </div>}
            </div>
        )
    }
}
