import { Image } from 'antd';
import { StarOutlined, ToolOutlined, UserOutlined } from '@ant-design/icons';



export const allServices = (scopedService:any) => [
  {
    title: scopedService("title1"),
    image: (
      <Image
      src="/images/devops.png"
      preview={false} // Désactive l'aperçu modal
        style={{ objectFit: "contain",  maxHeight: '100%',  width: '100%' }}
        alt="service1"
      />
    ),
    icon: <StarOutlined style={{ fontSize: 32, color: 'orange' }} />,
    description: scopedService("description1"),
  },
  {
    title: scopedService("title2"),
    image: (
      <Image
        src="/images/infrastructure.png"
        preview={false}
        style={{ objectFit: "contain", maxHeight: '100%', width: '100%' }}
        alt="service2"
      />
    ),
    icon: <ToolOutlined style={{ fontSize: 32, color: 'grey' }} />,
    description: scopedService("description2"),
  },
  {
    title: scopedService("title3"),
    image: (
      <Image
      src="/images/api.png"
      preview={false}
        style={{ objectFit: "contain", maxHeight: '100%', width: '100%' }}
        alt="service3"
      />
    ),
    icon: <UserOutlined style={{ fontSize: 32, color: 'grey' }} />,
    description: scopedService("description3"),
  },
];