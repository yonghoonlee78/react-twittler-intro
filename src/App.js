import React from 'react';
import './App.css';
import { dummyTweets } from './static/dummyData';
// 위에 껀 건들면 피살됨..........

console.log(dummyTweets); 

const Sidebar = () => {
  return (
    <section className="sidebar">
      <i className="far fa-comment-dots"></i>
    </section>
  );
};

const Counter = () => {
  return (
    <div className="tweetForm__input">
      <div className="tweetForm__inputWrapper">
        <div className="tweetForm__count" role="status">
          total : {dummyTweets.length}
        </div>
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="footer">;
      ⓒ 2025 My Twittler
    </footer>
  )
}

const Tweets = () => {

   const formatDate = (dateString) => {
    const date = new Date(dateString);
    const yyyy = date.getFullYear();
    const m = date.getMonth() + 1;
    const d = date.getDate();
    return `${yyyy}. ${m}. ${d}.`;
  };

  return (
    <ul className="tweets">
      {dummyTweets.map((tweet) => {
        return (
          <li className="tweet" key={tweet.id}>
            <div className="tweet__profile">
              <img src="https://randomuser.me/api/portraits/men/1.jpg" alt="Bob" />
            </div>
            <div className="tweet__content">
              <div className="tweet__userInfo">
               <span
                 className={
                   tweet.username === "parkhacker"
                    ? "tweet__username tweet__username--purple"
                    : "tweet__username"
                 }
                    style={
                      tweet.username === "Bob"
                        ? { backgroundColor: "rgb(235, 229, 249)", padding: "2px 6px", borderRadius: "4px" }
                        : {}
                 }
                >
                    {tweet.username}
                  </span>
                  <span
                  className="tweet__createdAt"
                  style={{ marginLeft: "8px", color: "#888", fontSize: "0.9em" }}
                >
                  {formatDate(tweet.createdAt)}
                </span>
            </div>
            <div className="tweet__message">
              {tweet.content}
            </div>
           </div>
          </li>
        );
      })}
    </ul>
  );
};

const Features = () => {
  return (
    <section className="features">
      <div className="tweetForm__container">
        <div className="tweetForm__wrapper">
          <div className="tweetForm__profile"></div>
          <Counter />
        </div>
      </div>
      <Tweets />
      <Footer />
    </section>
  );
};

const App = () => {
  return (
    <div className="App">
      <main>
        <Sidebar />
        <Features />
      </main>
    </div>
  );
};

// ! 아래 코드는 수정하지 않습니다.
export { App, Sidebar, Counter, Tweets, Features, Footer };
