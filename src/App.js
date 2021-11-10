import React, { useState } from 'react';
import './App.css';
import cn from 'clsx';

const App = () => {
  const [modo, setModo] = useState(false);

  // function handleChange(modo) {
  //   if (modo === 'white') setModo(modo);
  // }

  return (
    <div className={cn('bg', { whiteMode: modo })}>
      <header className={cn('header', { whiteHeader: modo })}>
        <div className={cn('topo', { whiteTopo: modo })}>
          <div class="rightTop">
            <h1>Social Media Dashboard</h1>
            <p>Total Followers: 23, 004</p>
          </div>
          <div class="mod">
            {modo ? <p>Light Modo</p> : <p>Dark Modo</p>}

            <label className="custom-radio-btn">
              <input
                type="checkbox"
                value="Modo"
                checked={modo}
                onChange={({ target }) => setModo(target.checked)}
              />
              <span className="checkmark"></span>
            </label>
          </div>
        </div>
      </header>

      <section className="social">
        <div className={cn('socialMedias', { whiteSocialMedias: modo })}>
          <p className="nome">@nathanf </p>
          <h1>1987</h1>
          <p className="followers">Followers </p>
          <span className="follow">12 Today</span>
        </div>
        <div className={cn('socialMedias', { whiteSocialMedias: modo })}>
          <p className="nome"> @nathanf</p>
          <h1>1044</h1>
          <p className="followers">Followers</p>
          <span className="follow">99 Today</span>
        </div>
        <div className={cn('socialMedias', { whiteSocialMedias: modo })}>
          <p className="nome">@realnathanf </p>
          <h1>11k</h1>
          <p className="followers">Followers</p>
          <span className="follow">1099 Today</span>
        </div>
        <div className={cn('socialMedias', { whiteSocialMedias: modo })}>
          <p className="nome">Nathan F.</p>
          <h1>8239</h1>
          <p className="followers">Subscribers</p>
          <span className="unfollow">144 Today</span>
        </div>
      </section>
      <section className={cn('overview', { whiteOverview: modo })}>
        <h1>Overview - Today</h1>
        <div className="info">
          <div className={cn('infoToday', { whiteInfoToday: modo })}>
            <p>Page Views</p>
            <span> X </span>
            <h2>87</h2>
            <span className="positivo">3%</span>
          </div>
          <div className={cn('infoToday', { whiteInfoToday: modo })}>
            <p>Likes</p>
            <span> X </span>

            <h2>52</h2>
            <span className="negativo">2%</span>
          </div>
          <div className={cn('infoToday', { whiteInfoToday: modo })}>
            <p>Likes</p>
            <span> X </span>
            <h2>5462</h2>
            <span className="positivo">2257%</span>
          </div>
          <div className={cn('infoToday', { whiteInfoToday: modo })}>
            <p>Profile Views</p>
            <span> X </span>
            <h2>52k</h2>
            <span className="positivo">1375%</span>
          </div>
          <div className={cn('infoToday', { whiteInfoToday: modo })}>
            <p>Retweets</p>
            <p>X</p>
            <h2>117</h2>
            <span className="positivo">303%</span>
          </div>
          <div className={cn('infoToday', { whiteInfoToday: modo })}>
            <p>Likes</p>
            <p>X</p>
            <h2>507</h2>
            <span className="positivo">553%</span>
          </div>
          <div className={cn('infoToday', { whiteInfoToday: modo })}>
            <p>Likes</p>
            <p>X</p>
            <h2>107</h2>
            <span className="negativo">19%</span>
          </div>
          <div className={cn('infoToday', { whiteInfoToday: modo })}>
            <p>Total Views</p>
            <p>X</p>
            <h2>1407</h2>
            <span className="negativo">12%</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;
