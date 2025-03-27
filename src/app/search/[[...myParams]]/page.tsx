import React from 'react'

export default function DynamicSearch(props:any) {
    console.log(props);
    
    const myParams:String[] = props.params.myParams;
    const category = myParams[0];
    const group = myParams[1];
    const brand = myParams[2];
    const modelNo = myParams[3];
    console.log(props);
    
    return (
        <div>DynamicSearch: {category}</div>
    )
}
                                                                                                                      