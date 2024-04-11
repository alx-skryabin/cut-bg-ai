import React, {useState} from 'react'
import {Button, Form, Input, Modal} from 'antd'
import {STORAGE_TOKEN} from '../../config'
import './Token.scss'

function Token() {
  const [form] = Form.useForm()
  const [isModalOpen, setIsModalOpen] = useState(false)

  const saveToken = (data: { token: string }) => {
    window.localStorage.setItem(STORAGE_TOKEN, data.token)
    setIsModalOpen(false)
  }

  const showModal = () => {
    form.setFieldsValue({
      token: window.localStorage.getItem(STORAGE_TOKEN)
    })
    setIsModalOpen(true)
  }

  return (
    <div className="as__token">
      <div className="as__token_btn-open" onClick={showModal}>
        <i className="fa-solid fa-gear"/>
      </div>

      <Modal
        title="Настройка токена"
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        destroyOnClose={true}
        footer={null}
      >
        <Form form={form} onFinish={saveToken}>
          <Form.Item name="token">
            <Input placeholder="Введите token"/>
          </Form.Item>

          <Button type="primary" htmlType="submit" ghost>
            Сохранить
          </Button>
        </Form>

      </Modal>
    </div>
  )
}

export default Token
