import React from 'react';
import ReactDOMServer from 'react-dom/server';
import ReactModal from 'react-modal';
import './AnimationPane.css';
import Svg from './Svg';

class AnimationPane extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      figures: props.figures,
      openExportModal: false,
      openImportModal: false,
      importSvg: null
    };
  }

  openExportModal = () => {
    this.setState({openExportModal: true});
  }

  closeExportModal = () => {
    this.setState({openExportModal: false});
  }

  openImportModal = () => {
    this.setState({openImportModal: true});
  }

  closeImportModal = () => {
    this.setState({openImportModal: false});
  }

  closeImportModalWithImport = () => {
    this.setState({openImportModal: false});
    if (this.state.importSvg !== null) {
      this.props.parseSvgToObjects(this.state.importSvg);
    }
    else{
      window.alert('Nothing to import');
    }
    this.setState({importSvg: null});
  }

  componentDidUpdate() {
    this.render();
  }

  generateExportSvg = () =>{
    var svg = <Svg figures={this.props.figures} />;
    this.setState({svg: ReactDOMServer.renderToStaticMarkup(svg)});
    this.openExportModal();
  }

  setImportSvg = (e) => {
    this.setState({importSvg: e.target.value});
  }

  modalStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
  }
  render() {
    return <div className="animation-pane pane">
      <div>
        <h1 className="display-4 figure-header">See what happens
        <button className="btn btn-primary export" onClick={() => this.generateExportSvg() }> Export SVG </button>
        <button className="btn btn-primary export" onClick={() => this.openImportModal() }> Import SVG </button></h1>
      </div>
      <Svg figures={this.props.figures} />

      <ReactModal
          isOpen={this.state.openExportModal}
          contentLabel="Export Modal"
          style={this.modalStyles}
      >
        <div>
          <h3>Copy your SVG markup:</h3>
        <textarea className="form-control" rows="20" cols="100" name="svg" readOnly="true">{this.state.svg}</textarea><br/>
        <button className="btn btn-info float-right" onClick={() => this.closeExportModal()}>Close</button>
        </div>
      </ReactModal>

      <ReactModal
          isOpen={this.state.openImportModal}
          contentLabel="Import Modal"
          style={this.modalStyles}
      >
        <div>
          <h3>Paste SVG markup to import your project:</h3>
          <textarea className="form-control" rows="20" cols="100" name="svg" onChange={(e) => this.setImportSvg(e)}></textarea><br/>
          <button className="btn btn-primary" onClick={() => this.closeImportModalWithImport()}>Import</button>
          <button className="btn btn-info float-right" onClick={() => this.closeImportModal()}>Close</button>
        </div>
      </ReactModal>
    </div>
  }
}

  export default AnimationPane;