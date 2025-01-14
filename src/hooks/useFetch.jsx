// import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

const URL = 'https://pokeapi.co/api/v2/pokemon-species/';

export default function useFetch(id) {
  const [name, setName] = useState('');
  const [content, setContent] = useState('');

  // isLoading, Error 추가하기

  useEffect(() => {
    fetch(`${URL}${id}/`)
      .then((res) => res.json())
      .then((jsoned) => {
        setName(jsoned.names.filter((n) => n.language.name === 'ko')[0].name);
        setContent(
          jsoned.flavor_text_entries.filter((t) => t.language.name === 'ko')[0]
            .flavor_text
        );
        // console.log(jsoned);
        // console.log(jsoned);
      });

    // fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    //   .then((res) => res.json())
    //   .then((jsoned) => {
    //     console.log(jsoned);
    //     console.log(jsoned.types[1].type.name);
    //   });
  }, [id]);

  return { name, content };
}
