import Layout from '../components/Layout';
import React, {useState} from 'react';
import styled from 'styled-components';
import {TagsSection} from './Money/TagsSection';
import {CategorySection} from './Money/CategorySection';
import {NoteSection} from './Money/NoteSection';
import {NumberPadSection} from './Money/NumberPadSection';

const MyLayout = styled(Layout)`
  display:flex;
  flex-direction: column;
`
type Category = '-'|'+'
function Money() {
  const [selected,setSelected] = useState({
    tags:[] as string[],
    note:'',
    category:'-' as Category,
    amount:0,
  })
  return (
    <MyLayout>
      <TagsSection selected={selected.tags}
                   onChange={(tags)=>setSelected({
                     ...selected,tags:tags})}/>
      <NoteSection/>
      <CategorySection/>
      <NumberPadSection/>
    </MyLayout>
  );
}

export default Money;