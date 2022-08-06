import React from 'react';
import { AntDesignOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';
import { getUsers } from '../store/actions/usersAction'
import {useDispatch, useSelector} from 'react-redux'
import { useEffect } from 'react';
import { getSession, signOut } from "next-auth/react"
import { Button } from 'antd';
import 'antd/dist/antd.css';
import { useRouter } from 'next/router';
import { UserOutlined } from '@ant-design/icons';
import SearchForm from './SearchForm';

export default function AvatarSection () {
    const dispatch = useDispatch()
    const usersList = useSelector(state => state.usersList)
    const {loading, error, users} = usersList
    useEffect(() => {
        dispatch(getUsers(usersList)) 
    }, [dispatch])
    return (
        <div className={`mt-4 xl:mt-0 w-full flex h-[15vh] items-center justify-between md:flex-row flex-col`}>
            <div className={`md:ml-[10vh] ml-2`}>
            <SearchForm />
            </div>
        <div className='mr-10'>
        <Avatar
            size={{
            xs: 24,
            sm: 32,
            md: 40,
            lg: 64,
            xl: 80,
            xxl: 100,
            }}
            icon={<AntDesignOutlined/>}
            src={users ? `${users.image}` : "" }
        />
        <Button onClick={() => {signOut()}} className="ml-4" type="primary">Sign out</Button>
        </div>
        </div>
    );
}


