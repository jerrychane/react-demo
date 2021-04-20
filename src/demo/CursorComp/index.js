import React, { Component } from 'react'
class CursorComp extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  handleChange = () => {
    let input = this.refs.myRef
    console.log('🚀 ~ input', input)
    let val = input.value
    console.log('selectionStart',input.selectionStart)
    console.log('selectionEnd',input.selectionEnd)
    input.selectionStart = input.selectionEnd = 1;
  }
  
  render() { 
    return ( <div>
      <textarea name="" cols="100" rows="5" ref="myRef" onChange={() => this.handleChange()}>测试光标</textarea>
      <button type="submit">提交</button>
    </div> );
  }
}
 
export default CursorComp;