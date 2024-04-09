import React from 'react'
import UploadImg from './components/UploadImg/UploadImg'
import './App.scss'

function App() {
  return (
    <div className="as__app">
      <div className="as__app-wrap">
        <h1>Загрузите изображение <br/> для удаления фона</h1>
        <UploadImg/>
      </div>
    </div>
  )
}

export default App
