import React, {useState} from 'react'
import {Upload} from 'antd'
import {RcFile, UploadProps} from 'antd/es/upload/interface'
import {API} from '../../api/api'
import {Loader} from '../Loader/Loader'
import './UploadImg.scss'


const UploadImg: React.FC = () => {
  const [src, setSrc] = useState<string | null>(null)
  const [loading, setLoading] = useState<boolean>(false)


  const beforeUpload = (file: RcFile) => {
    setLoading(true)
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => {
      const base64: string = reader.result?.toString().split('base64,')[1] as string
      setSrc(reader.result as string)

      API.removeBG(base64)
        .then(url => {
          setLoading(false)
          setSrc(url)
        })
    }
    return false
  }

  const props: UploadProps = {
    name: 'file',
    multiple: false,
    accept: 'image/*',
    showUploadList: false,
    beforeUpload
  }

  return (
    <div className="as__upload-area">
      {
        loading
          ? <Loader/>
          : <Upload.Dragger {...props}>
            <p className="ant-upload-drag-icon">
              <i className="fa-solid fa-upload"/>
            </p>
            <p className="ant-upload-text">Перетащите или загрузите файл</p>
            <div className="as__upload-area_button">
              <i className="fa-solid fa-camera"/>
              <span>Загрузить фото</span>
            </div>
          </Upload.Dragger>
      }

      {
        src &&
        <div className="as__upload-area_preview">
          <img src={src} alt="view"/>
          <span onClick={() => {
            if (!loading) setSrc(null)
          }}>
            <i className="fa-solid fa-xmark"/>
          </span>
        </div>
      }

      {
        (src && !loading) &&
        <a
          href={src}
          className="as__upload-area_save"
          download="modify_file.png"
          target="_blank"
        >
          <i className="fa-regular fa-floppy-disk"/> Скачать
        </a>
      }
    </div>
  )
}

export default UploadImg
