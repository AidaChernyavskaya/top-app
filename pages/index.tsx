import React from 'react';
import {Button, Htag, Ptag, Tag} from '../components';


export default function Home(): JSX.Element {
  return (
    <>
        <Htag tag = 'h1'>Текст</Htag>
        <Button appearance={'primary'} arrow={'right'}>Кнопка</Button>
        <Button appearance={'ghost'} arrow={'down'}>Кнопка</Button>
        <Ptag size={'l'}>Большой</Ptag>
        <Ptag>Средний</Ptag>
        <Ptag size={'s'}>Маленький</Ptag>
        <Tag size={'s'}>Ghost</Tag>
        <Tag size={'m'} color={'red'}>Red</Tag>
        <Tag size={'s'} color={'green'}>Green</Tag>
        <Tag size={'s'} color={'primary'}>Primary</Tag>
    </>
  );
}
