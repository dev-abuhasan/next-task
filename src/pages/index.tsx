import Seo from '@/components/seo';
import ClickBtn from '@/components/ui-kits/buttons/click-button';
import { GetServerSideProps, NextPage } from 'next';
import axios from 'axios';
import React, { useState } from 'react';


const Home: NextPage = ({ characters }: any) => {
  const [data, setData] = useState(characters ? characters : []);

  console.log(data);
  
  const onClick = () => {
    console.log('object');
  };

  return (
    <div>
      <Seo title="Home -" description="Home page" />

      <div className="container">
        <ClickBtn onClick={onClick} className="border border-danger border-2">
          Click Me
        </ClickBtn>
        <h1 className='text-danger'>ABU HASAN</h1>
      </div>
    </div>
  );
};



export const getServerSideProps: GetServerSideProps = async () => {
  const { data } = await axios.get('https://rickandmortyapi.com/api/character');

  return {
    props: {
      characters: data.results
    }
  };
};

export default Home;