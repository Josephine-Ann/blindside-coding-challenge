import React from 'react';
import Link from 'next/link';
import 'antd/dist/antd.css';
import { HomeOutlined, HeartOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { useState, useEffect } from 'react';
import { setInput } from '../store/actions/inputAction';
import {useDispatch, useSelector} from 'react-redux'
import { useRouter } from 'next/router';

const items = [
  {
    label: (
      <Link href="/">
      Favourites and more
      </Link>
    ),
    key: 'SubMenu',
    icon: <HeartOutlined />,
    children: [
      {
        type: 'group',
        label: 'Work and Self-Improvement',
        children: [
          {
            label: (
              <Link href="/">
                Gym              
              </Link>
            ),
            key: 'gym',
          },
          {
            label: (
              <Link href="/">
                Work-Life Balance              
              </Link>
            ),
            key: 'work-life-balance',
          },
        ],
      },
      {
        type: 'group',
        label: 'Personal Interests',
        children: [
          {
            label: 'Nature',
            key: 'nature',
          },
          {
            label: 'Psychology',
            key: 'psychology',
          },
        ],
      },
    ],
  },
  {
    label: "Currently Viewing",
    key: 'currently-viewing',
    icon: <VideoCameraOutlined />
  },
];

const Layout = ({children}) => {
  const { query } = useRouter()
  const { id } = query
  const [current, setCurrent] = useState("SubMenu");
  const dispatch = useDispatch()
  const inputField = useSelector(state => state.inputField)
  const {loading, error, input} = inputField

  const onClick = (e) => {
      dispatch(setInput(e.key))  
      setCurrent(e.key);
    };
    useEffect(() => {
        if (id) setCurrent("currently-viewing")
    }, [id])
  return (
    <div>
        <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={id ? items : items.slice(0,1)} />
        {children}
    </div>
  )
};

export default Layout;