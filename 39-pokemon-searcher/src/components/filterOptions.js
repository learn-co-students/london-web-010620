import React from 'react'

const FilterOptions = props => {


    return (
        <div>
            <button onClick={()=>props.setSortType("default")}>Default</button>
            <button onClick={()=>props.setSortType("abc")}>abc</button>
        </div>
    )
}

export default FilterOptions