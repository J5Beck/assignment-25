
// var SearchBar = React.createClass({

//   render : function() {
//     return (
//       <input type="text" placeholder="Search" value={this.props.filterText} ref="filterTextInput" onChange={this.handleChange} />
//       );
//   }

// });

$(function(){

  var SearchBar = React.createClass({displayName: "SearchBar",
    // getIntialState: function() {
    //   return {keywords: ""};
    // },
    // onSubmit: function(e) {
    //   e.preventDefault();
    //   this.props.
    // },


    render: function(){
      return (
        React.createElement("div", null, 
          React.createElement("input", {type: "text", className: "searchText"}), 
          React.createElement("input", {type: "submit", className: "submitSearch"})
        )

      );
    }

  });

  var SearchBox = React.createClass({displayName: "SearchBox",
    
    render: function(){
      return(
        React.createElement("div", {className: "box"}, 
          React.createElement("div", null, this.props.children)
        )
      );
    }

  });
});
// var onSubmit = function(e) {

// }
