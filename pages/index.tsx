import React, {useEffect, useState} from 'react';
import {Button, Htag, Input, Ptag, Rating, Tag} from '../components';
import {withLayout} from "../layout/Layout";
import {GetStaticProps} from "next";
import axios from "axios";
import {MenuItem} from "../interfaces/menu.interface";
import {API} from "../helpers/api";


function Home({menu}: HomeProps): JSX.Element {
    const [rating, setRating] = useState<number>(4);

    return (
    <>
        <Htag tag = 'h1'>Заголовок</Htag>
        <Button appearance={'primary'} arrow={'right'}>Кнопка</Button>
        <Button appearance={'ghost'} arrow={'down'}>Кнопка</Button>
        <Ptag size={'l'}>Большой</Ptag>
        <Ptag>Средний</Ptag>
        <Ptag size={'s'}>Маленький</Ptag>
        <Tag size={'s'}>Ghost</Tag>
        <Tag size={'m'} color={'red'}>Red</Tag>
        <Tag size={'s'} color={'green'}>Green</Tag>
        <Tag size={'s'} color={'primary'}>Primary</Tag>
        <Rating rating={rating} isEditable={true} setRating={setRating}/>
        <Input placeholder={'test'}/>
    </>
  );
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
    const firstCategory = 0;
    const { data: menu} = await axios.post<MenuItem[]>(API.topPage.find, {
        firstCategory
    });
    return {
        props: {
            menu,
            firstCategory
        }
    };
};

interface HomeProps extends Record<string, unknown>{
    menu: MenuItem[];
    firstCategory: number;
}
