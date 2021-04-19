import React from 'react';
import SecondComponent from './secondComponent';

function firstComponent(){
          return (
                    <div>
                              <h1>Use of props</h1>
                              <SecondComponent name="Imdadul Haque" uni_v="Daffodil International University" />
                              <SecondComponent name="Israt Jahan Maisha" uni_v="Kindar Gurden" />
                              <SecondComponent name="Shampa Akther" uni_v="Sirajganj Govt College" />
                    </div>
          )
}

export default firstComponent;