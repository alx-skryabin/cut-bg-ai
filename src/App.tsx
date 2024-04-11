import React from 'react'
import UploadImg from './components/UploadImg/UploadImg'
import Token from './components/Token/Token'
import './App.scss'

function App() {
  return (
    <div className="as__app">
      <div className="as__app-wrap">
        <Token/>
        <h1>Загрузите изображение <br/> для удаления фона</h1>
        <UploadImg/>
      </div>
    </div>
  )
}

export default App
