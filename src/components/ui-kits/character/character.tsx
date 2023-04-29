import Link from 'next/link';
import React from 'react';

const Character = ({ name, id, img, gender, active, onClick = () => { } }: any) => {
    return (
        <div className='character_main px-2 border h-100'>
            <div className="img_parent p-2">
                <img src={img} alt="" className='w-100 rounded' />
            </div>
            <h3>{name}</h3>
            <div className='d-flex justify-content-between'>
                <Link href={`/user-details/${id}`} legacyBehavior>
                    <a className='btn btn-primary text-decoration-underline'>Details</a>
                </Link>
                <button className={`btn btn-warning`} disabled={active} onClick={() => onClick(id)}>Select User</button>
            </div>
        </div>
    );
};

export default Character;