import { HOST } from '@/services/utils/config';
import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

const UserDetails = () => {
    const { query } = useRouter();
    const [user, setUser] = useState<any>({});

    React.useEffect(() => {
        if (query?.id) {
            const fetchData = async () => {
                const { data } = await axios.get(`${HOST}/character/${query?.id}`);
                setUser(data);
            }
            fetchData();
        }
    }, [query?.id]);


    return (
        <div className='container'>
            <h1>{user?.name}</h1>
            <p>{user?.gender}</p>
            <img src={user?.image} alt="" />
        </div>
    );
};

export default UserDetails;