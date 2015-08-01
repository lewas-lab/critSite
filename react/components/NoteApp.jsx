/**
 * @jsx React.DOM
 */

var React = require('react');
var NoteListBox=require('./NoteListBox.jsx');
var NoteCreationBox=require('./NoteCreationBox.jsx');
var NoteActions = require('../../actions/NoteActions.js');
var Login = require('./Login.jsx');

var NoteApp = React.createClass({

    getInitialState:function(){
        return {id:null,user:null};
    },

    onEdit:function(id){
        this.setState({currentlyEdited:id});
    },

    onAdd:function(){
        this.setState({currentlyEdited:null});
    },

    componentDidMount:function(){
        NoteActions.fetchTurbidity();
    },

    handleLogin:function(email,password){
        console.log('email: '+email);
        console.log('password: '+password);
    },

    render: function() {
        return (
            <div className="container">
                <div className="row header">
                    <div className="page-header">
                        <h1>React Notes App</h1>
                    </div>
                </div>
                <div className="row">
                    <NoteListBox onEdit={this.onEdit} onAdd={this.onAdd}/>
                    <NoteCreationBox id={this.state.currentlyEdited} />
                </div> 
            </div>
        );
    }
});

module.exports=NoteApp;