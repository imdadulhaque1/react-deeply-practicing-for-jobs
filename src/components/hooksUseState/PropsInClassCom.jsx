import React, { Component } from 'react'

export default class PropsInClassCom extends Component {
          constructor(props){
                    super(props);
                    this.state = {
                              count: 0
                    }
          }
          handleIncrement = () => {
                    this.setState({
                              count: this.state.count + 1
                    })
          }
          render() {
                    const {count} = this.state;
                    return (
                              <div>
                                        <hr/>
                                        <h3>Increment Using Props in Class Component!</h3>
                                        <hr/>
                                        <h2>Count: {count}</h2>
                                        <button onClick={this.handleIncrement}>Increment</button>
                              </div>
                    )
          }
}
