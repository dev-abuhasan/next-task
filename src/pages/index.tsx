import Seo from '@/components/seo';
import { GetServerSideProps, NextPage } from 'next';
import axios from 'axios';
import React, { useState } from 'react';
import { HOST } from '@/services/utils/config';
import Character from '@/components/ui-kits/character/character';

const Home: NextPage = ({ characters }: any) => {
  const [data, setData] = useState(characters ? characters : []);
  const [userIds, setUserIds] = useState<any>([]);
  const [page, setPage] = React.useState(0);
  const handlePagination = (e: any) => {
    if (e === 'next') {
      setPage(page + 1);
    } else {
      setPage(page - 1);
    }
  }

  const handleGetId = (id: any) => {
    setUserIds([...userIds, id])
  }

  console.log(userIds);

  React.useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(`${HOST}/character/?page=${page}`);
      setData(data?.results)
    }
    fetchData();
  }, [page]);

  return (
    <div>
      <Seo title="Home -" description="Home page" />

      <div className="container">
        <h1 className='text-danger'>Character Information</h1>

        <div className="row">
          {data?.map((d: any, i: any) =>
            <div key={i} className='col-md-3 mb-3'>
              <Character id={d?.id} name={d?.name} img={d?.image} className="w-100" onClick={(e: any) => handleGetId(e)} />
            </div>
          )}
        </div>
        <div className='d-flex justify-content-between'>
          <button className='btn btn-dark' disabled={page >= 0} onClick={() => handlePagination('prev')}>Prev</button>
          <button className='btn btn-dark' disabled={false} onClick={() => handlePagination('next')}>Next</button>

          <button>Get</button>
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const { data } = await axios.get(`${HOST}/character`);

  return {
    props: {
      characters: data.results
    }
  };
};

export default Home;