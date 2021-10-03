import logo from './assets/logo.svg';
import './App.css';
import bg from './assets/head_bg.svg';
import bg_pic from './assets/bg_pic.svg';
import course_pic from './assets/course_pic.png'
import course_arrow from './assets/arrow_forward_24px.svg'
import arrow_yellow from './assets/arrow_yellow.svg'
import talk_pic from './assets/talk_pic.png'
import hackathon_pic from './assets/hackathon_pic.png'
import arrow_rotate from './assets/arrow_rotate.png'
import research_pic from './assets/research_pic.png'
import member1 from './assets/member1.png'
import member2 from './assets/member2.png'
import member3 from './assets/member3.png'
import member4 from './assets/member4.png'
import member5 from './assets/member5.png'
import member6 from './assets/member6.png'
import China from './assets/china.svg'
import Korea from './assets/korea.svg'
import Indonesia from './assets/indonesia.svg'
import p1 from './assets/p1.png'
import p2 from './assets/p2.png'
import p3 from './assets/p3.png'
import p4 from './assets/p4.png'
import p5 from './assets/p5.png'
import p6 from './assets/p6.png'
import p7 from './assets/p7.png'
import p8 from './assets/p8.png'
import mail_box from './assets/mail_box.svg'
import public_wechat from './assets/public-we.png'
import wechat_helper from './assets/wechat-helper.png'
import logo_colored from './assets/logo_colored.svg'
import React, { Component } from 'react'

class App extends Component {
  scrollToAnchor = (anchorName) => {
    if (anchorName) {
        // 找到锚点
        let anchorElement = document.getElementById(anchorName);
        // 如果对应id的锚点存在，就跳转到锚点
        if(anchorElement) { anchorElement.scrollIntoView(); }
    }
  }
  render() {
  return (
    <div className="App">
      <div>
        <a id="top"></a>
        <img src={bg} className="head_bg1" alt=""  />
        <img src={bg_pic} className="head_bg2" alt=""  />
        <div className="head_words">
          <div className="head_font">THUBA旨在构建学生和区块链行业之间的链接桥梁</div>
        </div>
        <img src={logo} className="logo" alt=""/>
        <a onClick={()=>this.scrollToAnchor('top')} className="btn">
          <div className="header_font header_button_1">首页</div>
        </a>
        <a onClick={()=>this.scrollToAnchor('resources')} className="btn">
          <div className="header_font header_button_2">资源</div>
        </a>
        <a onClick={()=>this.scrollToAnchor('team')} className="btn">
        <div className="header_font header_button_3">团队</div>
        </a>
        <a onClick={()=>this.scrollToAnchor('cooperate')} className="btn">
          <div className="header_font header_button_4">合作</div>
        </a>
        <a onClick={()=>this.scrollToAnchor('contact')} className="btn">
          <div className="header_font header_button_5">联系</div>
        </a>
        <div className="header_font header_button_6">EN/中文</div>
      </div>
      
        <div className="subtitle"><a id="resources">精彩回顾</a></div>
      
      <div>        
        <img src={course_pic} className="course_pic" alt=""/>
        <div className="course_card_pos card">
          <div className="course_card_title_pos card_title">区块链课程</div>
          <div className="course_words card_font">系统性区块链课程，从入门到应用</div>
          
          <a href="https://space.bilibili.com/489099832/channel/seriesdetail?sid=294730" target="_blank" rel="noopener noreferrer">
            <div className="card_btn">
              <div className="card_btn_words">点击观看</div>          
              <img src={course_arrow} className="card_arrow" alt=""/>
            </div>
          </a>
        </div>
      </div>
      <img src={arrow_yellow} className="arrow_yellow arrow_yellow_1" alt=""/>
      
      <div>
        <div className="talk_card_pos card">
          <div className="talk_card_title_pos card_title">THUBA Talk</div>
          <div className="talk_words card_font">回顾THUBA各类区块链活动</div>
          <a href="https://space.bilibili.com/489099832/channel/seriesdetail?sid=294675" target="_blank" rel="noopener noreferrer">
          <div className="card_btn">
            <div className="card_btn_words">点击回顾</div>
            <img src={course_arrow} className="card_arrow"  alt=""/>
          </div>
          </a>
        </div>
        <img src={talk_pic} className="talk_pic" alt=""/>
      </div>
      <img src={arrow_yellow} className="arrow_yellow arrow_yellow_2" alt=""/>


      <div>
        <img src={hackathon_pic} className="hackathon_pic" alt=""/>
        <div className="hackathon_card_pos card">
          <div className="hackathon_card_title_pos card_title">参加黑客松</div>
          <div className=" card_font hackathon_words">参与THUBA黑客松平台，认识队友，获取奖金</div>
          <a href="https://space.bilibili.com/489099832/channel/seriesdetail?sid=294689" target="_blank" rel="noopener noreferrer">
          <div className="card_btn">
            <div className="card_btn_words">视频展示</div>
            <img src={course_arrow} className="card_arrow" alt=""/>
          </div>
          </a>
          <a href="https://github.com/THUBA-Labs/Hackthons" target="_blank" rel="noopener noreferrer">
          <div className="card_btn_demo">
            <div className="card_btn_words_demo">demo源码</div>
          </div>
          </a>
        </div>
      </div>
      <img src={arrow_rotate} className="arrow_yellow_3" alt=""/>

      <div>
        <div className="research_card_pos card">
          <div className="talk_card_title_pos card_title">区块链研究</div>
          <div className="talk_words card_font">获取前沿区块链学术研究与行业研究</div>
          <a href="https://github.com/THUBA-Labs/Research" target="_blank" rel="noopener noreferrer">
          <div className="card_btn">
            <div className="card_btn_words">点击观看</div>
            <img src={course_arrow} className="card_arrow" alt=""/>
          </div>
          </a>
        </div>
        <img src={research_pic} className="research_pic" alt=""/>        
      </div>
      
      <div className="co-members"><a id="team">核心成员</a></div>

      <div>
        <div className="member-card member1">
          <img src={member1} className="member1_pic" alt=""/>
          <div className="member_name name1">张 奥 Zeo</div>
          <img src={China} className="country country1" alt=""/>
          <div className="job"><div className="job_font">President of THUBA</div></div>
          <div className="department">计算机系</div>
          <div className="stu_kind_phd"><div className="stu_kind_font">PHD</div></div>
          <div className="aspect aspect1">研究方向：<i className="aspect_content">区块链分片/DeFi协议/MEV</i></div>
        </div>
        <div className="member-card member2">
          <img src={member2} className="member_pic" alt=""/>
          <div className="member_name name2">肖 娜 Celia</div>
          <img src={China} className="country country2" alt=""/>
          <div className="job_vp"><div className="job_font_vp">VP</div></div>
          <div className="job_depart"><div className="job_font_depart">宣传部</div></div>
          <div className="department">美术学院</div>
          <div className="stu_kind_ms"><div className="stu_kind_font">Master</div></div>
          <div className="aspect aspect2">研究方向：<i className="aspect_content">产品设计/用户研究/艺术市场</i></div>
        </div>
        <div className="member-card member3">
          <img src={member3} className="member_pic" alt=""/>
          <div className="member_name name3">韩昊轩 Sean</div>
          <img src={China} className="country country3" alt=""/>
          <div className="job_vp"><div className="job_font_vp">VP</div></div>
          <div className="job_depart"><div className="job_font_depart">技术部</div></div>
          <div className="department">软件工程</div>
          <div className="stu_kind_ms"><div className="stu_kind_font">Master</div></div>
          <div className="aspect aspect3">研究方向：<i className="aspect_content">区块链/隐私保护</i></div>
        </div>
        <div className="member-card member4">
          <img src={member4} className="member_pic" alt=""/>
          <div className="member_name name3">Brian Seong</div>
          <img src={Korea} className="country country4" alt=""/>
          <div className="job_vp"><div className="job_font_vp">VP</div></div>
          <div className="job_depart"><div className="job_font_depart">活动部</div></div>
          <div className="department4">全球创新学院</div>
          <div className="stu_kind_ms"><div className="stu_kind_font">Master</div></div>
          <div className="aspect aspect4">研究方向：<i className="aspect_content">创业管理/物联网+区块链</i></div>
        </div>
        <div className="member-card member5">
          <img src={member5} className="member_pic" alt=""/>
          <div className="member_name name5">林靖妍 Jessica</div>
          <img src={Indonesia} className="country country5" alt=""/>
          <div className="job_vp"><div className="job_font_vp">VP</div></div>
          <div className="job_depart"><div className="job_font_depart">国际部</div></div>
          <div className="department">工程管理</div>
          <div className="stu_kind_ms"><div className="stu_kind_font">Master</div></div>
          <div className="aspect aspect5">研究方向：<i className="aspect_content">项目管理</i></div>
        </div>
        <div className="member-card member6">
          <img src={member6} className="member_pic" alt=""/>
          <div className="member_name name6">张胜楠 Elaina</div>
          <img src={China} className="country country6" alt=""/>
          <div className="job_vp"><div className="job_font_vp">VP</div></div>
          <div className="job_depart"><div className="job_font_depart">外联部</div></div>
          <div className="department">电子信息</div>
          <div className="stu_kind_ms"><div className="stu_kind_font">Master</div></div>
          <div className="aspect aspect6">研究方向：<i className="aspect_content">区块链游戏产品设计</i></div>
        </div>
      </div>

      <div className="partners"><a id="cooperate">合作伙伴</a></div>
      <div>
        <img src={p1} className="partners1" alt=""/>
        <img src={p2} className="partners2" alt=""/>
        <img src={p3} className="partners3" alt=""/>
        <img src={p4} className="partners4" alt=""/>
        <img src={p5} className="partners5" alt=""/>
        <img src={p6} className="partners6" alt=""/>
        <img src={p7} className="partners7" alt=""/>
        <img src={p8} className="partners8" alt=""/>
      </div>

      <div className="contactus">
        <a id="contact"></a>
        <div className="contact_title">联系我们</div>
        <img src={mail_box} className="mailbox" alt=""/>
        <div className="email">
          <div className="email_font">thublockchain@outlook.com</div>
        </div>
        <a href="mailto:thublockchain@outlook.com">
        <div className="send_btn">
          <div className="send_font">Send</div>
        </div>
        </a>
        <img src={public_wechat} alt="" className="public_pic"/>
        <div className="public">协会公众号</div>
        <img src={wechat_helper} alt="" className="helper_pic"/>
        <div className="helper">微信小助手</div>
      </div>

      <img src={logo_colored} alt="" className="logo_bottom"/>
      <div className="rights"> 2021 ©   Inc. All Rights Reserved </div>



    </div>
  )
  }
}
// function App() {
  
//   );
// }

export default App;
