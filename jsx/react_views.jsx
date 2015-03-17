
// var SearchBar = React.createClass({

//   render : function() {
//     return (
//       <input type="text" placeholder="Search" value={this.props.filterText} ref="filterTextInput" onChange={this.handleChange} />
//       );
//   }

// });

$(function(){

  var SearchBar = React.createClass({
    // getIntialState: function() {
    //   return {keywords: ""};
    // },
    // onSubmit: function(e) {
    //   e.preventDefault();
    //   this.props.
    // },


    render: function(){
      return (
        <div>
          <input type="text" className="searchText"/>
          <input type="submit" className="submitSearch"/>
        </div>

      );
    }

  });

  var SearchBox = React.createClass({
    
    render: function(){
      return(
        <div className="box">
          <div>{this.props.children}</div>
        </div>
      );
    }

  });
});
// var onSubmit = function(e) {

// }
