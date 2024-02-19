import './style.css'
import React from 'react';

import { loadPosts } from '../../utils/load-posts';
import { Posts } from '../../components/Posts';
import { Button } from '../../components/Button';
import { TextInput } from '../../components/TextInput';
import { useEffect, useState, useCallback } from 'react';

export const Home = () => {
  //useStates
  const [posts, setPosts] = useState([]);
  const [allPosts, setAllPosts] = useState([]);
  const [page, setPage] = useState(0);
  const [postsPerPage] = useState(10);
  const [searchValue, setSearchValue] = useState('');


  const noMorePosts = page + postsPerPage >= allPosts.length;

  const filteredPosts = searchValue ?
    allPosts.filter(post => {
      return post.title.toLowerCase().includes(
        searchValue.toLowerCase()
        );
    })
    :
    posts;

  const hendleLoadPosts = useCallback(async (page, postsPerPage) => {

    const postsAndPhotos = await loadPosts();

    setPosts(postsAndPhotos.slice(page, postsPerPage));
    setAllPosts(postsAndPhotos)
  }, [])


  useEffect(() => {
    hendleLoadPosts(0, postsPerPage);
  }, [hendleLoadPosts, postsPerPage])

  const loadMorePost = () => {

    const nextPage = page + postsPerPage;
    const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage);
    posts.push(...nextPosts)

    setPosts(posts);
    setPage(nextPage);
  }

  const handleChange = (e) => {
    const {value} = e.target
    setSearchValue(value);
  }

  return (
    <section className='container'>
      <div className='search-container'>
        {!!searchValue && (
            <h1>Search: {searchValue}</h1>
        )}

        <TextInput searchValue={searchValue} handleChange={handleChange} />
      </div>
        {filteredPosts.length > 0 &&(
          <Posts posts={filteredPosts}/>
        )}

        {filteredPosts.length === 0 &&(
          <p>Nao tem mais o que ver aqui, apague!</p>
        )}

        <div className='button-container'>
          {!searchValue && (
            <Button
              text="Look this shit again"
              onClick={loadMorePost}
              disabled={noMorePosts}
            />
          )}
        </div>
    </section>
  );
};
