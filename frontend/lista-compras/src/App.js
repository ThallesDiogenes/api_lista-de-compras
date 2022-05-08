import './App.css';
import { Menu } from 'antd';
import Routes  from './routes';
import { Layout, Avatar } from 'antd';
import { UserOutlined, HomeOutlined, PlusOutlined, UnorderedListOutlined, InstagramOutlined, LinkedinOutlined, GithubOutlined } from '@ant-design/icons'
import { useHistory } from 'react-router-dom';

const { Header, Footer, Sider, Content } = Layout;

function App() {
  const history = useHistory();
  return (
    <div className="main">
      <Layout className='main__content'>
        <Header className='header'>Lista de Compras</Header>
        <Layout>
          <Sider className='menu'>
            <div className='avatar'>
              <Avatar size={80} icon={<UserOutlined />} />
              <br />
              <br />
              {/* <hr /> */}
            </div>
            <Menu className='menu__section'>
              <Menu.Item key={1} icon={ <HomeOutlined /> } onClick={() => history.push('/')}>
                Página inicial
              </Menu.Item>
              <Menu.Item key={2} icon={ <UserOutlined /> } onClick={() => history.push('/login')}>
                Login
              </Menu.Item>
              <Menu.Item key={3} icon={ <PlusOutlined /> } onClick={() => history.push('/adicionar')}>
                Adicionar produto
              </Menu.Item>
              <Menu.Item key={4} icon={ <UnorderedListOutlined /> } onClick={() => history.push('/produtos')}>
                Listar produtos
              </Menu.Item>
            </Menu>
          </Sider>
          <Content>
            <Routes />
          </Content>
        </Layout>
        <Footer className='footer'>
          &copy; 2022 API de Lista de compras - Todos os direitos reservados.
          <div className='social'>
              <a href='https://www.instagram.com/thalles.diogenes/' target='_blank' rel="noreferrer"><Avatar size={38} icon={<InstagramOutlined />} className='social_icons' /></a>
              <a href='https://www.linkedin.com/in/thalles-di%C3%B3genes-61729b1b9' target='_blank' rel="noreferrer"><Avatar size={38} icon={<LinkedinOutlined />} className='social_icons' /></a>
              <a href='https://github.com/ThallesDiogenes' target='_blank' rel="noreferrer"><Avatar size={38} icon={<GithubOutlined />} className='social_icons' /> </a>
          </div>
        </Footer>
      </Layout>
    </div>
  );
}


export default App;
