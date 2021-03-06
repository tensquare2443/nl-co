import React from 'react';
// import {mapsKey} from './../../clientvars';

class Maps extends React.Component {
  render() {

    var mapsKey;

    if (process.env.MAPS_KEY) {
      alert("yes");
      mapsKey = process.env.MAPS_KEY;
    } else {
      alert("no");
      // mapsKey = require('./../../clientvars').mapsKey;

      try {
        mapsKey = require('./../../clientvars').mapsKey;
      } catch(e) {
        mapsKey = 'invalid';
      }

    }

    // if (require('./../../clientvars')) {
    //   if (require('./../../clientvars').mapsKey) {
    //     alert("yes");
    //     mapsKey = require('./../../clientvars').mapsKey;
    //   }
    // } else {
    //   alert("no");
    //   mapsKey = process.env.MAPS_KEY;
    // }

    // if (require('./../../clientvars').mapsKey) {
    //   alert("yes");
    //   mapsKey = require('./../../clientvars').mapsKey;
    // } else {
    //   alert("no");
    //   mapsKey = process.env.MAPS_KEY;
    // }
    alert(mapsKey);

    var mapsUrl = `https://www.google.com/maps/embed/v1/place?key=${mapsKey}&q=Space+Needle,Seattle+WA`;
    return(
      <div className="custom-modal" tabIndex="-1" role="dialog">
        <div className="custom-modal-dialog custom-modal-lg" role="document">
          <div className="custom-modal-content">
            <div className="custom-modal-header">
              <h5 className="custom-modal-title">{this.props.chosenEvent.name}</h5>
              <button onClick={this.props.closeModal} type="button" className="close">
                <span>&times;</span>
              </button>
            </div>

            <div className="mx-auto" style={{position: "relative", width: "90%", height: "0", paddingBottom: "53%"}}>
              <iframe
                title="map"
                frameBorder="0"
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  left: "0",
                  top: "0"
                }}
                src={mapsUrl}
              ></iframe>
            </div>

            <div className="custom-modal-footer">
              <button onClick={this.props.closeModal} type="button" className="btn btn-secondary">Close</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Maps;
