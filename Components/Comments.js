import React from 'react';
import 'antd/dist/antd.css';
import { Avatar, Button, Comment, Form, Input, List } from 'antd';
import moment from 'moment';
import { useState } from 'react';
const { TextArea } = Input;

const CommentList = ({ comments }) => (
  <List
    dataSource={comments}
    header={`${comments.length} ${comments.length > 1 ? 'replies' : 'reply'}`}
    itemLayout="horizontal"
    renderItem={(props) => <Comment {...props} />}
  />
);

const Editor = ({ onChange, onSubmit, submitting, value }) => (
  <div className='w-[50vw]'>
  <Form.Item>
      <TextArea rows={4} onChange={onChange} value={value} />
    </Form.Item>
    <Form.Item>
      <Button htmlType="submit" loading={submitting} onClick={onSubmit} type="primary">
        Add Comment
      </Button>
    </Form.Item>
  </div>
);

const Comments = () => {
  const [comments, setComments] = useState([
    {
      author: 'Han Solo',
      avatar: 'https://joeschmoe.io/api/v1/jon',
      content: <p>I love this video, wow. It's so cool!</p>,
      datetime: moment().fromNow(),
    },
    {
      author: 'Jess the First',
      avatar: 'https://joeschmoe.io/api/v1/jess',
      content: <p>I know, I've never seen anything like it!</p>,
      datetime: moment().fromNow(),
    },
    {
      author: 'Jaques the Fab',
      avatar: 'https://joeschmoe.io/api/v1/jacques',
      content: <p>I think you're all exaggerating!</p>,
      datetime: moment().fromNow(),
    },
  ]);
  const [submitting, setSubmitting] = useState(false);
  const [value, setValue] = useState('');

  const handleSubmit = () => {
    if (!value) return;
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setValue('');
      setComments([
        ...comments,
        {
          author: 'Jabala',
          avatar: 'https://joeschmoe.io/api/v1/jabala',
          content: <p>{value}</p>,
          datetime: moment().fromNow(),
        },
      ]);
    }, 1000);
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className='w-full flex flex-col items-center'>
      {comments.length > 0 && <CommentList comments={comments} />}
        <Comment
          className='w-[50vw]'
          avatar={<Avatar src="https://joeschmoe.io/api/v1/random" alt="Han Solo" />}
          content={
            <Editor
              onChange={handleChange}
              onSubmit={handleSubmit}
              submitting={submitting}
              value={value}
            />
        }
      />
    </div>
  );
};

export default Comments;