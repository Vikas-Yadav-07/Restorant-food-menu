import React from 'react'

const Categories = (props) => {
	const { filterItems, categories } = props

	return (
        // categories.map(catogory=>{
        //     return <div className="btn-container">
		// 	<button className="filter-btn" onClick={() => filterItems(catogory)}>
		// 		{catogory}
		// 	</button>
			
		// </div>
        // })
		<div className='btn-container'>
			{categories.map(catogory=>{
				return <button className='filter-btn' onClick={()=> filterItems(catogory)}>
					{catogory}
				</button>
			})}
		</div>
		
	)
}

export default Categories
