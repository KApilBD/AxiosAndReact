import React, { Component } from 'react';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';
// import axios from 'axios';

// import axios from '../../axios';
import './Blog.css';
import Posts from './Posts/Posts';
//import NewPost from './NewPost/NewPost';
/// import FullPost from './FullPost/FullPost';
import asyncComponent from '../../hoc/asyncComponent';

const AsyncNewPost = asyncComponent(() => {
    return import('./NewPost/NewPost');
})

class Blog extends Component {
    state={
        auth: true,
    }

    render () {
        // const posts= this.state.posts.map((post)=> {
        //     return <Post key={post.id} 
        //                  clicked={()=>this.postSelectedHandler(post.id)} 
        //                  author={post.author} 
        //                  title={post.title}/>
        // })

        // const post= this.state.posts.map((record)=>{
        //     if(this.state.selectedPostId===record.id){
        //         return <FullPost id = {record.id}
        //                          title = {record.title}
        //                          content = {record.body}
        //                          />
        //     }
        // })

        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink 
                                to= "/posts" 
                                exact
                                activeClassName="active">Home</NavLink></li>
                            <li><NavLink to={{
                                pathname:'/new-post',
                                // hash: '#submit',
                                // search: '?quick-submit=true',
                            }}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                {/* <Route path="/" exact render={()=><h1> Home </h1>} /> */}
                
                <Switch> 
                    {this.state.auth ? <Route path="/new-post"  component={AsyncNewPost}  /> : null}
                    <Route path="/posts"  component={Posts} />
                    <Route render={()=> <h1>Not Found</h1>} />
                    {/* <Redirect from="/" to= "/posts" /> */}
                </Switch>
            </div>
        );
    }
}

export default Blog;