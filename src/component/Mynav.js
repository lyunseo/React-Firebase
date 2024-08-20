import React, { Component } from 'react'

class Mynav extends Component{
  render(){
    let lists = []; 
    console.log(this.props.data);
    let data = this.props.data;
/*    let i = 0;
    while(i<data.length){
      lists.push(
        <li key={data[i].id}><a href='/'>{data[i].title}</a></li>
      );
      i += 1;
    }

    data.forEach(function(item, idx){
      lists.push(
        <li key={item.id}><a href='/'>{item.title}</a></li>

      )
    })
      */

    data.forEach(item=>{
      lists.push(
        <li key={item.id}><a href='/'>{item.title}</a></li>

      )
    })

    return(
      <nav>
        <ul>
          {lists}
        </ul>
      </nav>
    )
  }
}

  export default Mynav;