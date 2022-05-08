import './styles.css';
import { Form, Input, Button } from 'antd'; 
import { useState } from 'react'

export default function Login () {

    const [ disabled ] = useState(false);

    return(
        <div className='login__container'>
            <section className='section_login'>
            <div className='login'>
                <Form 
                name='submitUsuario'
                labelCol={{span:8}}
                wrapperCol={{span:16}}
                onFinish={Login}
                autoComplete='off'
                >
                    <h1 className='title'> Acessar conta</h1>
                    <Form.Item 
                    label='Usuário'
                    name='name'
                    rules={[{ required:true, message:'Insira o usuário cadastrado'}]}
                    className='input'
                    >
                        <Input placeholder='example@example.com' className='place'/>
                    </Form.Item>

                    <Form.Item 
                    label='Senha'
                    name='description'
                    rules={[{ required:true, message:'Insira a senha'}]}
                    className='input'
                    >
                        <Input className='place'/>
                    </Form.Item>

                    <Form.Item>
                        <Button type='primary' htmlType='submit' disabled={disabled} className='button'>
                            Entrar
                        </Button>
                    </Form.Item>
                </Form>
            </div>
            </section>
        </div>
    )
}