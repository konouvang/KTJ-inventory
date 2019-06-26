import React, { Component } from 'react';
import { connect } from 'react-redux';
import DropzoneS3Uploader from 'react-dropzone-s3-uploader';

const dropstyles = {
    width: "200px",
    height: "50px",
    border: "1px dotted black",
    "background-color": "white"
}

class ImageUpload extends Component {

  handleFinishedUpload = info => {
    console.log(info);
    // console.log('File uploaded with filename', info.filename)
    console.log('Access it on s3 at', info.fileUrl)

    this.props.dispatch({type: 'SET_CURRENT_IMAGE', payload:info.fileUrl});
  }

    render() {
        const uploadOptions = {
            server: 'http://localhost:5000',
            // signingUrlQueryParams: {uploadType: 'avatar'},
        }
          const s3Url = 'https://ktjinventory.s3.amazonaws.com';

          const innerDropElement = (
            <div className="inner-drop">
              <p>Click or drop file here</p>
            </div>
          )

          return (
            <DropzoneS3Uploader
                children={innerDropElement}
                onFinish={this.handleFinishedUpload}
                s3Url={s3Url}
                style={dropstyles}
                maxSize={1024 * 1024 * 5}
                upload={uploadOptions}
            />
          )
        }

}

export default connect()(ImageUpload);