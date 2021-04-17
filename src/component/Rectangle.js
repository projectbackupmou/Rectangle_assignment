import React, { Component } from 'react'
 class Rectangle extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
            width: '400px',
            height: '400px',
            background: "red",
            display:"inline-block",
           text:"Press"
         }
         this.changeColor = this.changeColor.bind(this)
     }
     

 changeColor(){
    this.setState({text:"Button Clicked",  background: "green", height:"200px",width:"200px"})
 }

    render() {
        return (
            <>
            <div className="rectangle" style={{background:this.state.background,height:this.state.height,width:this.state.width, display:"inline-block"}}>
          
            </div>
               <div>
                <button onClick={this.changeColor}>{this.state.text}</button>
                </div>
        
        </>
        )
    }
}



export default Rectangle;
