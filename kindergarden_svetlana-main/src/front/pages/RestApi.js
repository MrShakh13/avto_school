// import React, { Component } from 'react'
// import axios from 'axios'

// export default class RestApi extends Component {

//     constructor(props) {
//         super(props)

//         this.state = {
//             posts: []
//         }
//     }
//     componentDidMount() {
//         axios.get('https://backend-school-0u75.onrender.com/child')
//             .then(response => {
//                 this.setState({
//                     posts: response.data
//                 })
//                 console.log(response.data);
//             })
//     }
//     render() {
//         const { posts } = this.state
//         return (
//             <div>
//                 <h1>rest</h1>
//                 {
//                     posts.map(post => <div key={post.id}>{posts.title}</div>)
//                 }
//             </div>
//         )
//     }
// }


import axios from 'axios'
import React, { Component } from 'react'

export default class RestApi extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         userId: '',
         title: '',
         body: ''
      }
    }

    // componentDidMount() {
    //     axios.get('https://backend-school-0u75.onrender.com/child')
    //     .then(response => {
    //         this.setState({
    //             posts: response.data
    //         })
    //         console.log(response.data);
    //     })
    // }

    handleChange=(e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        axios.post('https://backend-school-0u75.onrender.com/', this.state)
        .then(response => {
            console.log(response);
        })
    }
    

  render() {
    const {userId, title, body} = this.state
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
            <div>
                <label>User Id</label>
                <input 
                type="text"
                name='userId'
                value={userId}
                onChange={this.handleChange}
                />
            </div>
            <div>
                <label>Title</label>
                <input 
                type="text"
                name='title'
                value={title}
                onChange={this.handleChange}
                />
            </div>
            <div>
                <label>Body</label>
                <input 
                type="text"
                name='body'
                value={body}
                onChange={this.handleChange}
                />
            </div>
            <div>
                <button type='submit'>Submit</button>
            </div>
        </form>
        <iframe
       src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2481.7861001880665!2d46.011060176536894!3d51.535482971819754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4114c7b706714d39%3A0xfcfe98f6fcfc6cdb!2z0YPQuy4g0J_Rg9Cz0LDRh9GR0LLQsCDQlS4g0JgsIDk4LzEwMCwg0KHQsNGA0LDRgtC-0LIsINCh0LDRgNCw0YLQvtCy0YHQutCw0Y8g0L7QsdC7Liwg0KDQvtGB0YHQuNGPLCA0MTAwMTI!5e0!3m2!1sru!2s!4v1684586014215!5m2!1sru!2s" 
        height="450"
        style={{
          border: "0",
          width: "90%",
          marginLeft: "5%",
          marginTop: "10px",
        }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
      </div>
    )
  }
}
