
// var SearchBar = React.createClass({

//   render : function() {
//     return (
//       <input type="text" placeholder="Search" value={this.props.filterText} ref="filterTextInput" onChange={this.handleChange} />
//       );
//   }

// });

$(function(){

  var SearchBar = React.createClass({
    
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
        <form onSubmit={this.onSubmit}>
          <input type="text" value={this.state.keywords} onChange={this.onChange} />
          <input type="submit" />
        </form>
        );
    }

  });

  var SearchBox = React.createClass({

    consoleLogKeywords: function(keywords){
      console.log("Search:", keywords);
    },
    
    render: function(){
      
      return <SearchBar setInputValue={this.consoleLogKeywords} />
    }
  
  });

  React.render(<SearchBox setInputValue={this.consoleLogKeywords}  />, document.body);

});
// var onSubmit = function(e) {

// }
