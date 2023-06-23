import React from 'react';
import { Home,Menu } from './components/';
import { BoardForm,BoardList } from './board/';
import { MemberForm,MemberList,LoginForm } from './member/';
import { Route, Routes } from 'react-router-dom';
import errimg from './image/404.png';

function RouteMain(props) {
    return (
        <div>
            <Menu/>
            <br style={{clear:'both'}}/><br/>

            <Routes>
                
                <Route path='/' element={<Home/>}/>
                <Route path='/login' element={<LoginForm/>}/>

                <Route path='/member'>
                    <Route path='form' element={<MemberForm/>}/>
                    <Route path='list' element={<MemberList/>}/>
                </Route>

                <Route path='/board'>
                    <Route path='form' element={<BoardForm/>}/>
                    <Route path='list' element={<BoardList/>}/>
                    <Route path='list/:currentPage' element={<BoardList/>}/>
                </Route>

                <Route path='*' element={
                    <div>
                        <h3>잘못된 URL 주소입니다.</h3>
                        <br/><br/>
                        <img alt='' src={errimg}/>
                    </div>
                }>

                </Route>


            </Routes>
        </div>
    );
}

export default RouteMain;