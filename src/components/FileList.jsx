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
                },
                "21": {
                    "id": 21,
                    "type": "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
                    "name": "Документ Microsoft Office Word.docx (образец)",
                    "selected": false
                },
                "42": {
                    "id": 42,
                    "type": "image/jpeg",
                    "name": "Фото.docx (образец)",
                    "selected": false
                },
                "61": {
                    "id": 61,
                    "type": "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
                    "name": "Документ Microsoft Office Word.docx (образец)",
                    "selected": false
                },
                "72": {
                    "id": 72,
                    "type": "image/jpeg",
                    "name": "Фото.docx (образец)",
                    "selected": false
                },
                "15": {
                    "id": 15,
                    "type": "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
                    "name": "Документ Microsoft Office Word.docx (образец)",
                    "selected": false
                },
                "224": {
                    "id": 224,
                    "type": "image/jpeg",
                    "name": "Фото.docx (образец)",
                    "selected": false
                },
                "9": {
                    "id": 9,
                    "type": "image/jpeg",
                    "name": "Фото.docx (образец)",
                    "selected": false
                },
            },
            filesIds: [11, 22, 21, 42, 61, 72, 15, 224, 9],
            modal: false,
            buttonStateDisable: true,
        }
    }

    // скрипт для получения данных из API

    // componentDidMount() {
    //     axios.get('http://localhost:3004/files').then((res) => {
    //         this.fileLoader(res.data)
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

    clearSelect = () => {
        const { files, filesIds } = this.state;
        const mapfiles = filesIds.map((id) => files[id])
        this.setState({ files: mapfiles.forEach(({selected}) => selected = false) });
    }

    fileLoader = (data) => {
        const filesJsApi = Object.keys(data);
        const files = {};
        filesJsApi.forEach((id) => {
            const newId = Number.parseInt(Math.floor(Math.random() * 1000));
            data[id].selected = false;
            data[id].id = newId;
            files[newId] = data[id];
        });
        this.setState({
            files: { ...files, ...this.state.files },
            filesIds: [...Object.keys(files), ...this.state.filesIds]
        });
    }

    sendFiles = (e) => {
        e.preventDefault();
        const { files, filesIds } = this.state;
        const mapfiles = filesIds.map((id) => files[id]);
        const selectedFiles = mapfiles.filter((file) => file.selected === true);

        // ****
        // Тут должна быть отправка данных вместе с email на php(Бекенд)
        // ****
        console.log({ files: selectedFiles, eamil: this.props.email });
        this.modalHandler();
    }

    clearSelect = () => this.setState({ files: this.state.files.forEach(({selected}) => selected = false) });

    modalHandler = () => this.setState({ modal: !this.state.modal });



    render() {
        const { email } = this.props;
        const { files, filesIds, modal, buttonStateDisable } = this.state;
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
                        <div className="logo"></div>
                    </div>
                </div>
                <div className="light-theme-title">Welcome, Investor!</div>
                <div className="investors-list-container">
                    <div className="files-selector">
                        <div className="btn-clear" onClick={this.clearSelect}>Clear</div>
                        <div className="btn-select-all">Select All</div>
                    </div>
                    <ul className="file-list">
                        {mapfiles.map(({ id, type, name, selected }) => {
                            const fileClasses = cn({
                                "selected-file": selected,
                                'file': true
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
                </div>
                <input
                    type="submit"
                    disabled={this.state.buttonStateDisable}
                    onClick={this.sendFiles}
                    className={buttonClasses}
                    value="Send to me!" />

                {modal && <div>
                    <div className="container-modal">
                        <div className="modal-card">
                            <div className="modal-header"><div className="close-btn" onClick={this.modalHandler}>+</div></div>
                            <div className="modal-icon"></div>
                            <div className="title">Thank You for your interest! <br /> Selected files has been sent to {email} address. </div>
                        </div>
                    </div>
                </div>}

            </div>
        )
    }
}
