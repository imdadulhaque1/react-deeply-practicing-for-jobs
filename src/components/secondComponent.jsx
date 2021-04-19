import React from 'react';

function secondComponent(props)  {
          const {name, uni_v} = props;     // store the props value in variable using Destructuring
          return (
                    <div>
                              <h3>Name: {name}</h3>
                              <p>University Name: {uni_v}</p>
                    </div>
          )
}

export default secondComponent;