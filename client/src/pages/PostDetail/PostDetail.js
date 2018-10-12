import React, { Component } from "react";
import Nav from "../../components/Nav";
import Row from "react-materialize/lib/Row";
import Col from "react-materialize/lib/Col";
import ProjectCard from "../../components/ProjectCard";
import ProjectContainer from "../../components/ProjectContainer";
import { Link } from "react-router-dom";

class Private extends Component {
  state = {
    post: {
    title: "Coolio!!!!!",
    summary: "The Detailed Story of How Cool We Are",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla scelerisque congue justo, at dapibus mi convallis et. Donec mauris erat, semper eu vulputate id, consectetur quis est. Quisque elit quam, condimentum sit amet dolor eu, porta interdum tortor. Suspendisse eros nulla, molestie ac cursus ac, cursus nec risus. Nulla porttitor dolor auctor, placerat augue tristique, vulputate odio. Praesent luctus turpis ac mi fermentum imperdiet. Nullam accumsan faucibus nunc eget sollicitudin. Maecenas dictum viverra blandit. Maecenas volutpat sapien a mattis ultrices. Quisque lacinia pulvinar nunc, et condimentum lorem vulputate tempus. Vivamus eget dictum enim. Pellentesque vestibulum ullamcorper dictum. Nam et auctor dui. Sed sodales pharetra lorem sed lacinia. Nam at lobortis erat. Curabitur lobortis turpis arcu, a pulvinar enim pretium ut. Quisque porta hendrerit purus, at luctus lacus vestibulum quis. Integer mollis sem sodales, volutpat massa fermentum, commodo ante. Suspendisse potenti. Vivamus ac congue lectus, a vulputate orci. Nulla eget enim ultrices neque faucibus ornare. Duis id eleifend tellus. Quisque pellentesque lobortis dolor id scelerisque. Etiam congue ex eu massa luctus convallis. Fusce sagittis magna et blandit suscipit. Cras et congue enim. Aenean scelerisque vestibulum sagittis. Nulla in tempus est. Maecenas quis ligula aliquet, laoreet erat id, finibus tellus. Curabitur varius dolor purus, ut maximus tellus pharetra sit amet. Nam viverra purus sed viverra auctor. Mauris elementum ligula sed imperdiet rutrum. Nam ut lorem nibh. Duis bibendum nisl sit amet ex eleifend, quis mattis nibh placerat. Nam nec mi quis ligula blandit pellentesque. Suspendisse porta, nunc sed elementum laoreet, nisi dui hendrerit nisi, et scelerisque nibh est id libero. Donec non lorem leo.",
    tags: ["Dogs, Me, CoolStuff"],
    isPublished: true,
    createdAt: "10/11/2018"}
  };

  // When this component mounts, grab the Post with the _id of this.props.match.params.id
  // e.g. localhost:3000/posts/599dcb67f0f16317844583fc

  // PLACEHOLDER

  // componentDidMount() {
  //   API.getpost(this.props.match.params.id)
  //     .then(res => this.setState({ post: res.data }))
  //     .catch(err => console.log(err));
  // }

  render() {
    return (
      <div>
      <Nav isPublic={true} />
      <div className="container">
        <Row>
          <Col s={12}>
              <h1>
                {this.state.post.title}
              </h1>
              <h6>
                {this.state.post.summary}
              </h6>
              <hr />
          </Col>
        </Row>
        <Row>
          <Col s={10}>
            <article>
              <p>
                {this.state.post.content}
              </p>
            </article>
          </Col>
        </Row>
        <Row>
          <Col size="md-2">
            <Link to="/">← Back to Posts</Link>
          </Col>
        </Row>
      </div>
      </div>
    );
  }
}

export default Private;
