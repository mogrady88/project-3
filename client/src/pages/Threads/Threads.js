import React, { Component } from "react";
import ThreadCard from "../../components/privateComponents/ThreadCard";

const Threads = props => (
  <div>
    {props.threads.map((thread, index) => (
      <ThreadCard
        index={index}
        title={thread.title}
        author={thread.author}
        replies={thread.comments.length}
        updatedBy={thread.comments[thread.comments.length - 1].author}
        updatedAt={thread.comments[thread.comments.length - 1].createdAt}
        loadProjectSubpage={props.loadProjectSubpage}
      />
    ))}
  </div>
);

// class Threads extends Component {
//   state = {
//     post: {}
//   };

//   // When this component mounts, grab the Post with the _id of this.props.match.params.id
//   // e.g. localhost:3000/posts/599dcb67f0f16317844583fc

//   componentDidMount() {
//     API.getPost(this.props.match.params.id)
//       .then(res => this.setState({ post: res.data }))
//       .catch(err => console.log(err));
//   }

//   render() {
//     return (
//       <div>
//         <Row>
//           <Col s={12}>
//             <ThreadCard
//               title="Who is bringing the salsa?"
//               author="Tyler Maxwell"
//               replies={17}
//               updatedBy="Matt O'Grady"
//               updatedAt="Sep 27, 2018"
//             />
//             <ThreadCard
//               title="Who is bringing the salsa?"
//               author="Tyler Maxwell"
//               replies={17}
//               updatedBy="Matt O'Grady"
//               updatedAt="Sep 27, 2018"
//             />
//             <ThreadCard
//               title="Who is bringing the salsa?"
//               author="Tyler Maxwell"
//               replies={17}
//               updatedBy="Matt O'Grady"
//               updatedAt="Sep 27, 2018"
//             />
//             <ThreadCard
//               title="Who is bringing the salsa?"
//               author="Tyler Maxwell"
//               replies={17}
//               updatedBy="Matt O'Grady"
//               updatedAt="Sep 27, 2018"
//             />
//           </Col>
//         </Row>
//       </div>
//     );
//   }
// }

export default Threads;
