var TodoStore = {
  all: function() {
    return [{
      id: 1, // this will be hidden field by default.
      name: "Clean my room",
      description: "My room needs some serious cleaning",
      priority: 3,
      createAt: "2014-10-09",
      completed: false,
      password: "sweet todo",
      list: "Home",
      email: "myemail@gmail.com",
      color: "#fc5803",
      due: new Date()
    }]
  },
  new: function() {
    return {
      name: null,
      description: null,
      priority: null,
      createAt: null,
      completed: null,
      password: null,
      list: null,
      email: null,
      color: null,
      due: new Date()
    }
  },
  find: function(index) {
    return this.all()[index];
  }
}
var App = React.createClass({displayName: "App",
  getInitialState: function() {
    return {
      errors: [],
      alert: undefined
    };
  },

  render: function() {
    var formOptions = {
      onSubmit: this.handleSubmit,
      onCancel: this.handleCancel,
      description: { type: 'textarea' },
      createAt: { type: 'date' },
      list: { type: 'select', values: [{value:"Home", show: "Home"}, {value:"Work", show: "Work"}] },
      color: { type: 'color' },
      due: { type: 'datetime' }
    }
    return(
      React.createElement("div", null, 
        React.createElement("span", null, this.state.alert), 
        React.createElement(FormFor, {object: TodoStore.find(0), options: formOptions, errors: this.state.errors}), 
        React.createElement(FormFor, {object: TodoStore.new(), options: formOptions, errors: this.state.errors})
      )
    )
  },

  handleSubmit: function(data) {
    // this is where you call an action, e.g. TodoActions.createTodo. For this example
    // I will just simulate errors and success here.
    if(data.name === "") return this.setState({errors: ["name can't be blank"]});
    return this.setState({alert: "Success!", errors: []});
  },
  handleCancel: function() {
    console.log('cancelling');
  }
});

React.render(
  React.createElement(App, null),
  document.body
);
