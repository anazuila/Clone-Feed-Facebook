import React from 'react';

function Header({ author, date }) {
  return (
    <div className="post-header">
      <img className="avatar" src={author.avatar} />
      <div className="details">
        <span>{author.name}</span>
        <span>{date}</span>
      </div>
    </div>
  );
}

function Comments({ comments }) {
  return (
    <div className="comments">
      <div className="divider"/>
        {comments.map(comment => (
          <div key={comment.id} className="comment">
            <img className="avatar" src={comment.author.avatar} />
            <p>
              <span>{comment.author.name}</span>
              {comment.content}
            </p>
          </div>
        ))}      
    </div>
  );
}

function PostItem({ author, date, content, comments }) {
  return (
    <div className="post-comments">
      <Header author={author} date={date} />
      <p className="post-content">{content}</p>
      <Comments comments={comments} />
    </div>
  );
}

export default PostItem;