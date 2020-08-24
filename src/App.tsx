import React, { useState } from 'react';
import fs from 'fs';
import { Route, Router, Text, ButtonGroup, Button, useText, Image } from '@urban-bot/core';
import logo from './assets/logo.png';

function Logo() {
  const [title, setTitle] = useState('Urban Bot');  
  const addRobot = () => {
    setTitle(title + '🤖');
  };  
  return (
    <Image
      title={title}
      file={fs.createReadStream(logo)}
      buttons={
        <ButtonGroup>
          <Button onClick={addRobot}>Add robot</Button>
        </ButtonGroup>
      }
    />
  );
}

function Compliment() {
  const [text, setText] = useState('Say your name, please');
  useText(({ text }) => {
    const superCompliment = `Моя любимая ${text}! Я тебя очень люблю! Ты мой самый доргой человек!!`
    const usualCompliment = `${text} вы сегодня просто неотразимы)) Ваш муж вас любит!`
    setText(text === 'Наташка' ? superCompliment : usualCompliment)
  });  
  return (
    <Text>
      <i>{text}</i>
    </Text>
  );
}

function CatsInfo() {
    const [text, setText] = useState('Sorry! Feature is unavailable now(((');
    useText(() => {
      setText(`${text}(`);
    });  
    return (
      <Text>
        <i>{text}</i>
      </Text>
    );
  }

export function App() {
  return (
    <>
      <Text>Welcome to Eugene Bot! Type /compliment, /catsInfo </Text>
      <Router>
        <Route path="/compliment">
          <Compliment />
        </Route>
        <Route path="/catsInfo">
          <CatsInfo />
        </Route>
      </Router>
    </>
  );
}
