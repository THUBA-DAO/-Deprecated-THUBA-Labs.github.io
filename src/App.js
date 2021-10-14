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
import intl from 'react-intl-universal';
import _ from "lodash";
import http from "axios";

require('intl/locale-data/jsonp/en.js');
require('intl/locale-data/jsonp/zh.js');
const SUPPOER_LOCALES = [
  {
    name: "English",
    value: "en-US"
  },
  {
    name: "简体中文",
    value: "zh-CN"
  }
];

class App extends Component {
  state = {initDone: false};

  // constructor(props) {
  //   super(props);
  //   this.onSelectLocale = this.onSelectLocale.bind(this);
  // }

  componentDidMount() {
    this.loadLocales();
  }

  loadLocales() {
    let currentLocale = intl.determineLocale({
      urlLocaleKey: "lang",
      cookieLocaleKey: "lang"
    });
    if (!_.find(SUPPOER_LOCALES, { value: currentLocale })) {
      currentLocale = "en-US";
    }
    this.currentLocale = currentLocale;

    http
      .get(`/locales/${currentLocale}.json`)
      .then(res => {
        console.log("App locale data", res.data);
        // init method will load CLDR locale data according to currentLocale
        return intl.init({
          currentLocale,
          locales: {
            [currentLocale]: res.data
          }
        });
      })
      .then(() => {
        // After loading CLDR locale data, start to render
        this.setState({ initDone: true });
      });
  }

  renderLocaleSelector() {
    console.log(this.currentLocale);
    if(this.currentLocale == "en-US")
    {
      // this.currentLocale = "zh-CN";
      window.location.search = `?lang=zh-CN`;
    }
    else
    {
      // this.currentLocale = "en-US";
      window.location.search = `?lang=en-US`;
    }
      
  }
  // renderLocaleSelector() {
  //   return (
  //     <select onChange={this.onSelectLocale} defaultValue="">
  //       <option value="" disabled>Change Language</option>
  //       {SUPPOER_LOCALES.map(locale => (
  //         <option key={locale.value} value={locale.value}>{locale.name}</option>
  //       ))}
  //     </select>
  //   );
  // }

  // onSelectLocale(e) {
  //   let lang = e.target.value;
  //   this.location.search = `?lang=${lang}`;
  // }

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
    this.state.initDone && <div className="App">
      <div>
        <a id="top"></a>
        <img src={bg} className="head_bg1" alt=""  />
        <img src={bg_pic} className="head_bg2" alt=""  />
        <div className="head_words">
          <div className="head_font">{intl.getHTML("HEAD")}</div>
        </div>
        <img src={logo} className="logo" alt=""/>
        <a onClick={()=>this.scrollToAnchor('top')} className="btn">
          <div className="header_font header_button_1">{intl.getHTML("index")}</div>
        </a>
        <a onClick={()=>this.scrollToAnchor('resources')} className="btn">
          <div className="header_font header_button_2">{intl.getHTML("resources")}</div>
        </a>
        <a onClick={()=>this.scrollToAnchor('team')} className="btn">
        <div className="header_font header_button_3">{intl.getHTML("team")}</div>
        </a>
        <a onClick={()=>this.scrollToAnchor('cooperate')} className="btn">
          <div className="header_font header_button_4">{intl.getHTML("cooperate")}</div>
        </a>
        <a onClick={()=>this.scrollToAnchor('contact')} className="btn">
          <div className="header_font header_button_5">{intl.getHTML("contact")}</div>
        </a>
        <a onClick={()=>this.renderLocaleSelector()} className="btn">
          <div className="header_font header_button_6">EN/中文</div>
        </a>
      </div>
      
        <div className="subtitle"><a id="resources">{intl.getHTML("subtitle1")}</a></div>
      
      <div>        
        <img src={course_pic} className="course_pic" alt=""/>
        <div className="course_card_pos card">
          <div className="course_card_title_pos card_title">{intl.getHTML("course")}</div>
          <div className="course_words card_font">{intl.getHTML("course_desc")}</div>
          
          <a href="https://space.bilibili.com/489099832/channel/seriesdetail?sid=294730" target="_blank" rel="noopener noreferrer">
            <div className="card_btn">
              <div className="card_btn_words">{intl.getHTML("course_click")}</div>          
              <img src={course_arrow} className="card_arrow" alt=""/>
            </div>
          </a>
        </div>
      </div>
      <img src={arrow_yellow} className="arrow_yellow arrow_yellow_1" alt=""/>
      
      <div>
        <div className="talk_card_pos card">
          <div className="talk_card_title_pos card_title">{intl.getHTML("talk")}</div>
          <div className="talk_words card_font">{intl.getHTML("talk_desc")}</div>
          <a href="https://space.bilibili.com/489099832/channel/seriesdetail?sid=294675" target="_blank" rel="noopener noreferrer">
          <div className="card_btn">
            <div className="card_btn_words">{intl.getHTML("talk_click")}</div>
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
          <div className="hackathon_card_title_pos card_title">{intl.getHTML("hackathon")}</div>
          <div className=" card_font hackathon_words">{intl.getHTML("hackathon_desc")}</div>
          <a href="https://space.bilibili.com/489099832/channel/seriesdetail?sid=294689" target="_blank" rel="noopener noreferrer">
          <div className="card_btn">
            <div className="card_btn_words">{intl.getHTML("hackathon_click1")}</div>
            <img src={course_arrow} className="card_arrow" alt=""/>
          </div>
          </a>
          <a href="https://github.com/THUBA-Labs/Hackthons" target="_blank" rel="noopener noreferrer">
          <div className="card_btn_demo">
            <div className="card_btn_words_demo">{intl.getHTML("hackathon_click2")}</div>
          </div>
          </a>
        </div>
      </div>
      <img src={arrow_rotate} className="arrow_yellow_3" alt=""/>

      <div>
        <div className="research_card_pos card">
          <div className="talk_card_title_pos card_title">{intl.getHTML("research")}</div>
          <div className="talk_words card_font">{intl.getHTML("research_desc")}</div>
          <a href="https://github.com/THUBA-Labs/Research" target="_blank" rel="noopener noreferrer">
          <div className="card_btn">
            <div className="card_btn_words">{intl.getHTML("research_click")}</div>
            <img src={course_arrow} className="card_arrow" alt=""/>
          </div>
          </a>
        </div>
        <img src={research_pic} className="research_pic" alt=""/>        
      </div>
      
      <div className="co-members"><a id="team">{intl.getHTML("subtitle2")}</a></div>

      <div>
        <div className="member-card member1">
          <img src={member1} className="member1_pic" alt=""/>
          <div className="member_name name1">张 奥 Zeo</div>
          <img src={China} className="country country1" alt=""/>
          <div className="job"><div className="job_font">President of THUBA</div></div>
          <div className="department">{intl.getHTML("College1")}</div>
          <div className="stu_kind_phd"><div className="stu_kind_font">PHD</div></div>
          <div className="aspect aspect1">{intl.getHTML("Direction")}<i className="aspect_content">{intl.getHTML("Direction1")}</i></div>
        </div>
        <div className="member-card member2">
          <img src={member2} className="member_pic" alt=""/>
          <div className="member_name name2">肖 娜 Celia</div>
          <img src={China} className="country country2" alt=""/>
          <div className="job_vp"><div className="job_font_vp">VP</div></div>
          <div className="job_depart"><div className="job_font_depart">{intl.getHTML("Department2")}</div></div>
          <div className="department">{intl.getHTML("College2")}</div>
          <div className="stu_kind_ms"><div className="stu_kind_font">Master</div></div>
          <div className="aspect aspect2">{intl.getHTML("Direction")}<i className="aspect_content">{intl.getHTML("Direction2")}</i></div>
        </div>
        <div className="member-card member3">
          <img src={member3} className="member_pic" alt=""/>
          <div className="member_name name3">韩昊轩 Sean</div>
          <img src={China} className="country country3" alt=""/>
          <div className="job_vp"><div className="job_font_vp">VP</div></div>
          <div className="job_depart"><div className="job_font_depart">{intl.getHTML("Department3")}</div></div>
          <div className="department">{intl.getHTML("College3")}</div>
          <div className="stu_kind_ms"><div className="stu_kind_font">Master</div></div>
          <div className="aspect aspect3">{intl.getHTML("Direction")}<i className="aspect_content">{intl.getHTML("Direction3")}</i></div>
        </div>
        <div className="member-card member4">
          <img src={member4} className="member_pic" alt=""/>
          <div className="member_name name3">Brian Seong</div>
          <img src={Korea} className="country country4" alt=""/>
          <div className="job_vp"><div className="job_font_vp">VP</div></div>
          <div className="job_depart"><div className="job_font_depart">{intl.getHTML("Department4")}</div></div>
          <div className="department4">{intl.getHTML("College4")}</div>
          <div className="stu_kind_ms"><div className="stu_kind_font">Master</div></div>
          <div className="aspect aspect4">{intl.getHTML("Direction")}<i className="aspect_content">{intl.getHTML("Direction4")}</i></div>
        </div>
        <div className="member-card member5">
          <img src={member5} className="member_pic" alt=""/>
          <div className="member_name name5">林靖妍 Jessica</div>
          <img src={Indonesia} className="country country5" alt=""/>
          <div className="job_vp"><div className="job_font_vp">VP</div></div>
          <div className="job_depart"><div className="job_font_depart">{intl.getHTML("Department5")}</div></div>
          <div className="department">{intl.getHTML("College5")}</div>
          <div className="stu_kind_ms"><div className="stu_kind_font">Master</div></div>
          <div className="aspect aspect5">{intl.getHTML("Direction")}<i className="aspect_content">{intl.getHTML("Direction5")}</i></div>
        </div>
        <div className="member-card member6">
          <img src={member6} className="member_pic" alt=""/>
          <div className="member_name name6">张胜楠 Elaina</div>
          <img src={China} className="country country6" alt=""/>
          <div className="job_vp"><div className="job_font_vp">VP</div></div>
          <div className="job_depart"><div className="job_font_depart">{intl.getHTML("Department6")}</div></div>
          <div className="department">{intl.getHTML("College6")}</div>
          <div className="stu_kind_ms"><div className="stu_kind_font">Master</div></div>
          <div className="aspect aspect6">{intl.getHTML("Direction")}<i className="aspect_content">{intl.getHTML("Direction6")}</i></div>
        </div>
      </div>

      <div className="partners"><a id="cooperate">{intl.getHTML("subtitle3")}</a></div>
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
        <div className="contact_title">{intl.getHTML("contactus")}</div>
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
        <div className="public">{intl.getHTML("publicWechat")}</div>
        <img src={wechat_helper} alt="" className="helper_pic"/>
        <div className="helper">{intl.getHTML("WechatHelper")}</div>
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
