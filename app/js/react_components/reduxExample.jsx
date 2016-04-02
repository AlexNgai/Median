var React = require('react');
var ReactDOM = require('react-dom');
var TodoList = require('./todo-list');
var store = require('./../stores/mainStore');


    console.log('state in render is: ', store.getState());
    return (
        <TodoList
            items = {store.getState()}
            addItem = {function(id, text){
                store.dispatch({
                    type: 'ADD_TODO',
                    id: id,
                    text: text
                });
            }}
            toggleItem = {function(id){
                store.dispatch({
                    type: 'TOGGLE_TODO',
                    id: id
                })
            }}
            />
    );
}

store.subscribe(render);
render();






var TodoItem = React.createClass({
    handleClick: function(id){
        store.dispatch('TOGGLE_TODO', id)
    },
    render: function(){
        return <li
            style = {{textDecoration: this.props.completed ? 'line-through': 'none'}}
            >{this.props.text}
        </li>
    }
});

var acc = 0;

var TodoList = React.createClass({
    getInitialState: function(){
        return {
            inputValue: ''
        }
    },
    //componentWillReceiveProps: function(){
    //    this.setState({items: this.props.items});
    //},
    handleInputChange: function(e){
        this.setState({inputValue: e.target.value})
    },
    handleSubmitClick: function(){
        this.props.addItem(acc, this.state.inputValue);
        this.setState({inputValue: ''});
        acc++;
    },
    handleItemClick: function(id){
        this.props.toggleItem(id);
    },
    render: function(){
        return <div>
            <input
                value={this.state.inputValue}
                onChange={this.handleInputChange}
                />
            <button
                onClick={this.handleSubmitClick}
                >
                Add Item
            </button>
            <ul toggleItem={this.props.toggleItem}>
                {this.props.items.map(function(item){
                    return <li
                        key={item.id}
                        onClick={function(){
                            store.dispatch({
                                type: 'TOGGLE_TODO',
                                id: item.id
                            });
                        }}
                        style={{textDecoration: item.completed ? 'line-through': 'none'}}
                        >
                        {item.text}
                    </li>
                })}
            </ul>
        </div>
    }
    //renderItems: function(){
    //    this.props.items.map(function(item){
    //        return <TodoItem key={item.id} completed={item.completed} id={item.id} text={item.text} />
    //    });
    //}
});
