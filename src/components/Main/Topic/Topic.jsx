import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { ProgressBar } from 'react-loader-spinner';


const Topic = () => {

  const [value, setValue] = useState("holidays"); // Para guardar el dato a buscar
  const [posts, setPosts] = useState([]); // Para guardar los posts
  
  // equivale a un componentDidUpdate()
  useEffect(() => {
    async function fetchData() {
      try{
        // Petición HTTP
        const res = await axios.get(`https://www.reddit.com/r/${value}.json`);
        const json = res.data;

        // Guarda en el array de posts el resultado. Procesa los datos
        const data = json.data.children.map(c => c.data);
        setPosts(data);
        
      }catch(e){
        setPosts([]) // No pintes nada 
      }
    }

    fetchData();
  }, [value]); // componentDidUpdate


  const handleSubmit = e => {
    e.preventDefault();
    console.log(e.target.topic.value)
    setValue(e.target.topic.value) // Modificando el estado de Value
  };


  return    <section className="topic">
              <h1>Topic</h1>
              <form onSubmit={handleSubmit}>
                <input name="topic"/>
                <button>Buscar</button>
              </form>

              {posts.length!==0?
                                <ul className='topics'>
                                  {posts.map(post => (
                                    <li key={post.id}>{post.title}</li>
                                  ))}
                                </ul>
                                : 
                                <>
                                <p>Busca tu topic. No desistas si no ves resultados</p>
                                <ProgressBar
                                visible={true}
                                height="80"
                                width="80"
                                color="#4fa94d"
                                ariaLabel="progress-bar-loading"
                                wrapperStyle={{}}
                                wrapperClass=""
                                />    
                                
                                </>
                                           
              }
            </section>
};

export default Topic;