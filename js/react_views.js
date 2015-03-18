
// var SearchBar = React.createClass({

//   render : function() {
//     return (
//       <input type="text" placeholder="Search" value={this.props.filterText} ref="filterTextInput" onChange={this.handleChange} />
//       );
//   }

// });

$(function(){

  var SearchBar = React.createClass({displayName: "SearchBar",
    
    getInitialState: function() {
      return {keywords:""};
    },
    
    onChange: function(e) {
      this.setState({keywords: e.target.value});
    },

    onSubmit: function(e){
      e.preventDefault();
      this.props.setInputValue(this.state.keywords);
    },


    render: function() {
      
      return(
        React.createElement("form", {onSubmit: this.onSubmit}, 
          React.createElement("input", {type: "text", value: this.state.keywords, onChange: this.onChange}), 
          React.createElement("input", {type: "submit"})
        )
        );
    }

  });

  var SearchBox = React.createClass({displayName: "SearchBox",

    consoleLogKeywords: function(keywords){
      console.log("Search:", keywords);
    },
    
    render: function(){
      
      return React.createElement(SearchBar, {setInputValue: this.consoleLogKeywords})
    }
  
  });

  React.render(React.createElement(SearchBox, {setInputValue: this.consoleLogKeywords}), document.body);

});
// var onSubmit = function(e) {

// }
