import React from 'react'

const GenderCheckBox = ({ onCheckBoxChange, selectedGender }) => {
    return (
        <div className='flex'>
            <div className='from-control'>
                <label className={`label gap-2 cursor-pointer ${selectedGender === 'male' ? 'selected' : ""}`}>
                    <span>性别：</span>
                    <span className='label-text'>男</span>
                    <input type='checkbox' className='checkbox border-slate-900'
                        checked={selectedGender === "male"}
                        onChange={() => onCheckBoxChange("male")}
                    ></input>
                </label>
            </div>

            <div className='from-control'>
                <label className={`label gap-2 cursor-pointer ${selectedGender === 'female' ? 'selected' : ""}`}>
                    <span className='label-text'>女</span>
                    <input type='checkbox' className='checkbox border-slate-900'
                        checked={selectedGender === "female"}
                        onChange={() => onCheckBoxChange("female")}
                    ></input>
                </label>
            </div>
        </div>
    )
}

export default GenderCheckBox