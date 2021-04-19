import React from 'react'
import Data from "./data.json";

function MappingData () {
          // console.log(Data[0].name);
          // let items = [];
          // for (let i=0; i<Data.length; i++) {
          //           items.push(
          //                     <h4>Name: {Data[i].name}</h4>,
          //                     <p>University Name: {Data[i].uni_v}</p>
          //           )
          // }
          return (
                    <div>
                    <h1>Practicing Mapping using JSON data</h1>
                    {
                              Data.map((item) => <h4>Name: {item.name}, University Name: {item.uni_v}</h4>  )
                    }
                    </div>
          )
}

export default MappingData
