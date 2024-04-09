import React from 'react'
import {Spin, Typography} from 'antd'

const {Text} = Typography

const style: React.CSSProperties = {
  textAlign: 'center',
  padding: '20px'
}

export const Loader = () => {
  return (
    <div style={style}>
      <Spin/>
      <br/><br/>
      <Text type="secondary">Вырезаем фон</Text>
    </div>
  )
}
