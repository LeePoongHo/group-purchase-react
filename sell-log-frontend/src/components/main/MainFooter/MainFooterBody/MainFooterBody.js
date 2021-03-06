import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './MainFooterBody.scss'
import logo from 'static/images/sell.png';

class MainFooterBody extends Component {
    render() {
        return (
            <div className="twoConts">
                <div className="conts">
                    <ul className="list-area">
                        <li>
                            <p className="logo">
                                <Link to="/" alt="SELLLOGLOGO">
                                    <img alt="로고" src={logo} />
                                </Link>
                            </p>
                            <h2>SPACE CREATE</h2>
                            <p>대표이사 : XXX | 사업자등록번호 : XXX</p>
                            <p>주소 : XXX <br />
                                XXX
                            </p>
                            <p>통신판매업신고번호 : XXX </p>
                            <p>
                                <a className="link" href="#">사업자 정보확인 ></a>
                            </p>
                        </li>
                        <li>
                            <ul className="list-link">
                                <li>
                                    <a href="#">이용약관</a>
                                    <a href="#">법적고지</a>
                                </li>
                                <li>
                                    <a href="#">개인정보처리방침</a>
                                </li>
                                <li>
                                    <a href="#">청소년보호방침</a>
                                </li>
                                <li>
                                    <a href="#">영상정보처리기기운영/관리방침</a>
                                </li>
                                <li>
                                    <a href="#">이메일무단수집거부</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <h2>LG U+ 매매보호(에스크로) 서비스</h2>
                            <p>
                                고객님은 안전거래를 위해 모든거래 결제시<br />
                                저희 쇼핑몰에서 가입한 LG U+ 전자 결제의<br />
                                매매보호(에스크로) 서비스를 이용하실 수<br />
                                있습니다.<br />
                                <a href="#">서비스 가입사실 확인 ></a>
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default MainFooterBody;