import React, { Component } from 'react';
import axios from 'axios';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

class Blog extends Component {
    state = {
        posts:[],
        selectedPostId: null,
    }
    componentDidMount () {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then( (res)=>{
            const posts = res.data.slice(0, 4);
            const updatedPosts = posts.map((post)=>{
                return {
                    ...post,
                    author: 'Kapil',
                }
            })
            this.setState({posts: updatedPosts})
            console.log(res);
        });
    }

    postSelectedHandler = (id) => {
        this.setState({selectedPostId: id}); 

        // (prevstate,id)=>
    }

    render () {
        const posts= this.state.posts.map((post)=> {
            return <Post key={post.id} 
                         clicked={()=>this.postSelectedHandler(post.id)} 
                         author={post.author} 
                         title={post.title}/>
        })

        // const post= this.state.posts.map((record)=>{
        //     if(this.state.selectedPostId===record.id){
        //         return <FullPost id = {record.id}
        //                          title = {record.title}
        //                          content = {record.body}
        //                          />
        //     }
        // })

        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <section>
                    <FullPost id={this.state.selectedPostId}/>
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;