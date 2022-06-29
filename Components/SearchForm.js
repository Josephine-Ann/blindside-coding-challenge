import React, { useState, useEffect } from 'react';
import 'antd/dist/antd.css';
import { UserOutlined } from '@ant-design/icons';
import { Space, Input } from 'antd';
import {useDispatch, useSelector} from 'react-redux'
import { AudioOutlined } from '@ant-design/icons';
import { setInput } from '../store/actions/inputAction';

const { Search } = Input;

const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: '#1890ff',
    }}
  />
);


  export default function SearchForm () {
    const dispatch = useDispatch()
    const inputField = useSelector(state => state.inputField)
    const {loading, error, input} = inputField

    const searchSubmit = (value) => {
      dispatch(setInput(value))
    };


    return (
      <Space direction="vertical">
        <Search
          placeholder={"Search any topic..."}
          onSearch={searchSubmit}
          style={{
            width: 200,
          }}
        />
      </Space>
    )
  }
