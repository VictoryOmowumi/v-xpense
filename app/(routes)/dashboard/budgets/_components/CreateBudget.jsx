import React from 'react'

const CreateBudget = () => {
  return (
    <div className='p-5 w-full'>
        <h2 className="text-2xl font-semibold">Create Budget</h2>
        <div className="flex flex-col gap-2 w-3/5 mx-auto">
            <div className="flex gap-2">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" placeholder="Name" />
            </div>
            <div className="flex gap-2">
                <label htmlFor="amount">Amount</label>
                <input type="number" id="amount" placeholder="Amount" />
            </div>
            <button className="bg-sky-500 text-white p-2 rounded-sm">Create Budget</button>
        </div>
    </div>
  )
}

export default CreateBudget