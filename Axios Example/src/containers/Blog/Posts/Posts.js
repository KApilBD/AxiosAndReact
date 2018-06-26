import React, {Component} from 'react';
// import { Link }  from 'react-router-dom';

import axios from '../../../axios';
import {Route} from 'react-router-dom';
import Post from '../../../components/Post/Post';
import './Posts.css';
import FullPost from '../FullPost/FullPost';

class Posts extends Component {
    state = {
        posts:[],
    }
    
    componentDidMount () {
        console.log(this.props);
        axios.get('/posts')
        .then( (res)=>{
            const posts = res.data.slice(0, 4);
            const updatedPosts = posts.map((post)=>{
                return {
                    ...post,
                    author: 'Kapil',
                }
            })
            this.setState({posts: updatedPosts})
            // console.log(res);
        })
        .catch(error => {
            console.log(error);
        });
    }

    postSelectedHandler = (id) => {
        this.props.history.push({pathname: '/posts/' + id})
        // (prevstate,id)=>
    }

    render(){

        const posts= this.state.posts.map((post)=> {
            return (
                    // <Link to= {'/'+post.id} >
    
                        <Post 
                            key={post.id}
                            clicked={()=>this.postSelectedHandler(post.id)} 
                            author={post.author} 
                            title={post.title}/>
                    /* // </Link> */
                    
                )
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
                <Route path={this.props.match.url+"/:id"}  component={FullPost} />
            </div>
        )
    }
}

export default Posts;