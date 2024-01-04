import React from 'react'
import "./styles.css"

function StoreItem({ title, category, sizes }) {
  return (
    <div className="storeItem w-60 p-7 bg-white rounded-md">
      <h3 className="">
        {title}
      </h3>
      <div className="flex justify-between gap-2">
        <img className='w-20 h-30 bg-blue-300 my-5' />
        <div className='my-5 gap-4 flex flex-col'>
          <div>
            <p>category</p>
            <p>{category}</p>
          </div>
          <div>
            <p>sizes</p>
            <p>{sizes.join(",")}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StoreItem
