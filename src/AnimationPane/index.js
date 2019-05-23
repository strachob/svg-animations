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
      openImportModal: false
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
    this.props.parseSvgToObjects(this.state.importSvg);
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

    render() {
      return <div className="animation-pane pane">
        <div>
          <h1 className="display-4 figure-header">See what happends
          <button className="btn btn-primary export" onClick={() => this.generateExportSvg() }> Export SVG </button>
          <button className="btn btn-primary export" onClick={() => this.openImportModal() }> Import SVG </button></h1>
        </div>
        <Svg figures={this.props.figures} />

        <ReactModal
           isOpen={this.state.openExportModal}
           contentLabel="Export Modal"
        >
          <textarea rows="20" cols="100" name="svg">{this.state.svg}</textarea>
          <button onClick={() => this.closeExportModal()}>Close</button>
        </ReactModal>

        <ReactModal
           isOpen={this.state.openImportModal}
           contentLabel="Import Modal"
        >
          <div>
            SVG to import:<br/>
            <textarea rows="20" cols="100" name="svg" onChange={(e) => this.setImportSvg(e)}></textarea><br/>
            <button onClick={() => this.closeImportModal()}>Import</button>
          </div>
        </ReactModal>

      </div>
    }
  }

  export default AnimationPane;