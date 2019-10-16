import React, { Component, Fragment } from "react";

class Counter extends Component {
  //   state = {
  //     value: this.props.value,
  //     tags: ["tag1", "tag2", "tag3"]
  //   };

  styles = {
    fontSize: 15,
    fontWeight: "bold"
  };

  //Former approach
  //   constructor() {
  //     super();
  //     this.handleIncrements = this.handleIncrements.bind(this);
  //   }

  //   handleIncrements = () => {
  //     this.setState({ value: this.state.value + 1 });
  //     console.log("Increment Clicked");

  //     // object.method(); is bind to the object
  //     // but when we call function directly then this will reference to the windows object
  //   };

  //   renderTags() {
  //     if (this.state.tags.length === 0) return <p>There is no tags available</p>;

  //     return (
  //       <ul>
  //         {this.state.tags.map(tag => (
  //           <li key={tag}>{tag}</li>
  //         ))}
  //       </ul>
  //     );
  //   }

  render() {
    console.log("Props", this.props);
    return (
      <Fragment>
        <div>
          <span style={this.styles}>Counter #{this.props.counter.id}</span>

          <span style={this.styles} className={this.getBadgeClasses()}>
            {this.formatCount()}
          </span>
          <button
            onClick={() => this.props.onIncrement(this.props.counter)}
            className="btn btn-secondary btn-sm"
          >
            Increament
          </button>
          {/* {this.renderTags()} */}
          <button
            onClick={() => this.props.onDelete(this.props.counter.id)}
            className="btn btn-danger btn-sm m-2"
          >
            Delete
          </button>
        </div>
      </Fragment>
    );
  }
  getBadgeClasses() {
    const { value } = this.props.counter;
    let classes = "badge m-2 badge-";
    classes +=
      value === 0 ? "warning" : value % 5 === 0 ? "success" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
