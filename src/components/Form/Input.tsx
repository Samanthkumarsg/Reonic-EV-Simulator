import React, { Fragment } from 'react';
import { InputProps } from '../../types/types';

const Input: React.FC<InputProps> = ({ label, value, onChange, min, max, type, suffix }) => {
    return (
        <Fragment>
            <label className="block text-sm font-medium text-gray-800 mb-2">
                {label}
            </label>
            {type === 'number' ? (
                <input
                    type="number"
                    min={min}
                    max={max}
                    value={value}
                    onChange={(e) => onChange(Number(e.target.value))}
                    className="p-1 text-sm  w-auto rounded-md border border-gray-300 shadow-sm focus:border-gray-800 focus:ring-gray-800 outline-gray-800"
                />
            ) : (
                <div className='flex flex-row items-center justify-between'>
                    <input
                        type="range"
                        min={min}
                        max={max}
                        value={value}
                        onChange={(e) => onChange(Number(e.target.value))}
                        className=" w-full bg-gray-50 appearance-none cursor-pointer accent-gray-800 "
                    />
                    <span className="text-sm text-gray-800 text-right w-14">
                        {value}{suffix ? ` ${suffix}` : ''}
                    </span>
                </div>
            )}
        </Fragment>
    );
};

export default Input;
