var InputRange = React.createClass({
  displayName: "InputRange",
  onChangeListener: function (event) {
    var el = this.refs.inputRangeRef.getDOMNode();
    jQuery("body").trigger("inputRange.changed", {
      value: el.value
    });

  },

  render: function () {
    return (
      React.createElement("div", {
          className: "input-range"
        },
        React.createElement("input", {
          type: "range",
          ref: "inputRangeRef",
          onChange: this.onChangeListener,
          className: "input-range__slider",
          min: "0",
          max: "100",
          step: "1",
          defaultValue: "0"
        })));


  }
});


var ProgressBar = React.createClass({
  displayName: "ProgressBar",
  getInitialState: function () {
    return {
      value: "0%"
    };

  },

  onInputRangeChanged: function (event, data) {
    this.setState({
      value: data.value + "%"
    });

  },

  componentDidMount: function () {
    jQuery("body").on("inputRange.changed", this.onInputRangeChanged);
  },

  render: function () {
    var style = {
      width: this.state.value
    };


    return (
      React.createElement("div", {
          className: "progress"
        },
        React.createElement("div", {
          className: "progress__bar",
          style: style
        }),
        React.createElement("span", {
          className: "progress__value"
        }, this.state.value)));


  }
});


var Title = React.createClass({
  displayName: "Title",
  render: function () {
    return (
      React.createElement("h1", null, this.props.value));

  }
});


React.render(
  React.createElement("div", null,
    React.createElement(Title, {
      value: ""
    }),
    React.createElement(ProgressBar, null),
    React.createElement(InputRange, null)),

  document.getElementById("loanRange"));



  // loan range two

  var InputRange = React.createClass({
  displayName: "InputRange",
  onChangeListener: function (event) {
    var el = this.refs.inputRangeRef.getDOMNode();
    jQuery("body").trigger("inputRange.changed", {
      value: el.value
    });

  },

  render: function () {
    return (
      React.createElement("div", {
          className: "input-range"
        },
        React.createElement("input", {
          type: "range",
          ref: "inputRangeRef",
          onChange: this.onChangeListener,
          className: "input-range__slider",
          min: "0",
          max: "100",
          step: "1",
          defaultValue: "0"
        })));


  }
});


var ProgressBar = React.createClass({
  displayName: "ProgressBar",
  getInitialState: function () {
    return {
      value: "0%"
    };

  },

  onInputRangeChanged: function (event, data) {
    this.setState({
      value: data.value + "%"
    });

  },

  componentDidMount: function () {
    jQuery("body").on("inputRange.changed", this.onInputRangeChanged);
  },

  render: function () {
    var style = {
      width: this.state.value
    };


    return (
      React.createElement("div", {
          className: "progress"
        },
        React.createElement("div", {
          className: "progress__bar",
          style: style
        }),
        React.createElement("span", {
          className: "progress__value"
        }, this.state.value)));


  }
});


var Title = React.createClass({
  displayName: "Title",
  render: function () {
    return (
      React.createElement("h1", null, this.props.value));

  }
});


React.render(
  React.createElement("div", null,
    React.createElement(Title, {
      value: ""
    }),
    React.createElement(ProgressBar, null),
    React.createElement(InputRange, null)),

  document.getElementById("loanRangeTime"));