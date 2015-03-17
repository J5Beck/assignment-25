// var SearchBar = React.createClass({
//     handleChange: function() {
//         this.props.onUserInput(
//         );
//     },
//     render: function() {
//    
//         );
//     }
// });



// (((((((((((((((((((((((((((())))))))))))))))))))))))))))
// $(function() {

//   React.render(<span className="eggs">Spam? Ham?</span>, document.body);

// });


// $(function(){

//   var  HelloWorldComponent = React.createClass({

//     render: function() {
//       return (
//       <div className="hellow-world">
//         <span>Hello World</span>
//         <p>Some Text</p>
//       </div>  
//       );
//   });

// });

$(function(){

  var Volume = React.createClass({

    render : function() {
      return (
        <input type="range" value={this.props.value} onChange={this.props.onChange} />
        );
    }
  });
//   var vol;

//   var onChange = function(e) {
//     var  vlue = e.target.value;
//     console.log("volume", value);
//     vol.setProps({value: value});
//   }
//   vol = React.render(<Volume value="20" onChange={onChange} />, document.body);

// });

// (((((((((((((((((((((((())))))))))))))))))))))))

var VolumeControl = React.createClass({

    render: function() {
      return (
        <div className="volume-control">
          <div>Volume {this.props.volume}</div>
          <Volume value={this.props.volume} onChange={this.props.onChange} />
        </div>
      );
    }

  });

  var onChange = function(e) {
    volcontr.setProps({volume: e.target.value});
  }

  var volcontr = React.render(<VolumeControl volume="0" onChange={onChange} />, document.body);




  var  VoumeBar = React.createClass({
    getInitialState: function() {
      return {volumeValue: 10};
    },

    OnSubmit: function(e) {
      e.preventDefault();
      console.log("form was subbmitted and prevented");
      this.props.onVolumeSet(this.state.volumeValue);
    },

    updateVolumeState: function(e) {
      this.setState({volumeValue: e.target.value});
    },

    render: function() {
      return(

        <form OnSubmit={this.OnSubmit}>
          <input
            type="range"
            onChange={this.updateVolumeState}
            value={this.state.volumeValue} />
          <input type="submit" value="Set Volume" />
        </form>   

        );
    }
  });

  var VolumeBox = React.createClass({

    logVolume: function(volumeValue) {
      console.log("volume:", volumeValue);
    },
    render: function
    return <VolumeBar onVolumeSet={this.logVolume}
  })

  $(function(){
    var logVolume = function(volumeValue) {
    }
    React.render(<VolumeBar onVolumeSet={this.logVolume} />, document.body);
  });

  // (((((((((((((())))))))))))))


